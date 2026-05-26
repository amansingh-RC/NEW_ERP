import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react'
import Home from './pages/home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router> 
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
