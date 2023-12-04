import React, { useState } from "react";
import Father from "./Father";

export default function GrandFather() {
  const [Count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  console.log("Grand-father");

  const increment = () => {
    setCount(Count + 1);
  };

  return (
    <div>
      <Father age={Count}/>
      <button onClick={increment}>Click me</button>
      <button onClick={() => setCount2(count2 + 1)}>Press here</button>

    </div>
  );
}
