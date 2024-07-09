import { Input } from "./types";

export type NDEvent =
  | "GoBack"
  | "NewModel"
  | "NewChannel"
  | "NewInput"
  | {
      ShowModel: { guid: string };
    }
  | {
      ShowChannel: { guid: string };
    }
  | {
      ShowInput: { guid: string };
    }
  | {
      AddChannel: { modelGuid: string; channelGuid: string };
    }
  | {
      AddInput: { inputGuid: string; channelGuid: string };
    }
  | {
      RemoveChannel: { modelGuid: string; channelGuid: string };
    }
  | {
      RemoveInput: { inputGuid: string; channelGuid: string };
    }
  | {
      EditInput: Partial<Omit<Input, "curve"> & { curveGuid: string }>;
    }
  | {
      EditChannel: Partial<{ guid: string; name: string }>;
    }
  | {
      EditModel: Partial<{ guid: string; name: string }>;
    }
  | {
      ToggleChannelExpanded: { guid: string };
    };
