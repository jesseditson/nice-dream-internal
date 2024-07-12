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
  defaultDays: number;
  defaultOffset: number;
  inputs: I[];
};

export type ChartData = {
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
};

export type State = {
  loading: boolean;
  googleToken: google.accounts.oauth2.TokenResponse | null;
  sheetId: string;
  models: Model[];
  inputs: Input[];
  chartInputs: {
    days: number;
    offsetDay: number;
    showingStacks: "high" | "mid" | "low";
    hiddenInputs: Set<number>;
    model?: Model;
  };
  openInputs: Set<number>;
  showingInput?: Input<number>;
  createInputModel?: number;
  quickSearch?: "Input";
  quickSearchNumber?: number;
  showingScreen: "Models" | "Inputs" | "Model";
  showingCharts: ChartData[];
  vizCache: Map<number, ChartData>;
};
