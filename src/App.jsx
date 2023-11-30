import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Userdata from "./Components/Userdata";
import TestComponenet from "./Components/testComponenet";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Counter from "./Components/Counter";
import FormTwo from "./Components/FormTwo";
import CounterTwo from "./Components/CounterTwo";
import UseReducer from "./Components/UseReducer";
import Bikramcounter from "./Components/Bikramcounter";
import Form from "./Components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h2>This is app.jsx</h2> */}
      {/* <Button variant="primary">Primary</Button>{' '} */}
      {/* <Userdata/> */}
      {/* <p>Bikram work</p> */}
      {/* <TestComponenet /> */}
      {/* <FormTwo/> */}
      {/* <CounterTwo/> */}
      {/* <UseReducer /> */}
      <Form/>
      {/* <Bikramcounter/> */}
    </>
  );
}

export default App;
