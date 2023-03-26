import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Test} from './Test'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  
  <Test title="title 1" text="text1"></Test>
    <Test title="title 2" text="tex2"></Test>
    <Test title="title 3" text="tex3"></Test>
    <Test title="title 4" text="text4"></Test></>
  )
}

export default App
