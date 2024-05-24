import { createStore } from "./src/createStore";
import { reducer } from "./src/reducer.js";
export const store = createStore(reducer);
