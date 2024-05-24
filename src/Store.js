import { createStore } from "./createStore.js";
import { reducer } from "./reducer.js";

// Create the store
export const store = createStore(reducer);
