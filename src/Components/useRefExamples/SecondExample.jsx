import React, { useState, useEffect, useRef } from "react";

export default function SecondExample() {
  const holdValue = useRef(0);
  const [count, setcount] = useState(" ");
  let x = 0;
  const ChangeValue = (e) => {
    setcount(e.target.value);
  };
  useEffect(() => {
    x = x + 1;
    holdValue.current = holdValue.current + 1;
    console.log(x);
    console.log(holdValue);
    console.log("re-render");
  });
  return (
    <div>
      <input type="text" name="" id="" onChange={ChangeValue} />
      <h1>{count}</h1>
      <h2>{x}</h2>
      <h3>{holdValue.current}</h3>
    </div>
  );
}
