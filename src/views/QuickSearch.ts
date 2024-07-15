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
      case "Input": {
        const existing = new Set(
          this.state.chartInputs.model?.inputs.map((i) => i.number) || []
        );
        return this.state.inputs.filter((i) => {
          return !existing.has(i.number);
        });
      }
    }
    return [];
  }

  private get showingResults() {
    if (!this.input.value) {
      return this.allResults.slice(0, 8);
    }
    return this.allResults.filter((i) => {
      return i.name.toLowerCase().includes(this.input.value.toLowerCase());
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
        this.internalUpdate();
      }),
      this.eventListener(
        root,
        "click",
        (_, e) => {
          const eventName = `Add${this.state.quickSearch}` as "AddInput";
          this.dispatchEvent({
            [eventName]: {
              inputNumber: parseInt(e.dataset.number!),
              modelNumber: this.state.quickSearchNumber!,
            },
          });
        },
        ".result"
      ),
      this.eventListener("create-result", "click", () => {
        const eventName = `Create${this.state.quickSearch}` as "CreateInput";
        this.dispatchEvent({
          [eventName]: {
            name: this.input.value!,
            number: this.state.quickSearchNumber!,
          },
        });
      }),
    ];
  }

  showing(state: State): boolean {
    return !!state.quickSearch;
  }

  updated() {
    this.setContent("title", `Find an ${this.state.quickSearch}`);
    this.setContent(
      "results",
      this.showingResults.map((r) => {
        const rEl = this.template("result");
        this.setContent(rEl, r.name, ".name");
        this.setData(rEl, { number: r.number.toString() });
        return rEl;
      })
    );
    if (this.input.value) {
      this.setContent(
        "create-result",
        `Create new ${this.state.quickSearch} named ${this.input.value}`
      );
    }
    this.el("create-result").classList.toggle("hidden", !this.input.value);
  }
}
