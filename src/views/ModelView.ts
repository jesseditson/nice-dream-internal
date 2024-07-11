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
      // this.eventListener("offset", "change", this.updateChartInputs.bind(this)),
      this.eventListener("days", "change", () => {
        this.dispatchEvent({
          UpdateChart: {
            days: Number.parseInt(this.el<HTMLInputElement>("days").value),
          },
        });
      }),
      this.eventListener(
        el,
        "change",
        (_, el) => {
          const number = getDatasetNumber(el, "number");
          const field = invariant(el.dataset.field, "field") as keyof Input;
          const value = parseFloat((el as HTMLInputElement).value);
          this.dispatchEvent({ SetInputValue: { number, value, field } });
        },
        ".input-field"
      ),
      this.eventListener(
        el,
        "click",
        (_, el) => {
          const number = getDatasetNumber(el, "number");
          const hiddenInputs = this.state.chartInputs.hiddenInputs;
          if (hiddenInputs.has(number)) {
            hiddenInputs.delete(number);
          } else {
            hiddenInputs.add(number);
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
    const tipData: Record<string, number>[] = [];
    const chartMarks: Plot.Markish[] = [];
    const dataSum: Record<string, number>[] = [];
    const profitLossSum: Record<string, number>[] = [];
    this.state.charts.forEach(({ data, profitLoss, name }) => {
      profitLoss.forEach((d, index) => {
        tipData[index] = tipData[index] || d;
        tipData[index][name] = d.total;
      });
      profitLoss.forEach((d, index) => {
        profitLossSum[index] = profitLossSum[index] || d;
        profitLossSum[index][name] = d.total;
      });
      data.forEach((d, index) => {
        dataSum[index] = dataSum[index] || d;
        dataSum[index][name] = d.revenue;
      });
    });
    const moneyFormat = (d: number) => this.mf.format(d);
    return Plot.plot({
      width: container.clientWidth,
      y: {
        grid: true,
        label: "↑ Revenue",
      },
      x: {
        label: "Day →",
      },
      color: {
        legend: true,
        scheme: "pastel2",
      },
      marks: [
        Plot.ruleY([0]),
        Plot.areaY(dataSum, {
          x: "day",
          y: this.state.chartInputs.showingStacks,
          z: "input",
          fill: "input",
        }),
        Plot.lineY(profitLossSum, {
          x: "day",
          y: "mid",
          stroke: "black",
          fillOpacity: 0.8,
        }),
        Plot.areaY(profitLossSum, {
          x: "day",
          y1: "low",
          y2: "high",
          z: "input",
          fill: "black",
          fillOpacity: 0.2,
        }),
        Plot.linearRegressionY(dataSum, {
          x: "day",
          y: this.state.chartInputs.showingStacks,
          stroke: "blue",
          opacity: 0.3,
        }),
        Plot.tip(
          tipData,
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
  }

  updated() {
    // Possible optimization
    // https://observablehq.com/@fil/plot-animate-a-bar-chart/2
    this.setContent("chart", this.getChart(this.el("chart")));

    const model = invariant(this.state.chartInputs.model, "model");
    this.setContent("name", model.name);
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
    // this.setAttrs("offset", { max: `${this.state.chartInputs.days}` });
    this.setAttrs("days", {
      min: `${this.state.chartInputs.offsetDay}`,
      value: `${this.state.chartInputs.days}`,
    });
    ["low", "mid", "high"].forEach((_n) => {
      const n = _n as "high" | "low" | "mid";
      const chart = this.state.charts.find((c) => c.name === n);
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
  }

  get mf() {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
}
