import React from 'react'
import { useState,useReducer } from 'react'

function reducer(state, action) {
  console.log(state)
  if (action.data == "Increment") {
    return {
      ...state,
      counter: state.counter + 1
    }
  }
  else if (action.data == "Decrement") {
    if (state.counter <= 0) {
      return {
        ...state,
        counter: 0
      }
    }
      return {
        ...state,
        counter: state.counter - 1,
      };
  }
  else if (action.data == "Reset") {
    return {
      ...state,
      counter: 0
    }
  }
 

}
const initialstate = {
  counter : 0
}
export default function Bikramcounter() {
  const [count, setcount] = useState(0);


  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <h3>Bikram Counter with UseReducer Hook</h3>
      <h2>{state.counter}</h2>

      <button onClick={() => dispatch({ data: "Increment", payload: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ data: "Decrement", payload: 2 })}>
        -
      </button>
      <button onClick={() => dispatch({ data: "Reset", payload: 3 })}>
        Reset
      </button>
    </div>
  );
}
