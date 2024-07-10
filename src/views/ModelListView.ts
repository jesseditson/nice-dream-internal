import { State } from "../types";
import { View } from "./View";

export class ModelListView extends View {
  static get id() {
    return "model-list";
  }

  get id() {
    return ModelListView.id;
  }

  mount() {
    return [
      this.eventListener(
        this.rootElement!,
        "click",
        (_, el) => {
          this.dispatchEvent({ ShowModel: { guid: el.dataset.guid! } });
        },
        ".button"
      ),
    ];
  }

  showing(state: State): boolean {
    return !!state.googleToken && state.showingScreen === "Models";
  }

  updated() {
    const modelList = this.template("list");
    this.setContent(modelList, "Models", ".title");
    this.setContent(
      modelList,
      this.state.models.map((m) => {
        const mEl = this.template("list-item");
        this.setContent(mEl, m.name, ".name");
        this.setAttrs(mEl, { title: m.name }, ".button");
        this.setData(mEl, { guid: m.guid }, ".button");
        return mEl;
      }),
      ".list"
    );
    this.setContent("list", modelList);
  }
}
