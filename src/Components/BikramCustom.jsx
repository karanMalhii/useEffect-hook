import React from "react";
import Bikram from "../hooks/Bikram";

export default function BikramCustom() {
  const { data } = Bikram("https://jsonplaceholder.typicode.com/todos");
  console.log(data)
  return <div></div>;
}
