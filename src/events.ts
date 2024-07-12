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
  | "SaveInput"
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
  | "CancelInputEdit"
  | {
      AddInput: { inputNumber: number; modelNumber: number };
    }
  | {
      RemoveInput: { inputNumber: number; modelNumber: number };
    }
  | {
      SaveInput: { number: number };
    }
  | {
      SaveModel: { number: number };
    }
  | {
      ToggleInputShowing: { number: number };
    }
  | {
      SetInputValue: {
        number: number;
        field: keyof Input;
        value: number | number[];
      };
    }
  | {
      UpdateChart: Partial<Omit<State["chartInputs"], "model">>;
    };
