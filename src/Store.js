import { createStore } from "./createStore";
import { reducer } from "./reducer.js";
export const store = createStore(reducer);
