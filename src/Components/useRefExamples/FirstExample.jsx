import React, { useRef, useEffect } from "react";

export default function FirstExample() {
  const inputRef = useRef(null);
  console.log(inputRef);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleButtonClick = () => {
    // console.log(inputRef);
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} name="" id="" />
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}

// Todo: Example of useRef accessing a DOM element directly.
