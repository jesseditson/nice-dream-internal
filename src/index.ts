import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import * as firebaseui from "firebaseui";
import feather from "feather-icons";
import { cre8 } from "upd8";
import { NDEvent } from "./events";
import { Channel, Curve, Input, Model, State } from "./types";

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
    oMap.set(obj.id, obj.data());
  });
  return oMap;
};

const invariant = <T>(i: T | undefined | null, m: string): T => {
  if (!i) {
    throw new Error(m);
  }
  return i;
};

const getState = async (db: firebase.firestore.Firestore): Promise<State> => {
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
  console.log(state);
  return state;
};

const initUI = cre8<State, NDEvent>([]);

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
  const state = await getState(db);

  const upd8 = initUI(state, (event) => {
    // upd8(state);
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
