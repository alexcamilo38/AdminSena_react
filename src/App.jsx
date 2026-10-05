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
{/* Rutas de areas*/}
import Area from "./Pages/Admin/Areas/Area"
import AreaDetail from "./Pages/Admin/Areas/AreaDetail"
import AreaCreate from "./Pages/Admin/Areas/AreaCreate"
import AreaEdit from "./Pages/Admin/Areas/AreaEdit"
{/* Rutas de Equipos*/}
import Computer from "./Pages/Admin/Equipos/Computer"
import ComputerCreate from "./Pages/Admin/Equipos/ComputerCreate"
import ComputerShow from "./Pages/Admin/Equipos/ComputerShow"
import ComputerEdit from "./Pages/Admin/Equipos/ComputerEdit"
{/* Rutas de Cursos */}
import Course from "./Pages/Admin/Course/Course"
import CourseCreate from "./Pages/Admin/Course/CourseCreate"
import CourseEdit from "./Pages/Admin/Course/CourseEdit"
import CourseShow from "./Pages/Admin/Course/CourseShow"
{/* Rutas de Profesores*/}
import Teacher from "./Pages/Admin/Teacher/Teacher"
import TeacherCreate from "./Pages/Admin/Teacher/TeacherCreate"
import TeacherShow from "./Pages/Admin/Teacher/TeacherShow"
import TeacherEdit from "./Pages/Admin/Teacher/TeacherEdit"
{/* Rutas de centro de formacion */}
import TrainingCenter from "./Pages/Admin/TrainingCenter/TrainingCenter"
import TrainingCenterShow from "./Pages/Admin/TrainingCenter/TrainingCenterShow"
import TrainingCenterEdit from "./Pages/Admin/TrainingCenter/TrainingCenterEdit"
import TrainingCenterCreate from "./Pages/Admin/TrainingCenter/TrainingCenterCreate"
{/* Rutas de Aprendices*/}
import Apprentice from "./Pages/Admin/Apprentice/Apprentice"
import ApprenticeShow from "./Pages/Admin/Apprentice/ApprenticeShow"
import ApprenticeCreate from "./Pages/Admin/Apprentice/ApprenticeCreate"
import ApprenticeEdit from "./Pages/Admin/Apprentice/ApprenticeEdit"
{/* Rutas de Reportes*/}    
import Reports from "./Pages/Admin/Report/Reports"
import Convocatorias from "./Pages/Admin/Report/Convocatorias"
import ForgotPassword from "./Pages/Login/ForgotPassword"
{/* Rutas de Ambientes*/}
import Environments from "./Pages/Admin/Environments/Environments"
import EnvironmentsCreate from "./Pages/Admin/Environments/EnvironmentsCreate"
import EnvironmentsShow from "./Pages/Admin/Environments/EnvironmentsShow"
import EnvironmentsEdit from "./Pages/Admin/Environments/EnvironmentsEdit"
{/* Rutas de Anuncios*/}    
import Announcement from "./Pages/Admin/Announcements/Announcement"
import AnnouncementShow from "./Pages/Admin/Announcements/AnnouncementShow"
import AnnouncementCreate from "./Pages/Admin/Announcements/AnnouncementCreate"
import AnnouncementEdit from "./Pages/Admin/Announcements/AnnouncementEdit"
{/* Rutas de Ofertas*/}   
import Offer from "./Pages/Admin/Offers/Offer"
import OfferShow from "./Pages/Admin/Offers/OfferShow"
import OfferCreate from "./Pages/Admin/Offers/OfferCreate"
import OfferEdit from "./Pages/Admin/Offers/OfferEdit"
 {/* Rutas de Fichas*/}  
import Cohort from "./Pages/Admin/Cohorts/Cohort"
import CohortShow from "./Pages/Admin/Cohorts/CohortShow"
import CohortCreate from "./Pages/Admin/Cohorts/CohortCreate"
import CohortEdit from "./Pages/Admin/Cohorts/CohortEdit"
{/* Rutas de Programas*/}    
import Program from "./Pages/Admin/Program/Program"
import ProgramEdit from "./Pages/Admin/Program/ProgramEdit"
import ProgramCreate from "./Pages/Admin/Program/ProgramCreate"
import ProgramShow from "./Pages/Admin/Program/ProgramShow"


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
          <Route path="/CourseCreate" element={<CourseCreate/>}/>
          <Route path="/Courses/:id/edit" element={<CourseEdit />} />
          <Route path="/Courses/:id" element={<CourseShow />} />
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
          <Route path="/ProgramCreate" element={<ProgramCreate/>}/>
          <Route path="/Program/:id/edit" element={<ProgramEdit />} />
          <Route path="/Program/:id" element={<ProgramShow />} />
          
          {/* Rutas de Ambientes*/}    
          <Route path="/Environments" element={<Environments/>}/>
          <Route path="/EnvironmentsCreate" element={<EnvironmentsCreate/>}/>
          <Route path="/Environments/:id/edit" element={<EnvironmentsEdit />} />
          <Route path="/Environments/:id" element={<EnvironmentsShow />} />
          {/* Rutas de Anuncios*/}    
          <Route path="/Announcement" element={<Announcement/>}/>
          <Route path="/Announcement/:id" element={<AnnouncementShow />} />
          <Route path="/AnnouncementCreate" element={<AnnouncementCreate />} />
          <Route path="/Announcement/:id/edit" element={<AnnouncementEdit />} />

          {/* Rutas de Ofertas*/}    
          <Route path="/Offers" element={<Offer/>}/>
          <Route path="/Offers/:id" element={<OfferShow />} />
          <Route path="/OffersCreate" element={<OfferCreate />} />
          <Route path="/Offers/:id/edit" element={<OfferEdit />} />
          {/* Rutas de Fichas*/}    
          <Route path="/Cohorts" element={<Cohort/>}/>
          <Route path="/Cohorts/:id" element={<CohortShow />} />
          <Route path="/CohortsCreate" element={<CohortCreate />} />
          <Route path="/Cohorts/:id/edit" element={<CohortEdit />} />

      </Routes>

      <Footer/>
    </>
  )
}

export default App
