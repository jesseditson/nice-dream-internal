import { jwtDecode } from "jwt-decode";
import { State } from "../state";
import { View } from "./View";

// https://developers.google.com/identity/gsi/web/reference/js-reference#CredentialResponse
type GoogleJWT = {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  nbf: number;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  iat: number;
  exp: number;
  jti: string;
};

let googleAuthCreds: { credential?: string; select_by?: string } = {};
let authCallback = () => {};

declare global {
  interface Window {
    googleAuthComplete: (creds: typeof googleAuthCreds) => void;
  }
}

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
    return [
      this.eventListener("authorize-sheets", "click", () => {
        this.tokenClient?.requestAccessToken();
      }),
    ];
  }

  private tokenClient?: ReturnType<
    typeof google.accounts.oauth2.initTokenClient
  >;

  maybeSignIn() {
    const stored = localStorage.getItem("googleAuthCreds");
    const storedToken = localStorage.getItem("googleToken");
    if (storedToken) {
      // TODO: validate token
      console.log(storedToken);
      this.dispatchEvent({
        SignedIn: { token: JSON.parse(storedToken) },
      });
      return;
    }
    if (stored && !googleAuthCreds.credential) {
      googleAuthCreds = JSON.parse(stored);
    }
    if (googleAuthCreds.credential) {
      localStorage.setItem("googleAuthCreds", JSON.stringify(googleAuthCreds));
      const credentials = jwtDecode(googleAuthCreds.credential) as GoogleJWT;
      console.log(credentials);
      this.tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: credentials.aud,
        // TODO: move to "https://www.googleapis.com/auth/drive.file" and implement filepicker
        scope: "https://www.googleapis.com/auth/spreadsheets",
        callback: (response) => {
          localStorage.setItem("googleToken", JSON.stringify(response));
          console.log(response);
          this.dispatchEvent({
            SignedIn: { token: response },
          });
        },
      });
      this.internalUpdate();
    }
  }

  becameVisible() {
    this.maybeSignIn();
    authCallback = this.maybeSignIn.bind(this);
  }

  showing(state: State): boolean {
    return state.googleToken === null;
  }

  updated() {
    this.el("authorize-sheets").classList.toggle("hidden", !this.tokenClient);
    this.el("google-auth").classList.toggle("hidden", !!this.tokenClient);
  }
}
