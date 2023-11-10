import React, { useState } from "react";

export default function Bikram(url) {
    const [data,setData] = useState([]);


  async function getdata(link) {
    const response = await fetch(link);
    console.log(response);
    if (response.ok) {
      let newResponse = await response.json();
      setData(newResponse)
    } else {
    }
  }
  getdata(url);
  return{
    data
  }
}
