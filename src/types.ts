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
};

export type Channel<I = Input> = {
  guid: string;
  name: string;
  inputs: I[];
};

export type Model<C = Channel> = {
  guid: string;
  name: string;
  channels: C[];
  ownerId: string;
};

export type ChartData = {
  name: string;
  values: {
    day: number;
    group: string;
    count: number;
    revenue: number;
  }[];
};

export type State = {
  models: Model[];
  channels: Channel[];
  inputs: Input[];
  chartInputs: {
    days: number;
    offsetDay: number;
    model?: Model;
  };
  chart: {
    inputs: ChartData[];
    channels: ChartData[];
    profitLoss: { total: number }[];
  };
};
