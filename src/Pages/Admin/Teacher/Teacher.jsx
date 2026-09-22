import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Teacher = () => {
  // Datos ficticios iniciales de profesores e instructores
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: 'Roberto Gómez',
      email: 'roberto.gomez@sena.edu.co',
      area_name: 'Sistemas y Desarrollo',
      training_center_name: 'Centro de Comercio y Servicios'
    },
    {
      id: 2,
      name: 'Elena Benítez',
      email: 'elena.benitez@sena.edu.co',
      area_name: 'Gestión Ambiental',
      training_center_name: 'Centro Agropecuario'
    },
    {
      id: 3,
      name: 'Fernando Martínez',
      email: 'f.martinez@sena.edu.co',
      area_name: 'Recursos Humanos',
      training_center_name: 'Centro de Comercio y Servicios'
    },
    {
      id: 4,
      name: 'Claudia López',
      email: 'claudia.lopez@sena.edu.co',
      area_name: 'Redes y Teleinformática',
      training_center_name: 'Centro de Teleinformática'
    }
  ]);

  // Función ficticia para simular la eliminación de un profesor
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`¿Estás seguro de eliminar al profesor con ID ${id}?`);
    if (confirmDelete) {
      setTeachers(teachers.filter((teacher) => teacher.id !== id));
    }
  };

  return (
    <div className="container py-4">
      {/* Encabezado con título y botón de registro */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold text-dark">Lista de Profesores</h1>

        <Link to="/TeacherCreate" className="btn btn-success shadow-sm">
          <i className="bi bi-plus-circle me-1"></i> Nuevo Profesor
        </Link>
      </div>

      {/* Tarjeta y Tabla */}
      <div className="card shadow-lg border-0 rounded-4">
        <div
          className="card-header text-white encabezado-tabla"
          style={{ backgroundColor: '#25c72f' }}
        >
          <h5 className="mb-0">Profesores Registrados</h5>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table id="idteacher" className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Área</th>
                  <th>Centro de Formación</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {teachers.length > 0 ? (
                  teachers.map((teacher) => (
                    <tr key={teacher.id}>
                      <td>{teacher.id}</td>

                      <td className="fw-semibold">
                        {teacher.name}
                      </td>

                      <td>{teacher.email}</td>

                      <td>{teacher.area_name || 'Sin área'}</td>

                      <td>{teacher.training_center_name || 'Sin centro'}</td>

                      <td className="text-center">
                        <Link
                          to={`/Teacher/${teacher.id}`}
                          className="btn btn-info btn-sm me-1 text-white"
                        >
                          Mostrar
                        </Link>

                        <Link
                          to={`/Teacher/${teacher.id}/edit`}
                          className="btn btn-warning btn-sm me-1"
                        >
                          Editar
                        </Link>

                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(teacher.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-3 text-muted">
                      No hay profesores registrados.
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

export default Teacher;