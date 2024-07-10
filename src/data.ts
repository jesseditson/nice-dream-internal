import { invariant } from "./utils";
import { Channel, Curve, Input, Model, State } from "./types";
import { googleAPI } from "./google";

type SheetName = "Inputs" | "Models" | "Curves";

const getMap = async <T>(
  google: ReturnType<typeof googleAPI>,
  name: SheetName
): Promise<Map<string, T>> => {
  const oMap = new Map();
  switch (name) {
    case "Inputs":
      const inputs = await google(
        "GET",
        "values/Inputs!A:G?majorDimension=ROWS"
      );
      console.log(inputs);
  }
  // objects.forEach((obj) => {
  //   oMap.set(obj.id, { ...obj.data(), guid: obj.id });
  // });
  return oMap;
};

export let models: Map<string, Model<number>> = new Map();
export let inputs: Map<string, Input<number>> = new Map();
export let channels: Map<string, Channel<number>> = new Map();
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

export const reloadRemoteData = async (
  token: typeof google.accounts.oauth2.TokenResponse,
  sheetId: string
) => {
  const google = googleAPI(
    token.access_token,
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}`
  );
  [models, inputs, curves] = await Promise.all([
    getMap<Model<number>>(google, "Models"),
    getMap<Input<number>>(google, "Inputs"),
    getMap<Curve>(google, "Curves"),
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
