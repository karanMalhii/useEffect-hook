import React, { useReducer } from "react";
import {initialState, reducer} from  './../utils/reducerExample';

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
      <hr />
      
      <input type="text" onChange={(event) => dispatch({ key : "firstName", payload : event.target.value })} 
      value={state.firstName}
      />
      <p>FirstName : {state.firstName}</p>
      
      <hr />
      
      <input type="text" onChange={(event) => dispatch({ key : "lastName", payload : event.target.value })}
       value={state.lastName}
       />
      <p>LastName : {state.lastName}</p>
    </div>
  );
}
