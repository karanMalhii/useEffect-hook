import React, { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
// import data from "../../data/users.json";
import Data from "../Components/Data";

export default function Userdata() {
  // console.log(data.users)
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const {
    data: users,
    loading: usersLoading,
    error: usersApiError,
  } = useApi("https://fakestoreapi.com/users");
  
  const {
    data: todos,
    loading: todosLoading,
    error: todosApiError,
  } = useApi("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      <input onChange={(event) => setInput(event.target.value)} value={input} />
      <button onClick={() => setCount(count + 1)}>Click : {count}</button>
      <hr />
      <h2>List of users</h2>
      {usersApiError == null ? (
        <>
          {usersLoading == true ? (
            <h2>Loading....</h2>
          ) : (
            <ul>
              {users?.map(function (value, index) {
                return <li key={index}>{value.username}</li>;
              })}
            </ul>
          )}
        </>
      ) : (
        <p>{usersApiError}</p>
      )}

      <hr />
      <h2>List of todo</h2>
      {todosLoading == true ? (
        <h2>Loading....</h2>
      ) : (
        <ul>
          {todos?.map(function (value, index) {
            return <li key={index}>{value.title}</li>;
          })}
        </ul>
      )}
      <hr />
    </div>
  );
}
