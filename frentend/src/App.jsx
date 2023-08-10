import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Form } from './Form'
import { Student } from './Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div style={{background:'red'}}>
      {`http://localhost:709/${id}`}
    </div> */}
    <Student/>
     {/* <Form/> */}
    </>
  )
}

export default App
