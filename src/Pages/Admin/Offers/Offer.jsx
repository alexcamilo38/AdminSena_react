import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Offer = () => {
  // Estado con datos ficticios iniciales de las ofertas
  const [offers, setOffers] = useState([
    {
      id: 1,
      shift: 'Mañana',
      registration_date: '2026-03-20',
      capacity: 30,
      program: { name: 'Análisis y Desarrollo de Software' }
    },
    {
      id: 2,
      shift: 'Tarde',
      registration_date: '2026-03-22',
      capacity: 25,
      program: { name: 'Conservación de Recursos Naturales' }
    },
    {
      id: 3,
      shift: 'Nocturna',
      registration_date: '2026-03-25',
      capacity: 35,
      program: { name: 'Gestión del Talento Humano' }
    }
  ]);

  // Manejo de la eliminación de una oferta
  const handleDelete = (id) => {
    const confirmDelete = window.confirm('¿Está seguro de eliminar esta oferta?');
    if (confirmDelete) {
      setOffers(offers.filter((offer) => offer.id !== id));
    }
  };

  return (
    <div className="container py-4">
      {/* Encabezado */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold text-dark">Lista de Ofertas</h1>

        <Link to="/OffersCreate" className="btn btn-success shadow-sm">
          <i className="bi bi-plus-circle me-1"></i> Nueva Oferta
        </Link>
      </div>

      {/* Tarjeta con Tabla */}
      <div className="card shadow-lg border-0 rounded-4">
        <div
          className="card-header text-white encabezado-tabla"
          style={{ backgroundColor: '#25c72f' }}
        >
          <h5 className="mb-0">Ofertas Registradas</h5>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table id="idOffer" className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Id</th>
                  <th>Jornada</th>
                  <th>Fecha de Inscripción</th>
                  <th>Capacidad</th>
                  <th>Programa de Formación</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {offers.length > 0 ? (
                  offers.map((offer) => (
                    <tr key={offer.id}>
                      <td>{offer.id}</td>

                      <td className="fw-semibold">
                        {offer.shift}
                      </td>

                      <td>{offer.registration_date}</td>

                      <td>{offer.capacity}</td>

                      <td>{offer.program?.name || 'N/A'}</td>

                      <td className="text-center">
                        <Link
                          to={`/Offers/${offer.id}`}
                          className="btn btn-info btn-sm me-1 text-white"
                        >
                          Mostrar
                        </Link>

                        <Link
                          to={`/Offers/${offer.id}/edit`}
                          className="btn btn-warning btn-sm me-1 text-white"
                        >
                          Editar
                        </Link>

                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(offer.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-3 text-muted">
                      No hay ofertas registradas.
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

export default Offer;
