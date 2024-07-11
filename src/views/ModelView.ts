import * as Plot from "@observablehq/plot";
import { View } from "./View";
import { Input, State } from "../state";
import { invariant } from "../utils";

export class ModelView extends View {
  static get id() {
    return "model";
  }

  get id() {
    return ModelView.id;
  }

  get modelGuid() {
    return this.state.chartInputs.model!.guid;
  }

  mount() {
    const el = invariant(this.rootElement, "model root");
    return [
      this.eventListener(
        el,
        "click",
        () => {
          this.dispatchEvent({ ChooseInput: { guid: this.modelGuid } });
        },
        ".add"
      ),
      this.eventListener(
        el,
        "click",
        (_, d) => {
          const inputGuid = invariant(d.dataset.guid, "guid");
          this.dispatchEvent({
            RemoveInput: {
              inputGuid,
              modelGuid: this.modelGuid,
            },
          });
        },
        ".delete"
      ),
      this.eventListener(
        el,
        "click",
        (_, d) => {
          const guid = invariant(d.dataset.guid, "guid");
          this.dispatchEvent({ ShowInput: { guid } });
        },
        ".edit"
      ),
      this.eventListener(
        el,
        "click",
        (_, d) => {
          const guid = invariant(d.dataset.guid, "guid");
          this.dispatchEvent({ ToggleInputShowing: { guid } });
        },
        ".toggle, .collection .name"
      ),
      // this.eventListener("offset", "change", this.updateChartInputs.bind(this)),
      this.eventListener("days", "change", this.updateChartInputs.bind(this)),
      this.eventListener(
        el,
        "change",
        (_, el) => {
          const guid = invariant(el.dataset.guid, "guid");
          const field = invariant(el.dataset.field, "field") as keyof Input;
          const value = parseFloat((el as HTMLInputElement).value);
          this.dispatchEvent({ SetInputValue: { guid, value, field } });
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
    const { data, profitLoss } = this.state.chart;
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
      marks: [
        Plot.ruleY([0]),
        Plot.areaY(data, {
          x: "day",
          y: "revenue",
          z: "input",
          fill: "input",
          tip: true,
        }),
        Plot.lineY(profitLoss, {
          x: "day",
          y: "total",
          tip: true,
        }),
      ],
    });
  }

  showing(state: State): boolean {
    return state.showingScreen === "Model";
  }
  renderInputValues(element: HTMLElement, input: Input) {
    (
      [
        "avgSize",
        "avgFreq",
        "growthPercent",
        "growthFreq",
        "saturation",
        "seed",
        "variability",
      ] as (keyof Input)[]
    ).forEach((field) => {
      const value = input[field] as string;
      this.setAttrs(element, { value }, `.${field}`);
      this.setData(element, { guid: input.guid, field }, `.${field}`);
    });
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
        this.setData(cEl, { guid: i.guid }, ".name");
        this.setData(cEl, { guid: i.guid }, ".delete");
        this.setData(cEl, { guid: i.guid }, ".edit");
        this.setData(cEl, { guid: i.guid }, ".toggle");
        const showItems = this.state.openInputs.has(i.guid);
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
    this.setContent("profit", mf.format(this.state.chart.profit));
    this.setContent("loss", `(${mf.format(this.state.chart.loss)})`);
    this.setContent(
      "net",
      mf.format(this.state.chart.profit - this.state.chart.loss)
    );
  }
}
