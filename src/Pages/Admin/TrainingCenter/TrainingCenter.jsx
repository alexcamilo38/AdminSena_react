import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TrainingCenter = () => {
  // Datos ficticios iniciales de centros de formación
  const [trainingCenters, setTrainingCenters] = useState([
    {
      id: 1,
      name: 'Centro de Comercio y Servicios',
      location: 'Sede Principal - Popayán'
    },
    {
      id: 2,
      name: 'Centro Agropecuario',
      location: 'Sede Norte - Cauca'
    },
    {
      id: 3,
      name: 'Centro de Teleinformática y Producción Industrial',
      location: 'Sede Alto de Cauca'
    },
    {
      id: 4,
      name: 'Centro Nacional de Aprendizaje',
      location: 'Sede Santander de Quilichao'
    }
  ]);

  // Función ficticia para simular la eliminación de un centro
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`¿Estás seguro de eliminar el centro con ID ${id}?`);
    if (confirmDelete) {
      setTrainingCenters(trainingCenters.filter((center) => center.id !== id));
    }
  };

  return (
    <div className="container py-4">
      {/* Encabezado con título y botón de registro */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold text-dark">Lista de Centros</h1>

        <Link to="/TrainingCenterCreate" className="btn btn-success shadow-sm">
          <i className="bi bi-plus-circle me-1"></i> Nuevo Centro
        </Link>
      </div>

      {/* Tarjeta y Tabla */}
      <div className="card shadow-lg border-0 rounded-4">
        <div
          className="card-header text-white encabezado-tabla"
          style={{ backgroundColor: '#25c72f' }}
        >
          <h5 className="mb-0">Centros Registrados</h5>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table id="idcomputer" className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Ubicación</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {trainingCenters.length > 0 ? (
                  trainingCenters.map((center) => (
                    <tr key={center.id}>
                      <td>{center.id}</td>

                      <td className="fw-semibold">
                        {center.name}
                      </td>

                      <td>{center.location}</td>

                      <td className="text-center">
                        <Link
                          to={`/TrainingCenter/${center.id}`}
                          className="btn btn-info btn-sm me-1 text-white"
                        >
                          Mostrar
                        </Link>

                        <Link
                          to={`/TrainingCenter/${center.id}/edit`}
                          className="btn btn-warning btn-sm me-1"
                        >
                          Editar
                        </Link>

                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(center.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-3 text-muted">
                      No hay centros de formación registrados.
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

export default TrainingCenter;
