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

export type State = {
  models: Model[];
  channels: Channel[];
  inputs: Input[];
  chartInputs: {
    days: number;
    offsetDay: number;
    model?: Model;
  };
  showingChannel?: Channel;
  showingInput?: Input;
  quickSearch?: "Channel" | "Input";
  quickSearchGuid?: string;
  showingScreen:
    | "Models"
    | "Inputs"
    | "Channels"
    | "Model"
    | "Input"
    | "Channel";
  expandedChannels: Set<string>;
  chart: {
    data: {
      day: number;
      channel: string;
      input: string;
      count: number;
      revenue: number;
    }[];
    profitLoss: { total: number }[];
  };
};
