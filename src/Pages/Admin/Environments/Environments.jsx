import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Environments = () => {
  // Estado con datos ficticios iniciales para los ambientes
  const [environments, setEnvironments] = useState([
    {
      id: 1,
      name: 'Ambiente de Software 1',
      location: 'Bloque A - Piso 2',
      training_center: { name: 'Centro de Teleinformática y Producción Industrial' },
      
    },
    {
      id: 2,
      name: 'Laboratorio de Redes',
      location: 'Bloque B - Piso 1',
      training_center: { name: 'Centro Agropecuario' },
     
    },
    {
      id: 3,
      name: 'Taller de Electrónica',
      location: 'Bloque C - Piso 1',
      training_center: { name: 'Centro de Teleinformática y Producción Industrial' },
     
    }
  ]);

  // Manejo de la eliminación de un ambiente
  const handleDelete = (id) => {
    const confirmDelete = window.confirm('¿Está seguro de eliminar este ambiente?');
    if (confirmDelete) {
      setEnvironments(environments.filter((env) => env.id !== id));
    }
  };

  return (
    <div className="container py-4">
      {/* Encabezado */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold text-dark">Lista de Ambientes</h1>

        <Link to="/environments/create" className="btn btn-success shadow-sm">
          <i className="bi bi-plus-circle me-1"></i> Nuevo Ambiente
        </Link>
      </div>

      {/* Tarjeta con Tabla */}
      <div className="card shadow-lg border-0 rounded-4">
        <div 
          className="card-header text-white encabezado-tabla" 
          style={{ backgroundColor: '#25c72f' }}
        >
          <h5 className="mb-0">Ambientes Registrados</h5>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table id="idEnvironment" className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Ubicación</th>
                  <th>Centro de Formación</th>
                  
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {environments.length > 0 ? (
                  environments.map((environment) => (
                    <tr key={environment.id}>
                      <td>{environment.id}</td>

                      <td className="fw-semibold">
                        {environment.name}
                      </td>

                      {/* Campo Ubicación Resaltado */}
                      <td>
                        <span className="badge bg-light text-dark border shadow-sm px-2 py-1 fs-6 fw-normal">
                          <i className="bi bi-geo-alt-fill text-danger me-1"></i>
                          {environment.location}
                        </span>
                      </td>

                      <td>
                        {environment.training_center?.name || 'N/A'}
                      </td>

                      <td className="text-center">
                        <Link 
                          to={`/environments/${environment.id}`} 
                          className="btn btn-info btn-sm me-1 text-white"
                        >
                          Mostrar
                        </Link>

                        <Link 
                          to={`/environments/${environment.id}/edit`} 
                          className="btn btn-warning btn-sm me-1 text-white"
                        >
                          Editar
                        </Link>

                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(environment.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-3 text-muted">
                      No hay ambientes registrados.
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

export default Environments;