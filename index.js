import { incrementingState, decrementingSate } from "./src/actions.js";
import { store } from "./src/createStore.js";
// Subscribe to store updates
store.subscribe(() => {
  console.log("Store changed:", store.getState());
});

// Dispatch actions to modify the state
store.dispatch(incrementingState());

// Log the final state
console.log("Final state:", store.getState());
