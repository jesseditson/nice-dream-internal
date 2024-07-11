import { invariant } from "./utils";
import { Curve, Input, Model, State } from "./state";
import { googleAPI } from "./google";

type SheetName = "Inputs" | "Models" | "Curves";

type ValuesResponse = {
  majorDimensions: "ROWS" | "COLS";
  range: string;
  values: (string | number)[][];
};

const unpackValues = (
  prefix: string,
  r: ValuesResponse,
  cb: (
    value: Record<string, string | number | (string | number)[]>,
    index: number
  ) => void
) => {
  // first row is a header
  const fieldNames = r.values[0];
  // loop over rows
  for (let i = 0; i < r.values.length - 1; i++) {
    // rows are 1-indexed since that's how they appear in the sheet
    let rowIdx = i + 1;
    // For each row, return an object mapping headers to values.
    const row = r.values[rowIdx];
    let restValues: (string | number)[] | undefined;
    if (row.length > fieldNames.length) {
      restValues = row.slice(fieldNames.length - 1);
    }
    const obj = fieldNames.reduce((o, fn, idx) => {
      const isLast = idx === fieldNames.length - 1;
      o[fn] = isLast && restValues ? restValues : row[idx];
      return o;
    }, {} as Record<string, string | number | (string | number)[]>);
    cb({ ...obj, number: rowIdx }, rowIdx);
  }
};

const getMap = async <T>(
  google: ReturnType<typeof googleAPI>,
  name: SheetName
): Promise<Map<number, T>> => {
  const oMap: Map<number, T> = new Map();
  switch (name) {
    case "Inputs": {
      const inputs = await google<ValuesResponse>(
        "GET",
        "values/Inputs?majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE"
      );
      unpackValues("inputs", inputs, (val, i) => {
        oMap.set(i, val as T);
      });
      break;
    }
    case "Curves": {
      const curves = await google<ValuesResponse>(
        "GET",
        "values/Curves?majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE"
      );
      unpackValues("curves", curves, (val, i) => {
        oMap.set(i, val as T);
      });
      break;
    }
    case "Models": {
      const models = await google<ValuesResponse>(
        "GET",
        "values/Models?majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE"
      );
      unpackValues("models", models, (val, i) => {
        oMap.set(i, val as T);
      });
      break;
    }
  }
  return oMap;
};

export let models: Map<number, Model<number>> = new Map();
export let inputs: Map<number, Input<number>> = new Map();
export let curves: Map<number, Curve> = new Map();

export const setInputData = (
  num: number,
  field: keyof Input,
  value: number
) => {
  const i = invariant(inputs.get(num), `input ${num} not found`);
  inputs.set(num, {
    ...i,
    [field]: value,
  });
};

export const derefInput = (id: number): State["inputs"][0] => {
  const i = invariant(inputs.get(id), `Missing input ref: ${id}`);
  return {
    ...i,
    curves: i.curves.map((c) =>
      invariant(curves.get(c), `Missing curve ref: ${c}`)
    ),
  };
};

export const reloadRemoteData = async (
  token: google.accounts.oauth2.TokenResponse,
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
  // Process curves
  curves.forEach((c) => {
    // Extrapolate the curve over the given period
    const extrapolatedCurve = [];
    if (typeof c.curve === "number") {
      c.curve = [c.curve];
    }
    const increment = c.curve.length / c.period;
    let ci = 0;
    for (let i = 0; i < c.period; i++) {
      const curveIndex = Math.floor(ci);
      extrapolatedCurve.push(c.curve[curveIndex]);
      ci += increment;
    }
    c.curve = extrapolatedCurve;
  });
};

export const addRemoteState = async (state: State): Promise<State> => {
  state.models = [];
  models.forEach((m) => {
    const model = {
      ...m,
      inputs: m.inputs.map((num) => derefInput(num)),
    };
    if (state.chartInputs.model?.number === model.number) {
      state.chartInputs.model = model;
    }
    state.models.push(model);
  });
  state.inputs = [];
  inputs.forEach((i, num) => {
    const input = derefInput(num);
    if (state.showingInput?.number === i.number) {
      state.showingInput = input;
    }
    state.inputs.push(input);
  });
  return state;
};
