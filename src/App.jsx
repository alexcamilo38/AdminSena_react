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
import Area from "./Pages/Admin/Areas/Area"
import Computer from "./Pages/Admin/Equipos/Computer"
import Course from "./Pages/Admin/Course/Course"
import Teacher from "./Pages/Admin/Teacher/Teacher"
import TrainingCenter from "./Pages/Admin/TrainingCenter/TrainingCenter"
import Apprentice from "./Pages/Admin/Apprentice/Apprentice"
import Reports from "./Pages/Admin/Report/Reports"
import Convocatorias from "./Pages/Admin/Report/Convocatorias"
import ForgotPassword from "./Pages/Login/ForgotPassword"
import AreaDetail from "./Pages/Admin/Areas/AreaDetail"
import AreaCreate from "./Pages/Admin/Areas/AreaCreate"
import Program from "./Pages/Admin/Program/Program"
import Environments from "./Pages/Admin/Environments/Environments"
import Announcement from "./Pages/Admin/Announcements/Announcement"
import Offer from "./Pages/Admin/Offers/Offer"
import Cohort from "./Pages/Admin/Cohorts/Cohort"
import AreaEdit from "./Pages/Admin/Areas/AreaEdit"
import TrainingCenterCreate from "./Pages/Admin/TrainingCenter/TrainingCenterCreate"

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
          {/* Rutas de areas*/}
          <Route path="/Areas" element={<Area/>}/>
          <Route path="/areas/:id" element={<AreaDetail />} />
          <Route path="/AreasCreate" element={<AreaCreate />} />
          <Route path="/Areas/:id/edit" element={<AreaEdit />} />
          {/* Rutas de Equipos*/}
          <Route path="/Computer" element={<Computer/>}/>
          {/* Rutas de Cursos */}
          <Route path="/Courses" element={<Course/>}/>
          {/* Rutas de Profesores*/}
          <Route path="/Teacher" element={<Teacher/>}/>
         {/* Rutas de centro de formacion */}
          <Route path="/TrainingCenter" element={<TrainingCenter/>}/>
          <Route path="/TrainingCenterCreate" element={<TrainingCenterCreate/>}/>
          {/* Rutas de Aprendices*/}         
          <Route path="/Apprentice" element={<Apprentice/>}/>
          <Route path="/Reports" element={<Reports/>}/>
          <Route path="/Convocatorias" element={<Convocatorias/>}/>
          <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
          {/* Rutas de Programas*/}    
          <Route path="/Program" element={<Program/>}/>
          {/* Rutas de Ambientes*/}    
          <Route path="/Environments" element={<Environments/>}/>
          {/* Rutas de Anuncios*/}    
          <Route path="/Announcement" element={<Announcement/>}/>
          {/* Rutas de Ofertas*/}    
          <Route path="/Offers" element={<Offer/>}/>
          {/* Rutas de Fichas*/}    
          <Route path="/Cohorts" element={<Cohort/>}/>

          Student

      </Routes>



      <Footer/>
    </>
  )
}

export default App
