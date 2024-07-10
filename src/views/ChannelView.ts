import { View } from "./View";
import { State } from "../types";
import { invariant } from "../utils";

export class ChannelView extends View {
  static get id() {
    return "channel";
  }

  get id() {
    return ChannelView.id;
  }

  get channel() {
    return invariant(this.state.showingChannel, "channel");
  }

  mount() {
    const el = invariant(this.rootElement, "channel root");
    const guid = this.channel.guid;
    return [
      this.eventListener(
        el,
        "click",
        () => {
          this.dispatchEvent({ ChooseInput: { guid } });
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
              channelGuid: guid,
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
    ];
  }

  showing(state: State): boolean {
    return state.showingScreen === "Channel";
  }

  updated() {
    const inputCollection = this.template("collection");
    this.setAttrs("name", { value: this.channel.name });
    this.setContent(
      inputCollection,
      this.channel.inputs.map((i) => {
        const cEl = this.template("collection-row");
        this.setContent(cEl, i.name, ".name");
        this.setData(cEl, { guid: i.guid }, ".delete");
        this.setData(cEl, { guid: i.guid }, ".edit");
        this.findElement(cEl, ".toggle").classList.add("hidden");
        return cEl;
      }),
      ".collection"
    );
    this.setContent("inputs", inputCollection);
  }
}
