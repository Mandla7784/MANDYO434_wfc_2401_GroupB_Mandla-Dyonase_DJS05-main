import { store } from "./src/Store.js";
import { incrementCounter, decrementCounter } from "./src/actions.js";

// Subscribe to store updates
store.subscribe(() => {
  console.log("Store changed:", store.getState());
});

// Dispatch actions to modify the state
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());

// Log the final state
console.log("Final state:", store.getState());
