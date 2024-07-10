import { State } from "../types";
import { View } from "./View";

let googleAuthCreds: { credential?: string; select_by?: string } = {};
let authCallback = () => {};
// @ts-expect-error global API
window.googleAuthComplete = (creds: typeof googleAuthCreds) => {
  googleAuthCreds = creds;
  authCallback();
};

export class SignInView extends View {
  static get id() {
    return "signin";
  }

  get id() {
    return SignInView.id;
  }

  mount() {
    return [];
  }

  maybeSignIn() {
    if (googleAuthCreds.credential) {
      this.dispatchEvent({
        SignedIn: {
          credential: googleAuthCreds.credential,
          select_by: googleAuthCreds.select_by,
        },
      });
    }
  }

  becameVisible() {
    this.maybeSignIn();
    authCallback = this.maybeSignIn.bind(this);
  }

  showing(state: State): boolean {
    return state.googleToken === null;
  }

  updated() {}
}
