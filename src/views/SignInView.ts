import { jwtDecode } from "jwt-decode";
import { State } from "../state";
import { View } from "./View";
import { googleAPI } from "../google";

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

  private initialized = false;

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

  async maybeSignIn() {
    const stored = localStorage.getItem("googleAuthCreds");
    const storedToken = localStorage.getItem("googleToken");
    if (storedToken) {
      // TODO: validate token
      const token = JSON.parse(storedToken);
      try {
        const r = await googleAPI(
          token,
          "https://www.googleapis.com/oauth2/v3/tokeninfo"
        )("GET", `?access_token=${token.access_token}`);
        console.log(r);
        this.dispatchEvent({
          SignedIn: { token },
        });
        return;
      } catch (e) {
        console.log("Token no longer valid");
      }
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
    if (!this.initialized) {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      document.body.appendChild(script);
      const int = setInterval(() => {
        if (globalThis.google) {
          clearInterval(int);
          authCallback = this.maybeSignIn.bind(this);
          this.maybeSignIn();
        }
      }, 25);
    }
  }

  showing(state: State): boolean {
    return state.googleToken === null;
  }

  updated() {
    this.el("authorize-sheets").classList.toggle("hidden", !this.tokenClient);
    this.el("google-auth").classList.toggle("hidden", !!this.tokenClient);
  }
}
