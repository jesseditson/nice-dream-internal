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
      this.eventListener("add-sheet-modal", "click", (e) => {
        if ((e.target as HTMLElement)?.id === "add-sheet-modal") {
          this.dispatchEvent("CancelCreateSheet");
        }
      }),
      this.eventListener("new-sheet-name", "keydown", (e) => {
        if (e.key === "Escape") {
          this.dispatchEvent("CancelCreateSheet");
        } else if (e.key === "Enter") {
          this.dispatchEvent({
            CreateSheet: {
              name: this.el<HTMLInputElement>("new-sheet-name").value.trim(),
            },
          });
        }
      }),
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
      this.eventListener("add-sheet", "click", () => {
        this.dispatchEvent("ShowCreateSheet");
      }),
      this.eventListener(
        root,
        "click",
        (event) => {
          event.stopPropagation();
        },
        ".sheet-link"
      ),
      this.eventListener(
        root,
        "click",
        (_, el) => {
          this.dispatchEvent({
            SelectSheet: { sheetId: invariant(el.dataset.sheetId, "sheet id") },
          });
        },
        ".sheet-select"
      ),
    ];
  }

  showing(state: State): boolean {
    return !!state.googleToken && state.showingScreen === "Models";
  }

  updated() {
    const modelList = invariant(this.rootElement, "model-list");
    const sheetReady = !!this.state.sheetId && !this.state.sheetError;
    const selectedSheet = this.state.sheets.find(
      (sheet) => sheet.id === this.state.sheetId
    );
    this.setContent(
      modelList,
      selectedSheet ? selectedSheet.name : "Choose a spreadsheet",
      ".sheet-title"
    );
    this.setContent(
      modelList,
      selectedSheet ? "Models" : "Pick a spreadsheet to load your models.",
      ".sheet-subtitle"
    );
    this.setContent(
      modelList,
      this.state.sheetError || "",
      ".sheet-error"
    );
    this.el("sheet-error").classList.toggle("hidden", !this.state.sheetError);
    this.setContent(
      modelList,
      this.state.sheets.map((sheet) => {
        const item = this.template("sheet-item");
        this.setContent(item, sheet.name, ".sheet-name");
        const meta = sheet.modifiedTime
          ? `Updated ${new Date(sheet.modifiedTime).toLocaleDateString()}`
          : "Open spreadsheet";
        this.setContent(item, meta, ".sheet-meta");
        this.setData(item, { sheetId: sheet.id }, ".sheet-select");
        if (sheet.webViewLink) {
          this.setAttrs(
            item,
            {
              href: sheet.webViewLink,
              target: "_blank",
              rel: "noreferrer",
            },
            ".sheet-link"
          );
        }
        this.findElement(item, ".sheet-select").classList.toggle(
          "ring-2",
          sheet.id === this.state.sheetId
        );
        this.findElement(item, ".sheet-select").classList.toggle(
          "ring-slate-900",
          sheet.id === this.state.sheetId
        );
        return item;
      }),
      ".sheet-list"
    );
    this.el("no-sheets").classList.toggle(
      "hidden",
      this.state.sheets.length > 0
    );
    this.el("models-panel").classList.toggle("opacity-60", !sheetReady);
    this.el("models-panel").classList.toggle(
      "pointer-events-none",
      !sheetReady
    );
    this.el("choose-sheet-empty").classList.toggle(
      "hidden",
      !!this.state.sheetId || !!this.state.sheetError
    );
    this.el("add-model").classList.toggle("hidden", !sheetReady);
    const { width } = this.rootElement!.getBoundingClientRect();
    this.setContent(
      modelList,
      (sheetReady ? this.state.models : []).map((m) => {
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
    this.el("add-sheet-modal").classList.toggle(
      "hidden",
      !this.state.showCreateSheet
    );
    if (this.state.showCreateSheet) {
      this.el<HTMLInputElement>("new-sheet-name").focus();
    }
    if (this.state.showCreateModel) {
      this.el("new-model-name").focus();
    }
  }
}
