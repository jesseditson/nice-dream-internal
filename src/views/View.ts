import { Upd8View } from "upd8";
import { State } from "../types";
import { NDEvent } from "../events";

export class View extends Upd8View<State, NDEvent> {}
