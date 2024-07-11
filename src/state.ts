export type Curve = {
  guid: string;
  name: string;
  curve: number[];
  notes: string;
  period: number;
};

export type Input<C = Curve> = {
  guid: string;
  name: string;
  avgFreq: number;
  avgSize: number;
  curve: C;
  growthPercent: number;
  growthFreq: number;
  notes: string;
  seed: number;
  saturation: number;
  variability: number;
};

export type Model<I = Input> = {
  guid: string;
  name: string;
  inputs: I[];
};

export type State = {
  googleToken: google.accounts.oauth2.TokenResponse | null;
  sheetId: string;
  models: Model[];
  inputs: Input[];
  chartInputs: {
    days: number;
    offsetDay: number;
    model?: Model;
  };
  showingInput?: Input;
  quickSearch?: "Input";
  quickSearchGuid?: string;
  showingScreen: "Models" | "Inputs" | "Model" | "Input";
  chart: {
    data: {
      day: number;
      input: string;
      count: number;
      revenue: number;
    }[];
    profit: number;
    loss: number;
    profitLoss: { day: number; total: number }[];
  };
};
