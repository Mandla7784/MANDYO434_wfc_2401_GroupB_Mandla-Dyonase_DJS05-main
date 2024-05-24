import {
  createStore,
  counterReducer,
  initialState,
  ADD,
  SUBTRACT,
  RESET,
} from "./src/createStore.js";

// Create the store with the reducer and initial state

const store = createStore(counterReducer, initialState);

// Subscribe to store updates
store.subscribe(() => console.log("State:", JSON.stringify(store.getState())));

// Initial State Verification
console.log("Initial State:", JSON.stringify(store.getState())); // Should log { count: 0 }

// Incrementing the Counter
store.dispatch({ type: ADD });

// Decrementing the Counter
store.dispatch({ type: SUBTRACT });

// Resetting the Counter
store.dispatch({ type: RESET });
