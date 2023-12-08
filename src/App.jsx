import { useState } from 'react'
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'
import Nav from './Nav'
import { Routes, Route } from 'react-router-dom'
import Price from './Price'

function App() {


  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Stocks/' element={<Dashboard/>} />
        <Route path='/Stock/:symbol' element={<Price/>} />
      </Routes>
    </>
  )
}

export default App
