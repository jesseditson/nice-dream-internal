import { View } from "./View";

export class Nav extends View {
  static get id() {
    return "nav";
  }

  get id() {
    return Nav.id;
  }

  mount() {
    return [
      this.eventListener("back", "click", () => {
        this.dispatchEvent("GoBack");
      }),
    ];
  }

  updated() {
    this.el("back").classList.toggle(
      "hidden",
      this.state.showingScreen === "Models"
    );
  }
}
