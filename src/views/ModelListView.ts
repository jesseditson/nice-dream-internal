import * as Plot from "@observablehq/plot";
import { State } from "../state";
import { View } from "./View";
import { invariant } from "../utils";

export class ModelListView extends View {
  static get id() {
    return "model-list";
  }

  get id() {
    return ModelListView.id;
  }

  mount() {
    const root = invariant(this.rootElement, "model list root");
    return [
      this.eventListener(this.el("add-model-modal"), "click", (e) => {
        if ((e.target as HTMLElement)?.id === "add-model-modal") {
          this.dispatchEvent("CancelCreateModel");
        }
      }),
      this.eventListener("new-model-name", "keydown", (e) => {
        if (e.key === "Escape") {
          this.dispatchEvent("CancelCreateModel");
        } else if (e.key === "Enter") {
          this.dispatchEvent({
            CreateModel: {
              name: this.el<HTMLInputElement>("new-model-name").value,
            },
          });
        }
      }),
      this.eventListener(
        root,
        "click",
        (_, el) => {
          console.log(el);
          this.dispatchEvent({
            ShowModel: { number: parseInt(el.dataset.number!) },
          });
        },
        ".model"
      ),
      this.eventListener(
        root,
        "click",
        (_, el) => {
          if (
            confirm(
              "Are you sure you want to delete this model? You won't be able to restore it."
            )
          ) {
            this.dispatchEvent({
              DeleteModel: { number: parseInt(el.dataset.number!) },
            });
          }
        },
        ".delete-model"
      ),
      this.eventListener("add-model", "click", () => {
        this.dispatchEvent("ShowCreateModel");
      }),
    ];
  }

  showing(state: State): boolean {
    return !!state.googleToken && state.showingScreen === "Models";
  }

  updated() {
    const modelList = invariant(this.rootElement, "model-list");
    this.setContent(modelList, "Models", ".title");
    const { width } = this.rootElement!.getBoundingClientRect();
    this.setContent(
      modelList,
      this.state.models.map((m) => {
        const mEl = this.template("list-item");
        this.setContent(mEl, m.name, ".name");
        this.setAttrs(mEl, { title: m.name }, ".model");
        this.setData(mEl, { number: m.number.toString() }, ".model");
        this.setData(mEl, { number: m.number.toString() }, ".delete-model");
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

    this.el("add-model-modal").classList.toggle(
      "hidden",
      !this.state.showCreateModel
    );
    if (this.state.showCreateModel) {
      this.el("new-model-name").focus();
    }
  }
}
