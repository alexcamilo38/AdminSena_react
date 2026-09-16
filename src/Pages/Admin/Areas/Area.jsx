import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AreaEdit from './AreaEdit';

const Area = () => {
  // Datos ficticios de prueba
  const [areas, setAreas] = useState([
    { id: 1, name: 'Sistemas y Desarrollo' },
    { id: 2, name: 'Gestión Ambiental' },
    { id: 3, name: 'Recursos Humanos' },
    { id: 4, name: 'Contabilidad y Finanzas' },
    { id: 5, name: 'Mercadeo y Publicidad' }
  ]);

  // Función ficticia para simular la eliminación de un área
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`¿Estás seguro de eliminar el área con ID ${id}?`);
    if (confirmDelete) {
      setAreas(areas.filter((area) => area.id !== id));
    }
  };

  return (
    <div className="container py-4">
      {/* Encabezado con título y botón de agregar */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold text-dark">Lista de Áreas</h1>

        <Link to="/AreasCreate" className="btn btn-success shadow-sm">
          <i className="bi bi-plus-circle me-1"></i> Nueva Área
        </Link>
      </div>

      {/* Tarjeta y Tabla */}
      <div className="card shadow-lg border-0 rounded-4">
        <div 
          className="card-header text-white encabezado-tabla" 
          style={{ backgroundColor: '#25c72f' }}
        >
          <h5 className="mb-0">Áreas Registradas</h5>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table id="idArea" className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {areas.length > 0 ? (
                  areas.map((area) => (
                    <tr key={area.id}>
                      <td>{area.id}</td>

                      <td className="fw-semibold">
                        {area.name}
                      </td>

                      <td className="text-center">
                        <Link 
                          to={`/areas/${area.id}`} 
                          className="btn btn-info btn-sm me-1 text-white"
                        >
                          Mostrar
                        </Link>

                        <Link 
                          to={`/areas/${area.id}/edit`} 
                          className="btn btn-warning btn-sm me-1"
                        >
                          Editar
                        </Link>

                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(area.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center py-3 text-muted">
                      No hay áreas registradas.
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

export default Area;