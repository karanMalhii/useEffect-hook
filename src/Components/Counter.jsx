import React from "react";
import { useCount } from "./../hooks/useCount";

export default function Counter() {
  const { count : counterNumber, increment, decrement } = useCount();
  return (
    <div>
      Count value is {counterNumber }
      <br />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
