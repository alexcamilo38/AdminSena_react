import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Computer = () => {
  // Datos ficticios iniciales con estado de mantenimiento
  const [computers, setComputers] = useState([
    {
      id: 1,
      number: 'PC-01',
      brand: 'Lenovo ThinkCentre',
      environment_name: 'Ambiente 302 - Sistemas',
      status: 'Activo'
    },
    {
      id: 2,
      number: 'PC-02',
      brand: 'HP EliteDesk',
      environment_name: 'Ambiente 302 - Sistemas',
      status: 'En Mantenimiento'
    },
    {
      id: 3,
      number: 'PC-03',
      brand: 'Dell OptiPlex',
      environment_name: 'Ambiente 104 - Redes',
      status: 'Activo'
    },
    {
      id: 4,
      number: 'PC-04',
      brand: 'HP ProDesk',
      environment_name: 'Ambiente 201 - Electrónica',
      status: 'En Mantenimiento'
    }
  ]);

  // Función ficticia para simular la eliminación de un computador
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`¿Estás seguro de eliminar el computador con ID ${id}?`);
    if (confirmDelete) {
      setComputers(computers.filter((comp) => comp.id !== id));
    }
  };

  return (
    <div className="container py-4">
      {/* Encabezado con título y botón de agregar */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold text-dark">Lista de Equipos</h1>

        <Link to="/ComputerCreate" className="btn btn-success shadow-sm">
          <i className="bi bi-plus-circle me-1"></i> Nuevo Equipo
        </Link>
      </div>

      {/* Tarjeta y Tabla */}
      <div className="card shadow-lg border-0 rounded-4">
        <div
          className="card-header text-white encabezado-tabla"
          style={{ backgroundColor: '#25c72f' }}
        >
          <h5 className="mb-0">Computadores Registrados</h5>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table id="idcomputer" className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Id</th>
                  <th>Número</th>
                  <th>Marca</th>
                  <th>Ambiente</th>
                  <th>Estado</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {computers.length > 0 ? (
                  computers.map((comp) => (
                    <tr key={comp.id}>
                      <td>{comp.id}</td>

                      <td className="fw-semibold">
                        {comp.number}
                      </td>

                      <td>{comp.brand}</td>

                      <td>{comp.environment_name || 'Sin asignar'}</td>

                      {/* Columna con el reporte de Estado */}
                      <td>
                        {comp.status === 'En Mantenimiento' ? (
                          <span className="badge bg-warning text-dark">
                            <i className="bi bi-tools me-1"></i> En Mantenimiento
                          </span>
                        ) : (
                          <span className="badge bg-success">
                            <i className="bi bi-check-circle me-1"></i> Activo
                          </span>
                        )}
                      </td>

                      <td className="text-center">
                        <Link
                          to={`/Computer/${comp.id}`}
                          className="btn btn-info btn-sm me-1 text-white"
                        >
                          Mostrar
                        </Link>

                        <Link
                          to={`/Computer/${comp.id}/edit`}
                          className="btn btn-warning btn-sm me-1"
                        >
                          Editar
                        </Link>

                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(comp.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-3 text-muted">
                      No hay computadores registrados.
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

export default Computer;