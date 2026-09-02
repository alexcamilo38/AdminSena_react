//import React from 'react'
import Navbar from "./Components/Navbar"
import "./App.css"
import Footer from "./Components/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/home"
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
          <Route path="/" element={<Home/>}/>


      </Routes>



      <Footer/>
    </>
  )
}

export default App
