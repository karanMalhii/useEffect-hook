import React, { useState } from "react";

export default function Form() {
  const [data, setData] = useState("");


  return (
    <div>
      <form onSubmit={(e) => setData(e.target.value)}>
        <div className="row">
          <label htmlFor="fname">First name:</label>
          <input type="text" name="fname" id="fname" />
        </div>

        <div className="row">
          <label htmlFor="lname">Last name:</label>
          <input type="text" name="lname" id="lname" />
        </div>

        <div className="row">
          <label htmlFor="age">Age:</label>
          <input type="number" name="age" id="age" />
        </div>

        <div className="row">
          <label htmlFor="">Gender:</label>
          <label htmlFor="male">male</label>
          <input type="radio" name="male" id="male" />
          <label htmlFor="female">female</label>
          <input type="radio" name="female" id="female" />
        </div>

        <div className="row">
          <label htmlFor="city">City:</label>
          <select name="city" id="city">
            <option value="">Asr</option>
            <option value="">Jal</option>
            <option value="">Ludh</option>
            <option value="">Gurp</option>
          </select>
        </div>

        <div className="btn">
          <input
            type="submit"
            value="Submit"
            id="btn"
            onSubmit={(e) => setData(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
