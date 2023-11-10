import { Alert } from "bootstrap";
import React, { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("asr");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // console.log({"first name is ":firstName,"last name is ":lastName,"Age is ":age,"Gender is ": gender,"City is":city})
          const message = `First name is: ${firstName}\nLast name is: ${lastName}\nAge is: ${age}\nGender is: ${gender}\nCity is: ${city}`;
          alert(message);
        }}
      >
        <div className="row">
          <label htmlFor="fname">First name:</label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="row">
          <label htmlFor="lname">Last name:</label>
          <input
            type="text"
            name="lname"
            id="lname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="row">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="row">
          <label htmlFor="">Gender:</label>
          <label htmlFor="male">male</label>
          <input
            type="radio"
            name="gender"
            value={"male"}
            id="male"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female">female</label>
          <input
            type="radio"
            name="gender"
            value={"female"}
            id="female"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>

        <div className="row">
          <label htmlFor="city">City:</label>
          <select
            name="city"
            id="city"
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="asr">Asr</option>
            <option value="jal">Jal</option>
            <option value="ldh">Ludh</option>
            <option value="gurp">Gurp</option>
          </select>
        </div>

        <div className="btn">
          <input type="submit" value="Submit" id="btn" />
        </div>
      </form>
    </div>
  );
}
