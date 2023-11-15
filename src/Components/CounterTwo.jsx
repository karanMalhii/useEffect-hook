import React, { useState, useReducer } from "react";

const reducer = (state, action) => {};

const initialState = {
  counter: 0,
};

export default function CounterTwo() {
  const [counter, setcounter] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setcounter(counter + 1)}>+</button>
      <button onClick={() => setcounter(counter - 1)}>-</button>
    </div>
  );
}
