export type Curve = {
  number: number;
  name: string;
  curve: number[];
  notes: string;
  period: number;
};

export type Input<C = Curve> = {
  number: number;
  name: string;
  frequency: number;
  size: number;
  curves: C[];
  growthPercent: number;
  growthFreq: number;
  notes: string;
  seed: number;
  saturation: number;
  variability: number;
};

export type Model<I = Input> = {
  number: number;
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
    showingCharts: Set<"high" | "mid" | "low">;
    hiddenInputs: Set<number>;
    model?: Model;
  };
  openInputs: Set<number>;
  showingInput?: Input;
  quickSearch?: "Input";
  quickSearchNumber?: number;
  showingScreen: "Models" | "Inputs" | "Model" | "Input";
  charts: {
    name: string;
    data: {
      day: number;
      input: string;
      count: number;
      revenue: number;
    }[];
    profit: number;
    loss: number;
    profitLoss: { day: number; total: number }[];
  }[];
};
