import { Input } from "./state";

export type NDEvent =
  | { SignedIn: { token: google.accounts.oauth2.TokenResponse } }
  | "GoBack"
  | "NewModel"
  | "NewInput"
  | {
      CreateModel: { name: string };
    }
  | {
      CreateInput: { name: string; guid: string };
    }
  | {
      ShowModel: { guid: string };
    }
  | {
      ShowInput: { guid: string };
    }
  | {
      ChooseInput: { guid: string };
    }
  | "CancelSearch"
  | {
      AddInput: { inputGuid: string; modelGuid: string };
    }
  | {
      RemoveInput: { inputGuid: string; modelGuid: string };
    }
  | {
      EditInput: Partial<Omit<Input, "curve"> & { curveGuid: string }>;
    }
  | {
      EditModel: Partial<{ guid: string; name: string }>;
    }
  | {
      UpdateChart: { days: number; offset: number };
    };
