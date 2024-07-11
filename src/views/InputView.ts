import { View } from "./View";
import { State } from "../state";
import { invariant } from "../utils";

export class InputView extends View {
  static get id() {
    return "input";
  }

  get id() {
    return InputView.id;
  }

  get input() {
    return invariant(this.state.showingInput, "input");
  }

  mount() {
    const el = invariant(this.rootElement, "input root");
    const guid = this.input.guid;
    return [];
  }

  showing(state: State): boolean {
    return state.showingScreen === "Input";
  }

  updated() {
    this.setAttrs("name", { value: this.input.name });
  }
}
