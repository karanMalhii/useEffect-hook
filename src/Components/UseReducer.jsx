import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.key == "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.key == "decrement") {
    if (state.counter == 0) {
     
      return state;
    }
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (action.key == "Reset") {
    return {
      ...state,
      counter: 0,
    };
  } else {
    return state;
  }

  // console.log(state)
  // console.log(action)
};

const initialState = {
  counter: 0,
};

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div>
      <h1>Practice use reducer</h1>
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({ key: "increment", payload: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ key: "decrement", payload: 1 })}>
        -
      </button>
      <button onClick={() => dispatch({ key: "Reset"})}>
        Reset
      </button>
    </div>
  );
}
