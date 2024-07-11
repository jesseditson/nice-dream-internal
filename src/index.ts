import feather from "feather-icons";
import { cre8 } from "upd8";
import { NDEvent } from "./events";
import { State } from "./state";
import { ModelView } from "./views/ModelView";
import { ModelListView } from "./views/ModelListView";
import { matchEnum } from "./utils";
import { Nav } from "./views/Nav";
import { QuickSearch } from "./views/QuickSearch";
import { addRemoteState, reloadRemoteData } from "./data";
import { SignInView } from "./views/SignInView";
import { InputView } from "./views/InputView";

const initUI = cre8<State, NDEvent>([
  Nav,
  SignInView,
  ModelView,
  ModelListView,
  QuickSearch,
  InputView,
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
      model.inputs.forEach((i) => {
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
        dayRevenue += revenue;
        if (revenue >= 0) {
          profit += revenue;
        } else {
          loss -= revenue;
        }
        data.push({
          input: i.name,
          day,
          count,
          revenue,
        });
      });
      profitLoss.push({ day, total: dayRevenue });
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
    inputs: [],
    showingScreen: "Models",
    chartInputs: { days: 90, offsetDay: 0 },
    chart: { data: [], profitLoss: [], profit: 0, loss: 0 },
  };

  const upd8 = initUI(state, async (event) => {
    await matchEnum(event, async (ev, value) => {
      switch (ev) {
        case "SignedIn": {
          state.googleToken = value.token;
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
              state.showingScreen = "Model";
              break;
            case "Input":
              state.showingScreen = "Inputs";
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
        case "CreateInput": {
          // TODO create
          await reloadRemoteData(state.googleToken!, state.sheetId);
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
