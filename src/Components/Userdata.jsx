import React, {useEffect, useState} from "react";
// import data from "../../data/users.json";
import Data from "../Components/Data";

export default function Userdata() {
  
  // console.log(data.users)
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(function(){
    console.log("only called once when componenet is loaded! : array hai pr bilkul khali hai")
  }, []);


  useEffect(function(){
    console.log("Called everytime when component is re-render : array hai hi nhi")
  });


  useEffect(function(){
    console.log("only called when value of count is changed! : Array vich value hai")
  }, [count]);

  console.log(count)
  return (
    <div>
      <input onChange={(event) => setInput(event.target.value)} value={input}/>
      <button onClick={() => setCount(count + 1)}>Click : {count}</button>
      {/* <Data mydata={data.users} /> */}
    </div>
  );
}
