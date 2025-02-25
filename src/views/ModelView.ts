import * as Plot from "@observablehq/plot";
import { View } from "./View";
import { Input, State } from "../state";
import { invariant } from "../utils";
import { curves } from "../data";

const getDatasetNumber = (el: HTMLElement, name: string) => {
  const v = invariant(el.dataset[name], `number from data-${name}`);
  const n = parseInt(v);
  if (isNaN(n)) {
    throw new Error(`${v} is not a number`);
  }
  return n;
};

export class ModelView extends View {
  static get id() {
    return "model";
  }

  get id() {
    return ModelView.id;
  }

  get modelNumber() {
    return this.state.chartInputs.model!.number;
  }

  private _modelName: string | undefined;
  get modelName() {
    return this._modelName || this.state.chartInputs.model!.name;
  }

  mount() {
    const el = invariant(this.rootElement, "model root");
    return [
      this.eventListener(
        el,
        "click",
        () => {
          this.dispatchEvent({ ChooseInput: { number: this.modelNumber } });
        },
        ".add"
      ),
      this.eventListener(
        el,
        "click",
        (_, d) => {
          const inputNumber = getDatasetNumber(d, "number");
          this.dispatchEvent({
            RemoveInput: {
              inputNumber,
              modelNumber: this.modelNumber,
            },
          });
        },
        ".delete"
      ),
      this.eventListener(
        el,
        "click",
        (_, d) => {
          const number = getDatasetNumber(d, "number");
          this.dispatchEvent({ ShowInput: { number } });
        },
        ".edit"
      ),
      this.eventListener(
        el,
        "click",
        (_, d) => {
          const number = getDatasetNumber(d, "number");
          this.dispatchEvent({ ToggleInputShowing: { number } });
        },
        ".toggle, .collection .name"
      ),
      this.eventListener("offset", "change", () => {
        this.dispatchEvent({
          UpdateChart: {
            offsetDay: Number.parseInt(
              this.el<HTMLInputElement>("offset").value
            ),
          },
        });
      }),
      this.eventListener("days", "change", () => {
        this.dispatchEvent({
          UpdateChart: {
            days: Number.parseInt(this.el<HTMLInputElement>("days").value),
          },
        });
      }),
      this.eventListener("model-name", "change", () => {
        this._modelName = this.el<HTMLInputElement>("model-name").value;
        this.internalUpdate();
      }),
      this.eventListener("reset-changes", "click", () => {
        this.dispatchEvent("ResetModelChanges");
      }),
      this.eventListener("save-changes", "click", () => {
        const model = this.state.chartInputs.model!;
        model.name = this.modelName;
        model.defaultDays = Number.parseInt(
          this.el<HTMLInputElement>("days").value
        );
        model.defaultOffset = Number.parseInt(
          this.el<HTMLInputElement>("offset").value
        );
        this.dispatchEvent({ UpdateModel: model });
      }),
      this.eventListener(
        el,
        "change",
        (_, el) => {
          const number = getDatasetNumber(el, "number");
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
          this.dispatchEvent({ SetInputValue: { number, value, field } });
        },
        ".input-field"
      ),
      this.eventListener(
        el,
        "click",
        (e, el) => {
          const number = getDatasetNumber(el, "number");
          let hiddenInputs = this.state.chartInputs.hiddenInputs;
          if (e.altKey) {
            if (hiddenInputs.size > 1 && !hiddenInputs.has(number)) {
              hiddenInputs = new Set();
            } else {
              hiddenInputs = new Set(
                this.state.chartInputs
                  .model!.inputs.filter((i) => i.number !== number)
                  .map((i) => i.number)
              );
            }
          } else {
            if (hiddenInputs.has(number)) {
              hiddenInputs.delete(number);
            } else {
              hiddenInputs.add(number);
            }
          }
          this.dispatchEvent({
            UpdateChart: {
              hiddenInputs,
            },
          });
        },
        ".toggle-input"
      ),
      this.eventListener(
        "toggle-low",
        "click",
        this.showStack.bind(this, "low")
      ),
      this.eventListener(
        "toggle-mid",
        "click",
        this.showStack.bind(this, "mid")
      ),
      this.eventListener(
        "toggle-high",
        "click",
        this.showStack.bind(this, "high")
      ),
    ];
  }
  showStack(chart: "low" | "mid" | "high") {
    this.dispatchEvent({
      UpdateChart: {
        showingStacks: chart,
      },
    });
  }

  // https://leebyron.com/streamgraph/
  getChart(container: HTMLElement) {
    const profitLossSum: Record<string, number>[] = [];
    this.state.showingCharts.forEach(({ profitLoss, name }) => {
      profitLoss.forEach((d, index) => {
        profitLossSum[index] = profitLossSum[index] || d;
        profitLossSum[index][name] = d.total;
      });
    });
    const moneyFormat = (d: number) => this.mf.format(d);
    return Plot.plot({
      width: container.clientWidth,
      y: {
        grid: true,
        label: "Revenue",
        labelArrow: "up",
      },
      x: {
        label: "Day",
        labelArrow: "right",
      },
      color: {
        legend: true,
        scheme: "pastel2",
      },
      marks: [
        Plot.ruleY([0]),
        Plot.areaY(
          this.state.showingCharts.find(
            (c) => c.name === this.state.chartInputs.showingStacks
          )?.data,
          {
            x: "day",
            y: "revenue",
            z: "input",
            fill: "input",
            channels: { Count: "count" },
            tip: true,
          }
        ),
        Plot.lineY(profitLossSum, {
          x: "day",
          y: "mid",
          stroke: "black",
          fillOpacity: 0.8,
        }),
        Plot.linearRegressionY(profitLossSum, {
          x: "day",
          y: this.state.chartInputs.showingStacks,
          stroke: "blue",
          opacity: 0.3,
        }),
        Plot.areaY(profitLossSum, {
          x: "day",
          y1: "low",
          y2: "high",
          z: "input",
          fill: "black",
          fillOpacity: 0.2,
        }),
        Plot.tip(
          profitLossSum,
          Plot.pointer({
            x: "day",
            y: "mid",
            y1: "low",
            y2: "high",
            tip: {
              format: {
                y: moneyFormat,
              },
            },
          })
        ),
      ],
    });
  }

  showing(state: State): boolean {
    return state.showingScreen === "Model";
  }
  renderInputValues(element: HTMLElement, input: Input) {
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
      this.setAttrs(element, { value }, `.${field}`);
      this.setData(
        element,
        { number: input.number.toString(), field },
        `.${field}`
      );
    });
    const selectedCurves = new Set(input.curves.map((c) => c.number));
    this.setContent(
      element,
      Array.from(curves.entries()).map(([num, curve]) => {
        const opt = document.createElement("option");
        opt.value = `${num}`;
        if (selectedCurves.has(num)) {
          this.setAttrs(opt, { selected: "selected" });
        }
        this.setContent(opt, curve.name);
        return opt;
      }),
      ".curves"
    );
    this.setData(
      element,
      { number: input.number.toString(), field: "curves" },
      `.curves`
    );
  }

  updated() {
    // Possible optimization
    // https://observablehq.com/@fil/plot-animate-a-bar-chart/2
    this.setContent("chart", this.getChart(this.el("chart")));

    const model = invariant(this.state.chartInputs.model, "model");
    this.el<HTMLInputElement>("model-name").value = this.modelName;
    const channelCollection = this.template("collection");
    this.setContent(
      channelCollection,
      model.inputs.map((i) => {
        const cEl = this.template("collection-row");
        this.setContent(cEl, i.name, ".name");
        const number = i.number.toString();
        this.setData(cEl, { number }, ".name");
        this.setData(cEl, { number }, ".delete");
        this.setData(cEl, { number }, ".edit");
        this.setData(cEl, { number }, ".toggle");
        const showItems = this.state.openInputs.has(i.number);
        const openIcon = document.createElement("i");
        openIcon.dataset.feather = showItems ? "chevron-down" : "chevron-right";
        this.setContent(cEl, openIcon, ".toggle");
        this.findElement(cEl, ".items").classList.toggle("hidden", !showItems);
        if (showItems) {
          this.renderInputValues(cEl, i);
        }
        const toggleIcon = document.createElement("i");
        this.setData(toggleIcon, {
          feather: this.state.chartInputs.hiddenInputs.has(i.number)
            ? "eye-off"
            : "eye",
        });
        this.setData(cEl, { number: i.number.toString() }, ".toggle-input");
        this.setContent(cEl, toggleIcon, ".toggle-input");
        return cEl;
      }),
      ".collection"
    );
    this.setContent("inputs", channelCollection);
    this.el<HTMLInputElement>(
      "offset"
    ).value = `${this.state.chartInputs.offsetDay}`;
    this.el<HTMLInputElement>("days").value = `${this.state.chartInputs.days}`;
    ["low", "mid", "high"].forEach((_n) => {
      const n = _n as "high" | "low" | "mid";
      const chart = this.state.showingCharts.find((c) => c.name === n);
      if (!chart) {
        console.error("chart", n, "not found");
        return;
      }
      this.setContent(`profit-${n}`, this.mf.format(chart.profit));
      this.setContent(`loss-${n}`, `(${this.mf.format(chart.loss)})`);
      this.setContent(`net-${n}`, this.mf.format(chart.profit - chart.loss));
      let toggleIcon = document.createElement("i");
      if (this.state.chartInputs.showingStacks === n) {
        this.setData(toggleIcon, {
          feather: "eye",
        });
      }
      this.setContent(`toggle-${n}`, toggleIcon, ".icon");
    });
    const edited =
      this.state.chartInputs.days !== model.defaultDays ||
      this.state.chartInputs.offsetDay !== model.defaultOffset ||
      model.name !== this.modelName;
    this.el("save-controls").classList.toggle("hidden", !edited);
  }

  get mf() {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
}
