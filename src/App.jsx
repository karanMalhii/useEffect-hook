import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Userdata from './Components/Userdata'
import TestComponenet from "./Components/TestComponenet";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h2>This is app.jsx</h2> */}
    {/* <Button variant="primary">Primary</Button>{' '} */}
      {/* <Userdata/> */}
      <TestComponenet/>
    </>
  )
}

export default App
