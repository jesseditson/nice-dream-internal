import feather from "feather-icons";
import { cre8 } from "upd8";
import { NDEvent } from "./events";
import { Model, State } from "./state";
import { ModelView } from "./views/ModelView";
import { ModelListView } from "./views/ModelListView";
import { matchEnum } from "./utils";
import { Nav } from "./views/Nav";
import { QuickSearch } from "./views/QuickSearch";
import { addRemoteState, reloadRemoteData, setInputData } from "./data";
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
  const { model, days, offsetDay, hiddenInputs } = state.chartInputs;
  const chartData = (name: string, model: Model, gMult: number) => {
    const data: State["charts"][0]["data"] = [];
    const profitLoss: State["charts"][0]["profitLoss"] = [];
    let acc: Record<string, Accumulator> = {};
    let profit = 0;
    let loss = 0;
    for (let day = offsetDay + 1; day <= days; day++) {
      let dayRevenue = 0;
      model.inputs.forEach((i) => {
        if (hiddenInputs.has(i.number)) {
          return;
        }
        const dailyGrowth = i.growthFreq ? i.growthPercent / i.growthFreq : 0;
        if (!acc[i.number]) {
          acc[i.number] = defaultAccumulator(i.seed);
        }
        if (!acc[i.number].isSaturated) {
          acc[i.number].currentCount =
            acc[i.number].currentCount +
            acc[i.number].currentCount * dailyGrowth;
        }
        let count = Math.round(acc[i.number].currentCount);
        if (count >= i.saturation) {
          acc[i.number].isSaturated = true;
        }
        i.curves.forEach((c) => {
          count = count * c.curve[day % c.period];
        });
        count = count + count * (i.variability * gMult);
        const revenue = (count / i.frequency) * i.size;
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
    return {
      name,
      data,
      profitLoss,
      profit,
      loss,
    };
  };
  if (model) {
    state.charts = [
      chartData("high", model, 1),
      chartData("mid", model, 0),
      chartData("low", model, -1),
    ];
  }
  return state;
};

window.addEventListener("load", async () => {
  const state: State = {
    googleToken: null,
    sheetId: "1ywvFgv4YQGTOPddovWhQ0D_B5URN2NAp7y4yMGoCtoA",
    models: [],
    inputs: [],
    openInputs: new Set(),
    showingScreen: "Models",
    chartInputs: {
      showingStacks: "mid",
      days: 30,
      offsetDay: 0,
      hiddenInputs: new Set(),
    },
    charts: [],
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
          const model = state.models.find((m) => m.number === value!.number);
          if (model) {
            state.chartInputs.model = model;
            updateChart(state);
            state.showingScreen = "Model";
          }
          break;
        }
        case "ToggleInputShowing": {
          if (state.openInputs.has(value.number)) {
            state.openInputs.delete(value.number);
          } else {
            state.openInputs.add(value.number);
          }
          break;
        }
        case "SetInputValue": {
          setInputData(value.number, value.field, value.value);
          addRemoteState(state);
          updateChart(state);
          break;
        }
        case "ChooseInput": {
          state.quickSearch = "Input";
          state.quickSearchNumber = value.number;
          break;
        }
        case "CancelSearch": {
          state.quickSearch = undefined;
          state.quickSearchNumber = undefined;
          break;
        }
        case "CreateInput": {
          // TODO create
          await reloadRemoteData(state.googleToken!, state.sheetId);
          addRemoteState(state);
          break;
        }
        case "UpdateChart": {
          if (value.days) {
            state.chartInputs.days = value.days;
          }
          if (value.offsetDay) {
            state.chartInputs.offsetDay = value.offsetDay;
          }
          if (value.hiddenInputs) {
            state.chartInputs.hiddenInputs = value.hiddenInputs;
          }
          if (value.showingStacks) {
            state.chartInputs.showingStacks = value.showingStacks;
          }
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
