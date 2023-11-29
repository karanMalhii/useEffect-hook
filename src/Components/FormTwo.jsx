import { Alert } from "bootstrap";
import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  console.log({ state, action });

  switch (action.type) {
    case "firstName":
      return { ...state, firstName: action.data };
    case "lastName":
      return { ...state, lastName: action.data };
    default:
      return state;
  }
};

const initalFormState = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "male",
  city: "asr",
};

export default function FormTwo() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("asr");

  const [formState, dispatch] = useReducer(reducer, initalFormState);

  console.log({ formState });

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
            value={formState?.firstName}
            onChange={(event) => {
              dispatch({
                type: "firstName",
                data: event.target.value,
              });
            }}
          />
        </div>

        <div className="row">
          <label htmlFor="lname">Last name:</label>
          <input
            type="text"
            name="lname"
            id="lname"
            value={formState?.lastName}
            onChange={(event) => {
              dispatch({
                type: "lastName",
                data: event.target.value,
              });
            }}
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
