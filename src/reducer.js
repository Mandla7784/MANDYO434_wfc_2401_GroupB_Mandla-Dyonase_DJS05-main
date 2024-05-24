//initializing state as an object of value property
const initialState = { value: 0 };

//function for reducing state
export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        value: value + 1,
      };
    case MINUS:
      return {
        ...state,
        value: value - 1,
      };
  }
}
