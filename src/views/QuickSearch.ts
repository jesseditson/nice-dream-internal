import { State } from "../state";
import { invariant } from "../utils";
import { View } from "./View";

export class QuickSearch extends View {
  static get id() {
    return "quick-search";
  }

  get id() {
    return QuickSearch.id;
  }

  get input() {
    return this.el("typeahead") as HTMLInputElement;
  }
  get allResults() {
    switch (this.state.quickSearch) {
      case "Input":
        return this.state.inputs.slice(0, 8);
    }
    return [];
  }

  private get showingResults() {
    if (!this.input.value) {
      return this.allResults;
    }
    return this.allResults.filter((i) => {
      i.name.includes(this.input.value);
    });
  }

  mount() {
    const root = invariant(this.rootElement, "quicksearch root");
    return [
      this.eventListener(root, "click", (e) => {
        if ((e.target as HTMLElement)?.id === this.id) {
          this.dispatchEvent("CancelSearch");
        }
      }),
      this.eventListener("typeahead", "keydown", (e) => {
        if (e.key === "Escape") {
          this.dispatchEvent("CancelSearch");
        }
      }),
      this.eventListener("typeahead", "input", () => {
        if (this.input.value) {
          this.setContent(
            "create-result",
            `Create new ${this.state.quickSearch} named ${this.input.value}`
          );
        }
        this.el("create-result").classList.toggle("hidden", !this.input.value);
      }),
      this.eventListener(
        root,
        "click",
        (_, e) => {
          const eventName = `Choose${this.state.quickSearch}` as "ChooseInput";
          this.dispatchEvent({ [eventName]: { guid: e.dataset.guid! } });
        },
        ".result"
      ),
      this.eventListener("create-result", "click", () => {
        const eventName = `Create${this.state.quickSearch}` as "CreateInput";
        this.dispatchEvent({
          [eventName]: {
            name: this.input.value!,
            guid: this.state.quickSearchGuid!,
          },
        });
      }),
    ];
  }

  showing(state: State): boolean {
    return !!state.quickSearch;
  }

  updated() {
    this.setContent("title", `Find a ${this.state.quickSearch}`);
    this.setContent(
      "results",
      this.showingResults.map((r) => {
        const rEl = this.template("result");
        this.setContent(rEl, r.name, ".name");
        this.setData(rEl, {});
        return rEl;
      })
    );
  }
}
