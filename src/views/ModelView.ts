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
      this.eventListener("days", "change", this.updateChartInputs.bind(this)),
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
    ];
  }

  updateChartInputs() {
    this.dispatchEvent({
      UpdateChart: {
        days: Number.parseInt(this.el<HTMLInputElement>("days").value),
        offset: 0,
        // offset: Number.parseInt(this.el<HTMLInputElement>("offset").value),
      },
    });
  }

  // https://leebyron.com/streamgraph/
  getChart(container: HTMLElement) {
    const chartMarks: Plot.Markish[] = [];
    this.state.charts.forEach(({ data, profitLoss, name }) => {
      chartMarks.push(
        Plot.areaY(data, {
          x: "day",
          y: "revenue",
          z: "input",
          fill: "input",
          tip: name === "mid",
          fillOpacity: 0.8,
        }),
        Plot.lineY(profitLoss, {
          x: "day",
          y: "total",
          tip: true,
          stroke: () => name,
        })
      );
    });
    return Plot.plot({
      width: container.clientWidth,
      y: {
        grid: true,
        label: "↑ Revenue",
        // transform: (d) => d / 1000,
        // domain: [-1000, 3000],
      },
      x: {
        label: "Day →",
      },
      color: { legend: true, scheme: "pastel2" },
      marks: [Plot.ruleY([0]), ...chartMarks],
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
        const toggleIcon = document.createElement("i");
        toggleIcon.dataset.feather = showItems
          ? "chevron-down"
          : "chevron-right";
        this.setContent(cEl, toggleIcon, ".toggle");
        this.findElement(cEl, ".items").classList.toggle("hidden", !showItems);
        if (showItems) {
          console.log(i);
          this.renderInputValues(cEl, i);
        }
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
    const mf = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    ["low", "mid", "high"].forEach((n) => {
      const chart = this.state.charts.find((c) => c.name === n);
      if (!chart) {
        console.error("chart", n, "not found");
        return;
      }
      this.setContent(`profit-${n}`, mf.format(chart.profit));
      this.setContent(`loss-${n}`, `(${mf.format(chart.loss)})`);
      this.setContent(`net-${n}`, mf.format(chart.profit - chart.loss));
    });
  }
}
