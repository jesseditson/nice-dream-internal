export type Curve = {
  name: string;
  curve: number[];
  notes: string;
  period: number;
};

export type Input<Curve> = {
  name: string;
  avgFreq: number;
  avgLifetime: number;
  avgSize: number;
  curve: Curve;
  growth: number;
  notes: string;
  saturation: number;
};

export type Channel<Input> = {
  name: string;
  inputs: Input[];
};

export type Model<Channel> = {
  name: string;
  channels: Channel[];
  ownerId: string;
};

export type State = {
  models: Model<Channel<Input<Curve>>>[];
  channels: Channel<Input<Curve>>[];
  inputs: Input<Curve>[];
};
