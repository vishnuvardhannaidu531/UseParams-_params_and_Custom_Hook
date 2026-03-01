import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Github from './Github';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Github/:name' element={<Github/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <h1>Hello</h1> */}
    </>
  )
}

export default App
