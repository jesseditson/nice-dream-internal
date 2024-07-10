import feather from "feather-icons";
import { cre8 } from "upd8";
import { NDEvent } from "./events";
import { State } from "./types";
import { ModelView } from "./views/ModelView";
import { ModelListView } from "./views/ModelListView";
import { matchEnum } from "./utils";
import { Nav } from "./views/Nav";
import { QuickSearch } from "./views/QuickSearch";
import { ChannelView } from "./views/ChannelView";
import { addRemoteState, reloadRemoteData } from "./data";
import { SignInView } from "./views/SignInView";

const initUI = cre8<State, NDEvent>([
  Nav,
  SignInView,
  ModelView,
  ModelListView,
  QuickSearch,
  ChannelView,
]);

type Accumulator = { currentCount: number; isSaturated: boolean };
const defaultAccumulator = (currentCount: number): Accumulator => ({
  currentCount,
  isSaturated: false,
});
const updateChart = (state: State): State => {
  const { model, days, offsetDay } = state.chartInputs;
  if (model) {
    const data: State["chart"]["data"] = [];
    const profitLoss: State["chart"]["profitLoss"] = [];
    let acc: Record<string, Accumulator> = {};
    let profit = 0;
    let loss = 0;
    for (let day = offsetDay; day < days; day++) {
      let dayRevenue = 0;
      model.channels.forEach((c) => {
        let channelCount = 0;
        let channelRevenue = 0;
        c.inputs.forEach((i) => {
          const dailyGrowth = i.growthFreq ? i.growthPercent / i.growthFreq : 0;
          if (!acc[i.guid]) {
            acc[i.guid] = defaultAccumulator(i.seed);
          }
          if (!acc[i.guid].isSaturated) {
            acc[i.guid].currentCount =
              acc[i.guid].currentCount + acc[i.guid].currentCount * dailyGrowth;
          }
          const count = Math.round(acc[i.guid].currentCount);
          if (count >= i.saturation) {
            acc[i.guid].isSaturated = true;
          }
          const revenue = (count / i.avgFreq) * i.avgSize;
          if (revenue >= 0) {
            profit += revenue;
          } else {
            loss -= revenue;
          }
          channelRevenue += revenue;
          channelCount += count;
          data.push({
            input: i.name,
            channel: c.name,
            day,
            count,
            revenue,
          });
        });
        dayRevenue += channelRevenue;
        // channels[channelIndex].values.push({
        //   group: c.name,
        //   count: channelCount,
        //   day,
        //   revenue: channelRevenue,
        // });
      });
      profitLoss.push({ total: dayRevenue });
    }
    state.chart = {
      data,
      profitLoss,
      profit,
      loss,
    };
  }
  return state;
};

window.addEventListener("load", async () => {
  const state: State = {
    googleToken: null,
    sheetId: "1ywvFgv4YQGTOPddovWhQ0D_B5URN2NAp7y4yMGoCtoA",
    models: [],
    channels: [],
    inputs: [],
    showingScreen: "Models",
    expandedChannels: new Set(),
    chartInputs: { days: 90, offsetDay: 0 },
    chart: { data: [], profitLoss: [], profit: 0, loss: 0 },
  };

  const upd8 = initUI(state, async (event) => {
    await matchEnum(event, async (ev, value) => {
      switch (ev) {
        case "SignedIn": {
          state.googleToken = value.credential;
          await reloadRemoteData(state.googleToken, state.sheetId);
          await addRemoteState(state);
          updateChart(state);
          break;
        }
        case "GoBack": {
          switch (state.showingScreen) {
            case "Model":
              state.showingScreen = "Models";
              break;
            case "Inputs":
              state.showingScreen = "Channel";
              break;
            case "Channels":
              state.showingScreen = "Model";
              break;
            case "Input":
              state.showingScreen = "Inputs";
              break;
            case "Channel":
              state.showingScreen = "Model";
              break;
          }
          break;
        }
        case "ShowModel": {
          const model = state.models.find((m) => m.guid === value!.guid);
          if (model) {
            state.chartInputs.model = model;
            updateChart(state);
            state.showingScreen = "Model";
          }
          break;
        }
        case "ToggleChannelExpanded": {
          if (state.expandedChannels.has(value.guid)) {
            state.expandedChannels.delete(value.guid);
          } else {
            state.expandedChannels.add(value.guid);
          }
          break;
        }
        case "ShowChannel": {
          const channel = state.channels.find((m) => m.guid === value!.guid);
          if (channel) {
            state.showingChannel = channel;
            state.showingScreen = "Channel";
          }
          break;
        }
        case "ChooseChannel": {
          state.quickSearch = "Channel";
          state.quickSearchGuid = value.guid;
          break;
        }
        case "ChooseInput": {
          state.quickSearch = "Input";
          state.quickSearchGuid = value.guid;
          break;
        }
        case "CancelSearch": {
          state.quickSearch = undefined;
          state.quickSearchGuid = undefined;
          break;
        }
        case "CreateChannel": {
          const newChannel = await db.collection("channels").add({
            name: value.name,
          });
          await db
            .collection("models")
            .doc(value.guid)
            .update({
              channel: firebase.firestore.FieldValue.arrayUnion(
                `/channels/${newChannel.id}`
              ),
            });
          await reloadRemoteData(db);
          addRemoteState(state);
          break;
        }
        case "UpdateChart": {
          state.chartInputs.days = value.days;
          state.chartInputs.offsetDay = value.offset;
          updateChart(state);
        }
      }
    });
    upd8(state);
    feather.replace();
  });
});

if (DEV) {
  console.log("Dev Mode enabled");
  // ESBuild watch
  new EventSource("/esbuild").addEventListener("change", () =>
    location.reload()
  );
}
