import * as Plot from "@observablehq/plot";
import { View } from "./View";
import { State } from "../types";
import { invariant } from "../utils";

export class ModelView extends View {
  static get id() {
    return "model";
  }

  get id() {
    return ModelView.id;
  }

  mount() {
    const el = invariant(this.rootElement, "model root");
    return [
      this.eventListener(
        el,
        "click",
        (_, d) => {
          const channelGuid = invariant(d.dataset.guid, "guid");
          this.dispatchEvent({
            RemoveChannel: {
              channelGuid,
              modelGuid: this.state.chartInputs.model!.guid,
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
          this.dispatchEvent({ EditChannel: { guid } });
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
    ];
  }

  // https://leebyron.com/streamgraph/
  getChart() {
    const { data, profitLoss } = this.state.chart;
    return Plot.plot({
      y: {
        grid: true,
        label: "↑ Revenue",
        // transform: (d) => d / 1000,
      },
      x: {
        label: "Day →",
      },
      color: { legend: true },
      marks: [
        // Plot.ruleY([0]),
        Plot.areaY(data, {
          x: "day",
          y: "revenue",
          z: "input",
          fill: "channel",
        }),
        Plot.lineY(profitLoss, {
          y: "total",
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
  }
}
