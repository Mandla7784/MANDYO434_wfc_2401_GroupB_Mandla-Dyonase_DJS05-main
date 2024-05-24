import {
  incrementingState,
  decrementingSate,
  resetingSate,
} from "./src/actions.js";
import { store } from "./src/createStore.js";
store.subscribe(() => {
  console.log(store.getState());
});

// Subscribe to store updates
store.subscribe(() => {
  console.log("Store changed:", store.getState());
});

// Dispatch actions to modify the state
store.dispatch(incrementingState());
store.dispatch(incrementingState());
store.dispatch(decrementingSate());
store.dispatch(resetingSate());

// Log the final state
console.log("Final state:", store.getState());
