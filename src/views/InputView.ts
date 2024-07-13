import { View } from "./View";
import { Input, State } from "../state";
import { invariant } from "../utils";
import { curves } from "../data";

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
    return [
      this.eventListener(el, "click", (e) => {
        if ((e.target as HTMLElement)?.id === this.id) {
          this.dispatchEvent("CancelInputEdit");
        }
      }),
      this.eventListener(
        el,
        "change",
        (_, el) => {
          const field = invariant(el.dataset.field, "field") as keyof Input;
          let value: number | number[] = parseFloat(
            (el as HTMLInputElement).value
          );
          if (field === "curves") {
            const curves: number[] = [];
            el.querySelectorAll("option").forEach((opt) => {
              if (opt.selected) {
                curves.push(parseFloat(opt.value));
              }
            });
            value = curves;
          }
          this.dispatchEvent({
            SetInputValue: { number: this.input.number, value, field },
          });
        },
        ".input-field"
      ),
      this.eventListener("cancel", "click", () =>
        this.dispatchEvent("CancelInputEdit")
      ),
      this.eventListener("save", "click", () =>
        this.dispatchEvent("SaveInput")
      ),
    ];
  }

  showing(state: State): boolean {
    return !!state.showingInput;
  }

  updated() {
    const input = this.input;
    const el = invariant(this.rootElement, "input view");
    this.el<HTMLInputElement>("name").value = input.name;
    this.el<HTMLInputElement>("notes").value = input.notes;
    (
      [
        "size",
        "frequency",
        "growthPercent",
        "growthFreq",
        "saturation",
        "seed",
        "variability",
      ] as (keyof Input)[]
    ).forEach((field) => {
      const value = input[field] as string;
      this.setAttrs(el, { value }, `.${field}`);
    });
    const selectedCurves = new Set(input.curves);
    this.setContent(
      el,
      Array.from(curves.entries()).map(([num, curve]) => {
        const opt = document.createElement("option");
        opt.value = `${num}`;
        if (selectedCurves.has(num)) {
          opt.selected = true;
        }
        this.setContent(opt, curve.name);
        return opt;
      }),
      ".curves"
    );
  }
}
