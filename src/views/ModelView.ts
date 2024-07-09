import * as Plot from "@observablehq/plot";
import { View } from "./View";

export class ModelView extends View {
  static get id() {
    return "model";
  }

  get id() {
    return ModelView.id;
  }

  mount() {
    return [];
  }

  // https://leebyron.com/streamgraph/
  getChart() {
    const { channels, inputs, profitLoss } = this.state.chart;
    console.log(channels, inputs, profitLoss);
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
        Plot.ruleY([0]),
        // Plot.areaY(channels, {
        //   x: "day",
        //   y: "revenue",
        //   z: "format",
        //   fill: "group",
        //   offset: "center",
        // }),
        Plot.rectY(inputs, { x: "day", y: "revenue", z: "group" }),
        Plot.lineY(profitLoss, {
          y: "total",
        }),
      ],
    });
  }

  updated() {
    // Possible optimization
    // https://observablehq.com/@fil/plot-animate-a-bar-chart/2
    this.setContent("chart", this.getChart());
  }
}
