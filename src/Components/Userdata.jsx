import React, { useEffect, useState } from "react";
// import data from "../../data/users.json";
import Data from "../Components/Data";

export default function Userdata() {
  // console.log(data.users)
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getUsers() {
    setLoading(true);

    let response = await fetch("https://fakestoreapi.com/users");
    // console.log(response);
    let responseData = await response.json();
    // console.log(responseData);
    
    setData(responseData);
    setLoading(false);
  }

  useEffect(function () {
    getUsers();
    // console.log("only called once when componenet is loaded! : array hai pr bilkul khali hai")
  }, []);

  useEffect(function () {
    // console.log("Called everytime when component is re-render : array hai hi nhi")
  });

  useEffect(
    function () {
      // console.log("only called when value of count is changed! : Array vich value hai");
      getUsers();
    },
    [count]
  );

  console.log(data);
  return (
    <div>
      <input onChange={(event) => setInput(event.target.value)} value={input} />
      <button onClick={() => setCount(count + 1)}>Click : {count}</button>
      {/* <Data mydata={data.users} /> */}

      {/* <hr />
      {loading && (<h2>Loading....</h2>) }
      <hr /> */}

      {loading == true ? (
        <h2>Loading....</h2>
      ) : (
        <ul>
          {data?.map(function (value, index) {
            return <li>{value.username}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
