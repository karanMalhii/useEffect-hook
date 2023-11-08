import React, { useState } from "react";

export default function Form() {
    const [count,setCount] = useState("");
  return (
    <div>
      <form>
        <div className="row">
          <label htmlFor="">First name:</label>
          <input type="text" name="" id="fname" />
        </div>

        <div className="row">
          <label htmlFor="">Last name:</label>
          <input type="text" name="" id="lname" />
        </div>

        <div className="row">
          <label htmlFor="">Age:</label>
          <input type="number" name="" id="age" />
        </div>

        <div className="row">
          <label htmlFor="">Gender:</label>
          <label htmlFor="">male</label>
          <input type="radio" name="" id="male" />
          <label htmlFor="">female</label>
          <input type="radio" name="" id="female" />
        </div>

        <div className="row">
            <label htmlFor="">City:</label>
          <select name="" id="city">
            <option value="">Asr</option>
            <option value="">Jal</option>
            <option value="">Ludh</option>
            <option value="">Gurp</option>
          </select>
        </div>

        <div className="btn">
          <input type="submit" value="Submit" id="btn"/>
        </div>
      </form>
    </div>
  );
}
