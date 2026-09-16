import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Apprentice = () => {
  // Datos ficticios iniciales de aprendices
  const [apprentices, setApprentices] = useState([
    {
      id: 1,
      name: 'Carlos Mendoza',
      email: 'carlos.mendoza@soy.sena.edu.co',
      cell_number: '3101234567',
      course_number: '2671234',
      computer_number: 'PC-01'
    },
    {
      id: 2,
      name: 'María Alejandra Gómez',
      email: 'maria.gomez@soy.sena.edu.co',
      cell_number: '3209876543',
      course_number: '2671234',
      computer_number: 'PC-05'
    },
    {
      id: 3,
      name: 'Juan David Ramírez',
      email: 'juan.ramirez@soy.sena.edu.co',
      cell_number: '3155551234',
      course_number: '2559876',
      computer_number: 'N/A'
    },
    {
      id: 4,
      name: 'Laura Sofía Torres',
      email: 'laura.torres@soy.sena.edu.co',
      cell_number: '3004448899',
      course_number: '2559876',
      computer_number: 'PC-12'
    }
  ]);

  // Función ficticia para simular la eliminación de un aprendiz
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`¿Estás seguro de eliminar el aprendiz con ID ${id}?`);
    if (confirmDelete) {
      setApprentices(apprentices.filter((apprentice) => apprentice.id !== id));
    }
  };

  return (
    <div className="container py-4">
      {/* Encabezado con título y botón de registro */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold text-dark">Lista de Aprendices</h1>

        <Link to="/apprentice/registro" className="btn btn-success shadow-sm">
          <i className="bi bi-plus-circle me-1"></i> Nuevo Aprendiz
        </Link>
      </div>

      {/* Tarjeta y Tabla */}
      <div className="card shadow-lg border-0 rounded-4">
        <div 
          className="card-header text-white encabezado-tabla" 
          style={{ backgroundColor: '#25c72f' }}
        >
          <h5 className="mb-0">Aprendices Registrados</h5>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table id="idApprentice" className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Numero de Celular</th>
                  <th>Curso</th>
                  <th>Computador</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {apprentices.length > 0 ? (
                  apprentices.map((apprentice) => (
                    <tr key={apprentice.id}>
                      <td>{apprentice.id}</td>

                      <td className="fw-semibold">
                        {apprentice.name}
                      </td>

                      <td>{apprentice.email}</td>

                      <td>{apprentice.cell_number}</td>

                      <td>{apprentice.course_number || 'N/A'}</td>

                      <td>{apprentice.computer_number || 'N/A'}</td>

                      <td className="text-center">
                        <Link 
                          to={`/apprentice/${apprentice.id}`} 
                          className="btn btn-info btn-sm me-1 text-white"
                        >
                          Mostrar
                        </Link>

                        <Link 
                          to={`/apprentice/${apprentice.id}/edit`} 
                          className="btn btn-warning btn-sm me-1"
                        >
                          Editar
                        </Link>

                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(apprentice.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-3 text-muted">
                      No hay aprendices registrados.
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

export default Apprentice;