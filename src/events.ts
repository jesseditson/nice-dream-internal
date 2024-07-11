import { Input, State } from "./state";

export type NDEvent =
  | { SignedIn: { token: google.accounts.oauth2.TokenResponse } }
  | "GoBack"
  | "NewModel"
  | "NewInput"
  | {
      CreateModel: { name: string };
    }
  | {
      CreateInput: { name: string; number: number };
    }
  | {
      ShowModel: { number: number };
    }
  | {
      ShowInput: { number: number };
    }
  | {
      ChooseInput: { number: number };
    }
  | "CancelSearch"
  | {
      AddInput: { inputNumber: number; modelNumber: number };
    }
  | {
      RemoveInput: { inputNumber: number; modelNumber: number };
    }
  | {
      EditInput: Partial<Omit<Input, "curve"> & { curveNumber: number }>;
    }
  | {
      EditModel: Partial<{ number: number; name: string }>;
    }
  | {
      ToggleInputShowing: { number: number };
    }
  | {
      SetInputValue: { number: number; field: keyof Input; value: number };
    }
  | {
      UpdateChart: Partial<Omit<State["chartInputs"], "model">>;
    };
