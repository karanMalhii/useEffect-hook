import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
// import Userdata from './Components/Userdata'
import TestComponenet from "./Components/testComponenet"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h2>This is app.jsx</h2> */}
    {/* <Button variant="primary">Primary</Button>{' '} */}
      {/* <Userdata/> */}
      <p>Bikram work</p>
      <TestComponenet/>
    </>
  )
}

export default App
