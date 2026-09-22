//import React from 'react'
import Navbar from "./Components/Navbar"
import "./App.css"
import Footer from "./Components/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
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
import AnnouncementShow from "./Pages/Admin/Announcements/AnnouncementShow"
import AnnouncementCreate from "./Pages/Admin/Announcements/AnnouncementCreate"
import AnnouncementEdit from "./Pages/Admin/Announcements/AnnouncementEdit"
import ApprenticeShow from "./Pages/Admin/Apprentice/ApprenticeShow"
import ApprenticeCreate from "./Pages/Admin/Apprentice/ApprenticeCreate"
import ApprenticeEdit from "./Pages/Admin/Apprentice/ApprenticeEdit"
import ComputerCreate from "./Pages/Admin/Equipos/ComputerCreate"
import ComputerShow from "./Pages/Admin/Equipos/ComputerShow"
import ComputerEdit from "./Pages/Admin/Equipos/ComputerEdit"
import TrainingCenterShow from "./Pages/Admin/TrainingCenter/TrainingCenterShow"
import TrainingCenterEdit from "./Pages/Admin/TrainingCenter/TrainingCenterEdit"
import TeacherCreate from "./Pages/Admin/Teacher/TeacherCreate"
import TeacherShow from "./Pages/Admin/Teacher/TeacherShow"
import TeacherEdit from "./Pages/Admin/Teacher/TeacherEdit"

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
          <Route path="/ComputerCreate" element={<ComputerCreate/>}/>
          <Route path="/Computer/:id" element={<ComputerShow />} />
          <Route path="/Computer/:id/edit" element={<ComputerEdit />} />
          {/* Rutas de Cursos */}
          <Route path="/Courses" element={<Course/>}/>
          {/* Rutas de Profesores*/}
          <Route path="/Teacher" element={<Teacher/>}/>
          <Route path="/TeacherCreate" element={<TeacherCreate/>}/>
          <Route path="/Teacher/:id" element={<TeacherShow />} />
          <Route path="/Teacher/:id/edit" element={<TeacherEdit />} />
         {/* Rutas de centro de formacion */}
          <Route path="/TrainingCenter" element={<TrainingCenter/>}/>
          <Route path="/TrainingCenterCreate" element={<TrainingCenterCreate/>}/>
          <Route path="/TrainingCenter/:id" element={<TrainingCenterShow />} />
          <Route path="/TrainingCenter/:id/edit" element={<TrainingCenterEdit />} />
          {/* Rutas de Aprendices*/}         
          <Route path="/Apprentice" element={<Apprentice/>}/>
          <Route path="/Apprentice/:id" element={<ApprenticeShow />} />
          <Route path="/ApprenticeCreate" element={<ApprenticeCreate />} />
          <Route path="/Apprentice/:id/edit" element={<ApprenticeEdit />} />
          {/* Rutas de Reportes*/}    
          <Route path="/Reports" element={<Reports/>}/>
          <Route path="/Convocatorias" element={<Convocatorias/>}/>
          <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
          {/* Rutas de Programas*/}    
          <Route path="/Program" element={<Program/>}/>
          {/* Rutas de Ambientes*/}    
          <Route path="/Environments" element={<Environments/>}/>
          {/* Rutas de Anuncios*/}    
          <Route path="/Announcement" element={<Announcement/>}/>
          <Route path="/Announcement/:id" element={<AnnouncementShow />} />
          <Route path="/AnnouncementCreate" element={<AnnouncementCreate />} />
          <Route path="/Announcement/:id/edit" element={<AnnouncementEdit />} />

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
