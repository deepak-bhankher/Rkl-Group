import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Footer from './Component/Footer'
import About from './Pages/About'

const App = () => {
  return (
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>

  </Routes>
  <Footer/>
  </BrowserRouter>
  </>
  )
}

export default App
