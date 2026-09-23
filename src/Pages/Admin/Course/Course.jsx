import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Course = () => {
  // Datos ficticios iniciales de cursos
  const [courses, setCourses] = useState([
    {
      id: 1,
      course_number: '2671234',
      day: 'Lunes a Viernes',
      training_center_name: 'Centro de Comercio y Servicios',
      cohort_name: 'Ficha 3223899',
      environment_name: 'Ambiente 302 - Sistemas'
    },
    {
      id: 2,
      course_number: '2559876',
      day: 'Martes y Jueves',
      training_center_name: 'Centro Agropecuario',
      cohort_name: 'Ficha 2559876',
      environment_name: 'Ambiente 104 - Redes'
    },
    {
      id: 3,
      course_number: '2890112',
      day: 'Sábados',
      training_center_name: 'Centro de Teleinformática',
      cohort_name: 'Ficha 2890112',
      environment_name: 'Sin ambiente'
    }
  ]);

  // Función ficticia para simular la eliminación de un curso
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`¿Estás seguro de eliminar el curso con ID ${id}?`);
    if (confirmDelete) {
      setCourses(courses.filter((course) => course.id !== id));
    }
  };

  return (
    <div className="container py-4">
      {/* Encabezado con título y botón de registro */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold text-dark">Lista de Cursos</h1>

        <Link to="/CourseCreate" className="btn btn-success shadow-sm">
          <i className="bi bi-plus-circle me-1"></i> Nuevo Curso
        </Link>
      </div>

      {/* Tarjeta y Tabla */}
      <div className="card shadow-lg border-0 rounded-4">
        <div 
          className="card-header text-white encabezado-tabla" 
          style={{ backgroundColor: '#25c72f' }}
        >
          <h5 className="mb-0">Cursos Registrados</h5>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table id="idCourse" className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Id</th>
                  <th>Número de curso</th>
                  <th>Día</th>
                  <th>Centro de Formación</th>
                  <th>Ficha</th>
                  <th>Ambiente</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {courses.length > 0 ? (
                  courses.map((course) => (
                    <tr key={course.id}>
                      <td>{course.id}</td>

                      <td className="fw-semibold">
                        {course.course_number}
                      </td>

                      <td>{course.day}</td>

                      <td>{course.training_center_name || 'Sin centro'}</td>

                      <td>{course.cohort_name || 'Sin Ficha'}</td>

                      <td>{course.environment_name || 'Sin ambiente'}</td>

                      <td className="text-center">
                        <Link 
                          to={`/Courses/${course.id}`} 
                          className="btn btn-info btn-sm me-1 text-white"
                        >
                          Mostrar
                        </Link>

                        <Link 
                          to={`/Courses/${course.id}/edit`} 
                          className="btn btn-warning btn-sm me-1"
                        >
                          Editar
                        </Link>

                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(course.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-3 text-muted">
                      No hay cursos registrados.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;