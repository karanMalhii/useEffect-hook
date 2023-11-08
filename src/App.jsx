import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Userdata from './Components/Userdata'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Counter from './Components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>This is app.jsx</h2>
    <Counter/>
    {/* <Button variant="primary">Primary</Button>{' '} */}
     {/* <Userdata/> */}
    </>
  )
}

export default App
