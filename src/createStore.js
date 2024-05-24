// Define the type of action
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const RESET = "RESET";

export const initialState = { count: 0 };

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { count: state.count + 2 };
    case SUBTRACT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
}

export function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    };
  };

  return { getState, dispatch, subscribe };
}
