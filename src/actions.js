//defining action types
const myTypes = {
  ADD: "ADD",
  MINUS: "MINUS",
  RESET: "RESET",
};

const { ADD, MINUS, RESET } = myTypes;
//action creater...
export const incrementingState = () => ({
  type: ADD,
});

export const decrementingSate = () => ({
  type: MINUS,
});

export const resetingSate = () => ({
  type: RESET,
});
