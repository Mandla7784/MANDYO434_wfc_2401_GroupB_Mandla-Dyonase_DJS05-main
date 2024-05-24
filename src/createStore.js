import { ADD, MINUS, RESET } from "./actions.js";

//initializing state as an object of value property
const initialState = { value: 0 };
//function for reducing state
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        value: state.value + 1,
      };
    case MINUS:
      return {
        ...state,
        value: state.value - 1,
      };
    case RESET:
      return {
        ...state,
        value: state.value,
      };
  }
}

//function to create the store..
export function createStore(reducer) {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  // Initialize the state by dispatching a dummy action
  dispatch({ type: "Mandla" });

  return {
    getState,
    dispatch,
    subscribe,
  };
}

export const store = createStore(reducer);
