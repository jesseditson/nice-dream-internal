import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { invariant } from "./utils";
import { Channel, Curve, Input, Model, State } from "./types";

export const app = firebase.initializeApp({
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

export let models: Map<
  string,
  Model<firebase.firestore.DocumentReference>
> = new Map();
export let inputs: Map<
  string,
  Input<firebase.firestore.DocumentReference>
> = new Map();
export let channels: Map<
  string,
  Channel<firebase.firestore.DocumentReference>
> = new Map();
export let curves: Map<string, Curve> = new Map();

export const derefInput = (id: string): State["inputs"][0] => {
  const i = invariant(inputs.get(id), `Missing input ref: ${id}`);
  return {
    ...i,
    curve: invariant(
      curves.get(i.curve.id),
      `Missing curve ref: ${i.curve.id}`
    ),
  };
};

export const derefChannel = (id: string): State["channels"][0] => {
  const c = invariant(channels.get(id), `Missing channel ref: ${id}`);
  return {
    ...c,
    inputs: c.inputs.map((i) => derefInput(i.id)),
  };
};

export const reloadRemoteData = async (db: firebase.firestore.Firestore) => {
  [models, inputs, channels, curves] = await Promise.all([
    getMap<Model<firebase.firestore.DocumentReference>>(db, "models"),
    getMap<Input<firebase.firestore.DocumentReference>>(db, "inputs"),
    getMap<Channel<firebase.firestore.DocumentReference>>(db, "channels"),
    getMap<Curve>(db, "curves"),
  ]);
};

export const addRemoteState = async (state: State): Promise<State> => {
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
