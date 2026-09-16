import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cohort = () => {
  // Estado con datos ficticios iniciales de las fichas (cohorts)
  const [cohorts, setCohorts] = useState([
    {
      id: 1,
      code: '3223899',
      start_date: '2026-04-01',
      schedule: 'Diurna (07:00 - 13:00)',
      offer: { id: 101, shift: 'Mañana' }
    },
    {
      id: 2,
      code: '2891234',
      start_date: '2026-04-15',
      schedule: 'Nocturna (18:00 - 22:00)',
      offer: { id: 102, shift: 'Nocturna' }
    },
    {
      id: 3,
      code: '2955678',
      start_date: '2026-05-01',
      schedule: 'Mixta (13:00 - 18:00)',
      offer: { id: 103, shift: 'Tarde' }
    }
  ]);

  // Manejo de la eliminación de una ficha
  const handleDelete = (id) => {
    const confirmDelete = window.confirm('¿Está seguro de eliminar esta ficha?');
    if (confirmDelete) {
      setCohorts(cohorts.filter((cohort) => cohort.id !== id));
    }
  };

  return (
    <div className="container py-4">
      {/* Encabezado */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold text-dark">Lista de Fichas</h1>

        <Link to="/cohorts/create" className="btn btn-success shadow-sm">
          <i className="bi bi-plus-circle me-1"></i> Nueva Ficha
        </Link>
      </div>

      {/* Tarjeta con Tabla */}
      <div className="card shadow-lg border-0 rounded-4">
        <div 
          className="card-header text-white encabezado-tabla" 
          style={{ backgroundColor: '#25c72f' }}
        >
          <h5 className="mb-0">Fichas Registradas</h5>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table id="idcohort" className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Id</th>
                  <th>Código / Ficha</th>
                  <th>Fecha de Inicio</th>
                  <th>Horario</th>
                  <th>Oferta</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {cohorts.length > 0 ? (
                  cohorts.map((cohort) => (
                    <tr key={cohort.id}>
                      <td>{cohort.id}</td>

                      <td className="fw-semibold">
                        {cohort.code}
                      </td>

                      <td>{cohort.start_date}</td>

                      <td>{cohort.schedule}</td>

                      <td>
                        {cohort.offer 
                          ? `Oferta #${cohort.offer.id} - ${cohort.offer.shift}` 
                          : 'N/A'}
                      </td>

                      <td className="text-center">
                        <Link 
                          to={`/cohorts/${cohort.id}`} 
                          className="btn btn-info btn-sm me-1 text-white"
                        >
                          Mostrar
                        </Link>

                        <Link 
                          to={`/cohorts/${cohort.id}/edit`} 
                          className="btn btn-warning btn-sm me-1 text-white"
                        >
                          Editar
                        </Link>

                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(cohort.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-3 text-muted">
                      No hay fichas registradas.
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

export default Cohort;
