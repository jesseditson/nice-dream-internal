import * as Plot from "@observablehq/plot";
import { View } from "./View";
import { State } from "../state";
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
          this.dispatchEvent({ ChooseChannel: { guid: this.modelGuid } });
        },
        ".add"
      ),
      this.eventListener(
        el,
        "click",
        (_, d) => {
          const channelGuid = invariant(d.dataset.guid, "guid");
          this.dispatchEvent({
            RemoveChannel: {
              channelGuid,
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
          this.dispatchEvent({ ShowChannel: { guid } });
        },
        ".edit"
      ),
      this.eventListener(
        el,
        "click",
        (_, d) => {
          const guid = invariant(d.dataset.guid, "guid");
          this.dispatchEvent({ ToggleChannelExpanded: { guid } });
        },
        ".toggle"
      ),
      this.eventListener("offset", "change", this.updateChartInputs.bind(this)),
      this.eventListener("days", "change", this.updateChartInputs.bind(this)),
    ];
  }

  updateChartInputs() {
    this.dispatchEvent({
      UpdateChart: {
        days: Number.parseInt(this.el<HTMLInputElement>("days").value),
        offset: Number.parseInt(this.el<HTMLInputElement>("offset").value),
      },
    });
  }

  // https://leebyron.com/streamgraph/
  getChart() {
    const { data, profitLoss } = this.state.chart;
    console.log(data, profitLoss);
    return Plot.plot({
      y: {
        grid: true,
        label: "↑ Revenue",
        // transform: (d) => d / 1000,
        // domain: [-1000, 3000],
      },
      x: {
        label: "Day →",
      },
      color: { legend: true },
      marks: [
        Plot.ruleY([0]),
        Plot.areaY(data, {
          x: "day",
          y: "revenue",
          z: "input",
          fill: this.state.expandedChannels.size ? "input" : "channel",
          offset: "wiggle",
        }),
        Plot.lineY(profitLoss, {
          y: "total",
          tip: true,
        }),
      ],
    });
  }

  showing(state: State): boolean {
    return state.showingScreen === "Model";
  }

  updated() {
    // Possible optimization
    // https://observablehq.com/@fil/plot-animate-a-bar-chart/2
    this.setContent("chart", this.getChart());

    const model = invariant(this.state.chartInputs.model, "model");
    const channelCollection = this.template("collection");
    this.setContent(
      channelCollection,
      model.channels.map((c) => {
        const cEl = this.template("collection-row");
        this.setContent(cEl, c.name, ".name");
        this.setData(cEl, { guid: c.guid }, ".delete");
        this.setData(cEl, { guid: c.guid }, ".edit");
        this.setData(cEl, { guid: c.guid }, ".toggle");
        const showItems = this.state.expandedChannels.has(c.guid);
        this.findElement(cEl, ".items").classList.toggle("hidden", !showItems);
        const toggleIcon = document.createElement("i");
        toggleIcon.dataset.feather = showItems
          ? "chevron-down"
          : "chevron-right";
        this.setContent(cEl, toggleIcon, ".toggle");
        if (showItems) {
          this.setContent(
            cEl,
            c.inputs.map((i) => {
              const iEl = this.template("collection-item");
              this.setContent(iEl, i.name, ".name");
              return iEl;
            }),
            ".items"
          );
        }
        return cEl;
      }),
      ".collection"
    );
    this.setContent("channels", channelCollection);
    this.setAttrs("offset", { max: `${this.state.chartInputs.days}` });
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
