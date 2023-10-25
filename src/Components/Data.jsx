import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import {Form, Button, Card} from 'react-bootstrap';
import "../App.css";
export default function Data({ mydata }) {
  console.log(mydata);
  
  const [query, setQuery] = useState("");

  let filteredUsers = mydata.filter(function(user){
    return (user.firstName).toLowerCase().includes(query.toLowerCase())
    // return (user.firstName).includes(query)
  })

  //console.log(filteredUsers);
  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Search</Form.Label>
          <Form.Control type="text" placeholder="Enter" onChange={(event) => setQuery(event.target.value)}/>
        </Form.Group>
      </Form>
      <p>Search : {query}</p>
      <div className="parent">
        {filteredUsers?.map(function (product) {
          return (
            <Card
              className="myCard"
              style={{ width: "18rem", marginTop: " 20px" }}
              key={product.id}
            >
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.firstName}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
