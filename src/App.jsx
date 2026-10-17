import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {

  let[cart,setCart]=useState([])
  return (
    <BrowserRouter>
    <Navbar cart={cart} setCart={setCart}/>
    <Routes>
        <Route path='/' element={<Home cart={cart} setCart={setCart}/>}/> 
        <Route path='/about' element={<About/>}/> 
        <Route path='/contact' element={<Contact/>}/> 
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App