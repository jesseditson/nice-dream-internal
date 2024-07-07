import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCjURzjH7ZuL7H5qmnqXVypuw9PxN-0CnU",
  authDomain: "nice-dream-internal.firebaseapp.com",
  projectId: "nice-dream-internal",
  storageBucket: "nice-dream-internal.appspot.com",
  messagingSenderId: "29371168583",
  appId: "1:29371168583:web:41f389e735e5efe53b3e62",
});

window.addEventListener("load", async () => {
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  const auth = firebase.auth();

  if (!auth) {
    ui.start("#firebaseui-auth-container", {
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
      signInSuccessUrl: window.location.href,
    });
    return;
  }
  // Authorized
});

if (DEV) {
  console.log("Dev Mode enabled");
  // ESBuild watch
  new EventSource("/esbuild").addEventListener("change", () =>
    location.reload()
  );
}
