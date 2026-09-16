import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Announcement = () => {
  // Estado con datos ficticios de los anuncios
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: 'Inscripciones Abiertas 2026',
      content: 'Proceso de inscripción para programas de formación técnica y tecnológica.',
      publish_date: '2026-03-15',
      training_center: { name: 'Centro de Teleinformática y Producción Industrial' },
   
    },
    {
      id: 2,
      title: 'Feria de Emprendimiento',
      content: 'Muestra comercial de proyectos productivos desarrollados por los aprendices.',
      publish_date: '2026-04-10',
      training_center: { name: 'Centro Agropecuario' },
    
    },
    {
      id: 3,
      title: 'Mantenimiento de Plataforma',
      content: 'Aviso sobre interrupción programada de los servicios virtuales.',
      publish_date: '2026-05-01',
      training_center: { name: 'Centro de Comercio y Servicios' },
    
    }
  ]);

  // Manejo de eliminación de un anuncio
  const handleDelete = (id) => {
    const confirmDelete = window.confirm('¿Está seguro de eliminar este anuncio?');
    if (confirmDelete) {
      setAnnouncements(announcements.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="container py-4">
      {/* Encabezado */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold text-dark">Lista de Anuncios</h1>

        <Link to="/announcements/create" className="btn btn-success shadow-sm">
          <i className="bi bi-plus-circle me-1"></i> Nuevo Anuncio
        </Link>
      </div>

      {/* Tarjeta con Tabla */}
      <div className="card shadow-lg border-0 rounded-4">
        <div 
          className="card-header text-white encabezado-tabla" 
          style={{ backgroundColor: '#25c72f' }}
        >
          <h5 className="mb-0">Anuncios Registrados</h5>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table id="idAnnouncement" className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Título</th>
                  <th>Contenido</th>
                  <th>Fecha de Publicación</th>
                  <th>Centro de Formación</th>
           
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {announcements.length > 0 ? (
                  announcements.map((announcement) => (
                    <tr key={announcement.id}>
                      <td>{announcement.id}</td>

                      <td className="fw-semibold">
                        {announcement.title}
                      </td>

                      <td 
                        className="small text-muted" 
                        style={{ maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                      >
                        {announcement.content}
                      </td>

                      {/* Campo Fecha de Publicación Resaltado */}
                      <td>
                        <span className="badge bg-light text-dark border shadow-sm px-2 py-1 fs-6 fw-normal">
                          <i className="bi bi-calendar-event text-success me-1"></i>
                          {announcement.publish_date}
                        </span>
                      </td>

                      <td>
                        {announcement.training_center?.name || 'N/A'}
                      </td>

                    

                      <td className="text-center">
                        <Link 
                          to={`/announcements/${announcement.id}`} 
                          className="btn btn-info btn-sm me-1 text-white"
                        >
                          Mostrar
                        </Link>

                        <Link 
                          to={`/announcements/${announcement.id}/edit`} 
                          className="btn btn-warning btn-sm me-1 text-white"
                        >
                          Editar
                        </Link>

                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(announcement.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-3 text-muted">
                      No hay anuncios registrados.
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

export default Announcement;