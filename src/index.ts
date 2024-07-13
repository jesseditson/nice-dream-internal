import feather from "feather-icons";
import { cre8 } from "upd8";
import { NDEvent } from "./events";
import { ChartData, Model, State } from "./state";
import { ModelView } from "./views/ModelView";
import { ModelListView } from "./views/ModelListView";
import { assertUnreachable, invariant, matchEnum } from "./utils";
import { Nav } from "./views/Nav";
import { QuickSearch } from "./views/QuickSearch";
import { addRemoteState, getAPI, inputs, models, setInputData } from "./data";
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
const getChartData = (
  name: string,
  model: Model,
  gMult: number,
  days?: number,
  offsetDay?: number,
  hiddenInputs?: Set<number>
): ChartData => {
  days = days || model.defaultDays;
  offsetDay = offsetDay || model.defaultOffset;
  hiddenInputs = hiddenInputs || new Set();
  const data: State["showingCharts"][0]["data"] = [];
  const profitLoss: State["showingCharts"][0]["profitLoss"] = [];
  let acc: Record<string, Accumulator> = {};
  let profit = 0;
  let loss = 0;
  let startDay = offsetDay + 1;
  for (let day = 1; day <= startDay + days; day++) {
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
          acc[i.number].currentCount + acc[i.number].currentCount * dailyGrowth;
      }
      let count = Math.round(acc[i.number].currentCount);
      if (count >= i.saturation) {
        acc[i.number].isSaturated = true;
      }
      i.curves.forEach((c) => {
        count = count * c.curve[day % c.period];
      });
      count =
        count +
        count * Math[i.size > 0 ? "max" : "min"](i.variability * gMult, 0);
      if (day >= startDay) {
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
      }
    });
    if (day >= startDay) {
      profitLoss.push({ day, total: dayRevenue });
    }
  }
  return {
    name,
    data,
    profitLoss,
    profit,
    loss,
  };
};
const updateChart = (state: State): State => {
  const { model, days, offsetDay, hiddenInputs } = state.chartInputs;
  if (model) {
    state.showingCharts = [
      getChartData("high", model, 1, days, offsetDay, hiddenInputs),
      getChartData("mid", model, 0, days, offsetDay, hiddenInputs),
      getChartData("low", model, -1, days, offsetDay, hiddenInputs),
    ];
  }
  return state;
};
const cacheCharts = (state: State): State => {
  state.models.forEach((model) => {
    state.vizCache.set(model.number, getChartData("mid", model, 0));
  });
  return state;
};

window.addEventListener("load", async () => {
  const state: State = {
    loading: false,
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
    showCreateModel: false,
    showingCharts: [],
    vizCache: new Map(),
  };

  const upd8 = initUI(state, async (event) => {
    const api = getAPI(state.googleToken, state.sheetId);
    const setLoading = (loading: boolean) => {
      state.loading = loading;
      upd8(state);
    };
    await matchEnum(event, async (ev, value) => {
      switch (ev) {
        case "SignedIn": {
          setLoading(true);
          state.googleToken = value.token;
          await getAPI(state.googleToken, state.sheetId)?.reloadRemoteData();
          await addRemoteState(state);
          cacheCharts(state);
          updateChart(state);
          state.loading = false;
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
          }
          break;
        }
        case "ShowCreateModel": {
          state.showCreateModel = true;
          break;
        }
        case "CancelCreateModel": {
          state.showCreateModel = false;
          break;
        }
        case "CreateModel": {
          state.showCreateModel = false;
          setLoading(true);
          await api?.createModel(value.name);
          await api?.reloadRemoteData();
          addRemoteState(state);
          state.loading = false;
          break;
        }
        case "UpdateModel": {
          setLoading(true);
          const inputs = invariant(
            models.get(value.number),
            `Invalid model ${value.number}`
          ).inputs;
          await api?.updateModel(value, inputs);
          await api?.reloadRemoteData();
          addRemoteState(state);
          state.loading = false;
          if (state.chartInputs.model) {
            state.chartInputs.model = state.models.find(
              (m) => (m.number = state.chartInputs.model!.number)
            );
          }
          break;
        }
        case "ResetModelChanges": {
          const savedModel = models.get(state.chartInputs.model!.number)!;
          state.chartInputs.model!.name = savedModel.name;
          state.chartInputs.days = savedModel.defaultDays;
          state.chartInputs.offsetDay = savedModel.defaultOffset;
          break;
        }
        case "DeleteModel": {
          setLoading(true);
          await api?.deleteModel(value.number);
          await api?.reloadRemoteData();
          addRemoteState(state);
          state.loading = false;
          break;
        }
        case "ShowModel": {
          const model = state.models.find((m) => m.number === value!.number);
          if (model) {
            state.chartInputs.model = model;
            state.chartInputs.days = model.defaultDays;
            state.chartInputs.offsetDay = model.defaultOffset;
            updateChart(state);
            state.showingScreen = "Model";
          }
          break;
        }
        case "ShowInput": {
          state.showingInput = inputs.get(value.number);
          break;
        }
        case "CancelInputEdit": {
          state.showingInput = undefined;
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
          setInputData(
            value.number === -1 ? state.showingInput! : value.number,
            value.field,
            value.value
          );
          addRemoteState(state);
          updateChart(state);
          break;
        }
        case "SaveInput": {
          const input = state.showingInput;
          const modelNumber = state.createInputModel;
          state.createInputModel = undefined;
          state.showingInput = undefined;
          if (!input) {
            return;
          }
          setLoading(true);
          if (input.number === -1) {
            const inputNumber = await api?.createInput(input);
            if (modelNumber && inputNumber) {
              await api?.addInput(modelNumber, inputNumber);
            }
          } else {
            api?.updateInput(input);
          }
          await api?.reloadRemoteData();
          addRemoteState(state);
          updateChart(state);
          state.loading = false;
          break;
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
        case "AddInput": {
          state.quickSearch = undefined;
          state.quickSearchNumber = undefined;
          setLoading(true);
          await api?.addInput(value.modelNumber, value.inputNumber);
          await api?.reloadRemoteData();
          addRemoteState(state);
          updateChart(state);
          state.loading = false;
          break;
        }
        case "RemoveInput": {
          setLoading(true);
          await api?.removeInput(value.modelNumber, value.inputNumber);
          await api?.reloadRemoteData();
          addRemoteState(state);
          updateChart(state);
          state.loading = false;
          break;
        }
        case "CreateInput": {
          state.showingInput = {
            name: value.name,
            curves: [],
            number: -1,
            frequency: 1,
            size: 1,
            growthPercent: 0,
            growthFreq: 0,
            notes: "",
            seed: 1,
            saturation: 1,
            variability: 1,
          };
          state.createInputModel = value.number;
          state.quickSearch = undefined;
          state.quickSearchNumber = undefined;
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
          break;
        }
        default:
          assertUnreachable(ev);
          return;
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
