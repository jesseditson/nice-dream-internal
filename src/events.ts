import { Input } from "./types";

export type NDEvent =
  | { SignedIn: { token: google.accounts.oauth2.TokenResponse } }
  | "GoBack"
  | "NewModel"
  | "NewChannel"
  | "NewInput"
  | {
      CreateModel: { name: string };
    }
  | {
      CreateChannel: { name: string; guid: string };
    }
  | {
      CreateInput: { name: string; guid: string };
    }
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
      ChooseChannel: { guid: string };
    }
  | {
      ChooseInput: { guid: string };
    }
  | "CancelSearch"
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
    }
  | {
      UpdateChart: { days: number; offset: number };
    };
