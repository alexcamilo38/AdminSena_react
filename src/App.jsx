//import React from 'react'
import Navbar from "./Components/Navbar"
import "./App.css"
import Footer from "./Components/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/home"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Login/Register"
import AdminHome from "./Pages/Admin/AdminHome"
import About from "./Pages/About/about"
import Profile from "./Pages/Profile/Profile"
import StudentHome from "./Pages/Student/StudentHome"
import Area from "./Pages/Admin/Area"
import Computer from "./Pages/Admin/Computer"
import Course from "./Pages/Admin/Course"
import Teacher from "./Pages/Admin/Teacher"
import TrainingCenter from "./Pages/Admin/TrainingCenter"
import Apprentice from "./Pages/Admin/Apprentice"
import Reports from "./Pages/Admin/Report/Reports"
import Convocatorias from "./Pages/Admin/Report/Convocatorias"
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/AdminHome" element={<AdminHome/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/StudentHome" element={<StudentHome/>}/>
          <Route path="/Areas" element={<Area/>}/>
          <Route path="/Computer" element={<Computer/>}/>
          <Route path="/Courses" element={<Course/>}/>
          <Route path="/Teacher" element={<Teacher/>}/>
          <Route path="/TrainingCenter" element={<TrainingCenter/>}/>
          <Route path="/Apprentice" element={<Apprentice/>}/>
          <Route path="/Apprentice" element={<Apprentice/>}/>
          <Route path="/Reports" element={<Reports/>}/>
          <Route path="/Convocatorias" element={<Convocatorias/>}/>

          

          Student

      </Routes>



      <Footer/>
    </>
  )
}

export default App
