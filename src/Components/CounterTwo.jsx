import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  // console.log(state, action);
  if (action.type == "increment") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  }
  else if(action.type == "Decrement") {
    return {
      ...state,
      counter: state.counter - action.payload,
    };
  }
  else {
    return state
  }
};

const initialState = {
  counter: 0,
};

export default function CounterTwo() {
  // const [counter, setcounter] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div>
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "Decrement", payload: 1 })}>
        -
      </button>
    </div>
  );
}
