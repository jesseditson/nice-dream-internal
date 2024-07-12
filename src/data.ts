import { invariant } from "./utils";
import { Curve, Input, Model, State } from "./state";
import { googleAPI } from "./google";

type SheetName = "Inputs" | "Models" | "Curves";

type ValuesResponse = {
  majorDimensions: "ROWS" | "COLS";
  range: string;
  values: (string | number)[][];
};
type Google = ReturnType<typeof googleAPI>;

const unpackValues = (
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
  google: Google,
  name: SheetName
): Promise<Map<number, T>> => {
  const oMap: Map<number, T> = new Map();
  switch (name) {
    case "Inputs": {
      const inputs = await google<ValuesResponse>(
        "GET",
        "values/Inputs?majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE"
      );
      unpackValues(inputs, (val, i) => {
        oMap.set(i, val as T);
      });
      break;
    }
    case "Curves": {
      const curves = await google<ValuesResponse>(
        "GET",
        "values/Curves?majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE"
      );
      unpackValues(curves, (val, i) => {
        oMap.set(i, val as T);
      });
      break;
    }
    case "Models": {
      const models = await google<ValuesResponse>(
        "GET",
        "values/Models?majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE"
      );
      unpackValues(models, (val, i) => {
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
  input: number | Input<number>,
  field: keyof Input,
  value: number | number[]
) => {
  const i =
    typeof input === "number"
      ? invariant(inputs.get(input), `input ${input} not found`)
      : input;
  if (typeof input !== "number") {
    // @ts-expect-error allowed because typing wouldn't make this clearer
    input[field] = value;
  }
  inputs.set(i.number, {
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

export const getAPI = (
  token: google.accounts.oauth2.TokenResponse | null,
  sheetId: string
) => {
  if (!token) {
    return;
  }
  const google = googleAPI(
    token.access_token,
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}`
  );
  return {
    reloadRemoteData: reloadRemoteData.bind(null, google),
    removeInput: removeInput.bind(null, google),
    addInput: addInput.bind(null, google),
    createInput: (_input: Input<number>): Promise<number> => {
      const curves = _input.curves;
      const input: Omit<Input, "curves"> = _input;
      // @ts-expect-error
      delete input.curves;
      return addRow(google, "Inputs", input, curves);
    },
    updateInput: (_input: Input<number>) => {
      const curves = _input.curves;
      const input: Omit<Input, "curves"> = _input;
      // @ts-expect-error
      delete input.curves;
      updateRow(google, "Inputs", input.number, input, curves);
    },
  };
};

const removeInput = (
  google: Google,
  modelNumber: number,
  inputNumber: number
) => {
  return deleteCell(google, "Models", modelNumber, inputNumber);
};
const addInput = (google: Google, modelNumber: number, inputNumber: number) => {
  return addCell(google, "Models", modelNumber, inputNumber);
};

const addRow = async (
  google: Google,
  sheet: string,
  values: Record<string, string | number>,
  rest: (string | number)[]
): Promise<number> => {
  // Fetch the first row to check how many values exist in this sheet
  const vr = await google<ValuesResponse>(
    "GET",
    `values/${sheet}?majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE`
  );
  const newRow = vr.values.length + 1;
  const cols = vr.values[0];
  const insertVals = cols
    .slice(0, -1)
    .map((c, idx) => {
      const value = values[c];
      if (idx < cols.length - 1 && (value === undefined || value === null)) {
        throw new Error(`${JSON.stringify(values)} is missing key '${c}'`);
      }
      return value;
    })
    .concat(rest);
  await google("PUT", `values/${sheet}!A${newRow}:A?valueInputOption=RAW`, {
    range: `$${sheet}!A${newRow}:A`,
    majorDimension: "ROWS",
    values: [insertVals],
  });
  return newRow;
};

const updateRow = async (
  google: Google,
  sheet: string,
  number: number,
  values: Record<string, string | number>,
  rest: (string | number)[]
) => {
  // Fetch the first row to check how many values exist in this sheet
  const vr = await google<ValuesResponse>(
    "GET",
    `values/${sheet}?majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE`
  );
  const cols = vr.values[0];
  const insertVals = cols
    .slice(0, -1)
    .map((c, idx) => {
      const value = values[c];
      if (idx < cols.length - 1 && (value === undefined || value === null)) {
        throw new Error(`${JSON.stringify(values)} is missing key '${c}'`);
      }
      return value;
    })
    .concat(rest);
  const rowNum = number + 1;
  const range = `${sheet}!A${rowNum}:${getCol(insertVals.length)}${rowNum}`;
  await google("PUT", `values/${range}?valueInputOption=RAW`, {
    range,
    majorDimension: "ROWS",
    values: [insertVals],
  });
};

const addCell = async (
  google: Google,
  sheet: string,
  row: number,
  value: string | number
) => {
  // NOTE: Can only delete values that are in rest params, other cells may be
  // modified via an update.
  const rowNum = row + 1;
  // Fetch our row so we can append to its values
  const vr = await google<ValuesResponse>(
    "GET",
    `values/${sheet}!${rowNum}:${rowNum}?majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE`
  );
  const newCol = getCol(vr.values[0].length);
  await google(
    "PUT",
    `values/${sheet}!${newCol}${rowNum}?valueInputOption=RAW`,
    {
      range: `${sheet}!${newCol}${rowNum}`,
      majorDimension: "ROWS",
      values: [[value]],
    }
  );
};

const deleteCell = async (
  google: Google,
  sheet: string,
  row: number,
  cellMatch: string | number
) => {
  // NOTE: Can only delete values that are in rest params, other cells may be
  // modified via an update.
  const rowNum = row + 1;
  // First fetch a header row so we can find out how many rows offset we begin
  // our rest data
  const hr = await google<ValuesResponse>(
    "GET",
    `values/${sheet}!1:1?majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE`
  );
  const startCol = getCol(hr.values.length);
  const vr = await google<ValuesResponse>(
    "GET",
    `values/${sheet}!${startCol}${rowNum}:${rowNum}?majorDimension=ROWS&valueRenderOption=UNFORMATTED_VALUE`
  );
  const newValues = vr.values[0].filter((v) => v !== cellMatch);
  if (newValues.length === vr.values[0].length) {
    throw new Error(`${cellMatch} not found in ${vr.values[0]}`);
  }
  // When deleting an item and shifting left, also push an empty value so we
  // don't duplicate the rightmost item.
  newValues.push("");
  await google(
    "PUT",
    `values/${sheet}!${startCol}${rowNum}:${rowNum}?valueInputOption=RAW`,
    {
      range: `${sheet}!${startCol}${rowNum}:${rowNum}`,
      majorDimension: "ROWS",
      values: [newValues],
    }
  );
};

const reloadRemoteData = async (google: Google) => {
  [models, inputs, curves] = await Promise.all([
    getMap<Model<number>>(google, "Models"),
    getMap<Input<number>>(google, "Inputs"),
    getMap<Curve>(google, "Curves"),
  ]);
  // Process models
  models.forEach((m) => {
    if (typeof m.inputs === "number") {
      m.inputs = [m.inputs];
    }
  });
  // Process inputs
  inputs.forEach((i) => {
    if (typeof i.curves === "number") {
      i.curves = [i.curves];
    }
  });
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
    if (state.showingInput?.number === i.number) {
      state.showingInput = i;
    }
    state.inputs.push(derefInput(num));
  });
  return state;
};

const columns = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const getCol = (number: number): string => {
  return invariant(columns[number], `UNSUPPORTED INDEX ${number}`);
};
