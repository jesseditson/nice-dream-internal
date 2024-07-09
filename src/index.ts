import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import * as firebaseui from "firebaseui";
import feather from "feather-icons";
import { cre8 } from "upd8";
import { NDEvent } from "./events";
import { Channel, Curve, Input, Model, State } from "./types";
import { ModelView } from "./views/ModelView";

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

const invariant = <T>(i: T | undefined | null, m: string): T => {
  if (!i) {
    throw new Error(m);
  }
  return i;
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
    chartInputs: { days: 365, offsetDay: 0 },
    chart: { inputs: [], channels: [], profitLoss: [] },
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
    const channels: State["chart"]["channels"] = [];
    const inputs: State["chart"]["inputs"] = [];
    const profitLoss: State["chart"]["profitLoss"] = [];
    let acc: Record<string, Accumulator> = {};
    for (let day = offsetDay; day < days; day++) {
      let dayRevenue = 0;
      model.channels.forEach((c, channelIndex) => {
        if (!channels[channelIndex]) {
          channels[channelIndex] = {
            name: c.name,
            values: [],
          };
        }
        let channelCount = 0;
        let channelRevenue = 0;
        c.inputs.forEach((i, inputIndex) => {
          if (!inputs[inputIndex]) {
            inputs[inputIndex] = {
              name: c.name,
              values: [],
            };
          }
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
          inputs[inputIndex].values.push({
            group: i.name,
            day,
            count,
            revenue,
          });
        });
        dayRevenue += channelRevenue;
        channels[channelIndex].values.push({
          group: c.name,
          count: channelCount,
          day,
          revenue: channelRevenue,
        });
      });
      profitLoss.push({ total: dayRevenue });
    }
    state.chart = {
      channels,
      inputs,
      profitLoss,
    };
  }
  return state;
};

const initUI = cre8<State, NDEvent>([ModelView]);

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
  state.chartInputs.model = state.models.at(0);
  console.log(state);
  updateChart(state);
  console.log(state);

  const upd8 = initUI(state, (event) => {
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
