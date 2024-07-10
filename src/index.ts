import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import * as firebaseui from "firebaseui";
import feather from "feather-icons";
import { cre8 } from "upd8";
import { NDEvent } from "./events";
import { Channel, Curve, Input, Model, State } from "./types";
import { ModelView } from "./views/ModelView";
import { ModelListView } from "./views/ModelListView";
import { invariant, matchEnum } from "./utils";
import { Nav } from "./views/Nav";
import { QuickSearch } from "./views/QuickSearch";

const initUI = cre8<State, NDEvent>([
  Nav,
  ModelView,
  ModelListView,
  QuickSearch,
]);

const app = firebase.initializeApp({
  apiKey: "AIzaSyCjURzjH7ZuL7H5qmnqXVypuw9PxN-0CnU",
  authDomain: "nice-dream-internal.firebaseapp.com",
  projectId: "nice-dream-internal",
  storageBucket: "nice-dream-internal.appspot.com",
  messagingSenderId: "29371168583",
  appId: "1:29371168583:web:41f389e735e5efe53b3e62",
});

const getMap = async <T>(
  db: firebase.firestore.Firestore,
  name: string
): Promise<Map<string, T>> => {
  const objects = await db.collection(name).get();
  const oMap = new Map();
  objects.forEach((obj) => {
    oMap.set(obj.id, { ...obj.data(), guid: obj.id });
  });
  return oMap;
};

const getRemoteState = async (
  db: firebase.firestore.Firestore
): Promise<State> => {
  const [models, inputs, channels, curves] = await Promise.all([
    getMap<Model<firebase.firestore.DocumentReference>>(db, "models"),
    getMap<Input<firebase.firestore.DocumentReference>>(db, "inputs"),
    getMap<Channel<firebase.firestore.DocumentReference>>(db, "channels"),
    getMap<Curve>(db, "curves"),
  ]);

  const derefInput = (id: string): State["inputs"][0] => {
    const i = invariant(inputs.get(id), `Missing input ref: ${id}`);
    return {
      ...i,
      curve: invariant(
        curves.get(i.curve.id),
        `Missing curve ref: ${i.curve.id}`
      ),
    };
  };

  const derefChannel = (id: string): State["channels"][0] => {
    const c = invariant(channels.get(id), `Missing channel ref: ${id}`);
    return {
      ...c,
      inputs: c.inputs.map((i) => derefInput(i.id)),
    };
  };

  const state: State = {
    models: [],
    channels: [],
    inputs: [],
    quickSearch: "Channel",
    showingScreen: "Models",
    expandedChannels: new Set(),
    chartInputs: { days: 365, offsetDay: 0 },
    chart: { data: [], profitLoss: [] },
  };

  models.forEach((model) => {
    state.models.push({
      ...model,
      channels: model.channels.map((channel) => derefChannel(channel.id)),
    });
  });
  channels.forEach((_, id) => {
    state.channels.push(derefChannel(id));
  });
  inputs.forEach((_, id) => {
    state.inputs.push(derefInput(id));
  });
  return state;
};

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
    for (let day = offsetDay; day < days; day++) {
      let dayRevenue = 0;
      model.channels.forEach((c) => {
        let channelCount = 0;
        let channelRevenue = 0;
        c.inputs.forEach((i) => {
          const dailyGrowth = i.growthPercent / i.growthFreq;
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
    };
  }
  return state;
};

window.addEventListener("load", async () => {
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  const auth = firebase.auth();

  if (!auth) {
    ui.start("#firebaseui-auth-container", {
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
      signInSuccessUrl: window.location.href,
    });
    return;
  }
  // Authorized
  const db = firebase.firestore(app);
  const state = await getRemoteState(db);
  updateChart(state);

  const upd8 = initUI(state, (event) => {
    matchEnum(event, (ev, value) => {
      switch (ev) {
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
          break;
        }
        case "ChooseInput": {
          state.quickSearch = "Input";
          break;
        }
        case "CancelSearch": {
          state.quickSearch = undefined;
          break;
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
