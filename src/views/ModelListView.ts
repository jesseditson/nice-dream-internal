import * as Plot from "@observablehq/plot";
import { State } from "../state";
import { View } from "./View";

export class ModelListView extends View {
  static get id() {
    return "model-list";
  }

  get id() {
    return ModelListView.id;
  }

  mount() {
    return [
      this.eventListener(
        this.rootElement!,
        "click",
        (_, el) => {
          this.dispatchEvent({
            ShowModel: { number: parseInt(el.dataset.number!) },
          });
        },
        ".button"
      ),
    ];
  }

  showing(state: State): boolean {
    return !!state.googleToken && state.showingScreen === "Models";
  }

  updated() {
    const modelList = this.template("list");
    this.setContent(modelList, "Models", ".title");
    const { width } = this.rootElement!.getBoundingClientRect();
    this.setContent(
      modelList,
      this.state.models.map((m) => {
        const mEl = this.template("list-item");
        this.setContent(mEl, m.name, ".name");
        this.setAttrs(mEl, { title: m.name }, ".button");
        this.setData(mEl, { number: m.number.toString() }, ".button");
        const chartEl = this.findElement(mEl, ".chart");
        const chartData = this.state.vizCache.get(m.number);
        if (chartData) {
          // 6 rem
          const height =
            parseFloat(getComputedStyle(document.documentElement).fontSize) * 6;
          this.setContent(
            chartEl,
            Plot.plot({
              height,
              width,
              padding: 0,
              margin: 0,
              y: {
                label: null,
                tickFormat: null,
              },
              x: {
                label: null,
                tickFormat: null,
              },
              color: {
                // legend: true,
                scheme: "pastel2",
              },
              marks: [
                Plot.areaY(chartData.data, {
                  x: "day",
                  y: "revenue",
                  z: "input",
                  fill: "input",
                }),
                Plot.lineY(chartData.profitLoss, {
                  x: "day",
                  y: "total",
                  stroke: "black",
                  fillOpacity: 0.8,
                }),
              ],
            })
          );
        }
        return mEl;
      }),
      ".list"
    );
    this.setContent("list", modelList);
  }
}
