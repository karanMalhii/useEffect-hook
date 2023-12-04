
import React, { useState, useReducer } from 'react'

import Button from "react-bootstrap/Button";

const initalFormState = {
  fname: "",
  lname: "",
  age: "",
  city: "Amritsar",
  gender: "",
};

const reducer = (state, action) => {
  switch(action.type){
    case "fname":
      return {
        ...state,
        fname: action.data
      }
    case "lname":
      return {
        ...state,
        lname: action.data
      }
    case "age":
      return {
        ...state,
        age: action.data
      }
    case "city":
      return {
        ...state,
        city: action.data
      }
    case "gender":
      return {
        ...state,
        gender: action.data
      }
    default:
      return state
  }
  
}


export default function Form_three() {

  // const [fname, setfname] = useState(); 
  const [form, dispatch] = useReducer(reducer, initalFormState);
  // console.log(fname)
  
  
  return (
    <div>
      <h2 align="center"> This is Form_three</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log({
            fname: form.fname,
            lname: form.lname,
            age: form.age,
            city: form.city,
            gender: form.gender,
          });
          
        }}
      >
        <div>
          <b>First Name</b>
          <input
            type="text"
            name="fname"
            id="fname"
            value={form.fname}
            placeholder="enter your  first name"
            onChange={(e) =>
              dispatch({
                type: "fname",
                data: e.target.value,
              })
            }
          />
        </div>
        <div>
          <b>Last Name</b>
          <input
            type="text"
            name="lname"
            id="lname"
            value={form.lname}
            placeholder="enter your  last name"
            onChange={(e) =>
              dispatch({
                type: "lname",
                data: e.target.value,
              })
            }
          />
        </div>
        <div>
          <b>Age</b>
          <input
            type="number"
            name="age"
            id="age"
            value={form.age}
            placeholder="enter your age"
            required
            onChange={(e) => {
              dispatch({
                type: "age",
                data: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <b>Location</b>
          <select
            name="city"
            id="city"
            onChange={(e) => {
              dispatch({ type: "city", data: e.target.value });
            }}
          >
            <option value="Amritsar">Amritsar</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
          </select>
        </div>
        <div>
          <b>Gender: </b>
          <label className="ml-5">
            Male
            <input
              type="radio"
              name="gender"
              value="male"
              className="ml-5"
              onChange={(e) => {
                dispatch({ type: "gender", data: e.target.value });
              }}
            />
          </label>
          <label>
            Female <input type="radio" name="gender" value="female"
              onChange={(e) => dispatch({ type: "gender", data: e.target.value })} />
          </label>
        </div>

        <Button variant="primary" type="submit" className="mt-5">
          Submit
        </Button>
      </form>
    </div>
  );
}
