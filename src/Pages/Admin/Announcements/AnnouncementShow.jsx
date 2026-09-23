import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AnnouncementShow = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [announcement, setAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);

  // Lista de anuncios ficticios
  const mockAnnouncements = [
    {
      id: 1,
      title: 'Inscripciones Abiertas 2026',
      content: 'Proceso de inscripción para programas de formación técnica y tecnológica en las diferentes sedes del centro de formación.',
      publish_date: '2026-03-15',
      training_center: { name: 'Centro de Teleinformática y Producción Industrial' },
      urlFoto: 'https://placehold.co/300x200?text=Inscripciones+2026',
      created_at: '2026-03-01T08:00:00Z',
      updated_at: '2026-03-05T10:30:00Z'
    },
    {
      id: 2,
      title: 'Feria de Emprendimiento',
      content: 'Muestra comercial de proyectos productivos desarrollados por los aprendices durante la etapa lectiva.',
      publish_date: '2026-04-10',
      training_center: { name: 'Centro Agropecuario' },
      urlFoto: 'https://placehold.co/300x200?text=Feria+Emprendimiento',
      created_at: '2026-03-20T09:15:00Z',
      updated_at: '2026-03-22T14:20:00Z'
    },
    {
      id: 3,
      title: 'Mantenimiento de Plataforma',
      content: 'Aviso sobre interrupción programada de los servicios virtuales por actualización de servidores.',
      publish_date: '2026-05-01',
      training_center: { name: 'Centro de Comercio y Servicios' },
      urlFoto: '', // Ejemplo sin foto asignada
      created_at: '2026-04-25T11:00:00Z',
      updated_at: '2026-04-25T11:00:00Z'
    }
  ];

  // Cargar el anuncio correspondiente al ID de la URL
  useEffect(() => {
    setLoading(true);

    // Buscar en el array ficticio comparando el ID (convertido a número)
    const foundAnnouncement = mockAnnouncements.find(
      (item) => item.id === Number(id)
    );

    setAnnouncement(foundAnnouncement || null);
    setLoading(false);
  }, [id]);

  // Formatear fechas similar a Carbon de Laravel
  const formatDate = (dateString, includeTime = false) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Fecha inválida';

    if (includeTime) {
      return date.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    }
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (!announcement) {
    return (
      <div className="container mt-5 text-center">
        <div className="alert alert-warning shadow-sm" role="alert">
          <h4 className="alert-heading">Anuncio no encontrado</h4>
          <p>El anuncio con ID {id} no existe o fue eliminado.</p>
          <hr />
          <button className="btn btn-secondary btn-sm" onClick={() => navigate('/Announcement')}>
            Volver a la lista
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-header bg-success text-white">
          <h3 className="mb-0">{announcement.title}</h3>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="fw-bold">ID</label>
              <div className="form-control bg-light">{announcement.id}</div>
            </div>

            <div className="col-md-6 mb-3">
              <label className="fw-bold">Título del Anuncio</label>
              <div className="form-control bg-light">{announcement.title}</div>
            </div>

            <div className="col-md-12 mb-3">
              <label className="fw-bold">Contenido</label>
              <div className="form-control bg-light" style={{ height: 'auto', minHeight: '80px' }}>
                {announcement.content}
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <label className="fw-bold">Fecha de Publicación</label>
              <div className="form-control bg-light">
                {formatDate(announcement.publish_date)}
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <label className="fw-bold">Centro de Formación</label>
              <div className="form-control bg-light">
                {announcement.training_center?.name || 'N/A'}
              </div>
            </div>

            {/* Muestra la foto ficticia o ruta de almacenamiento */}
            <div className="col-md-12 mb-3">
              <label className="fw-bold d-block">Foto del Anuncio</label>
              {announcement.urlFoto ? (
                <img
                  src={
                    announcement.urlFoto.startsWith('http')
                      ? announcement.urlFoto
                      : `/storage/images/${announcement.urlFoto}`
                  }
                  alt="Foto del anuncio"
                  className="img-thumbnail mt-2 rounded shadow-sm"
                  style={{ maxWidth: '250px', height: 'auto' }}
                />
              ) : (
                <div className="form-control text-muted bg-light">Sin foto asignada</div>
              )}
            </div>
          </div>

          <hr className="my-4" />

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="fw-bold">Fecha de creación</label>
              <div className="form-control text-muted bg-light">
                {formatDate(announcement.created_at, true)}
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <label className="fw-bold">Última actualización</label>
              <div className="form-control text-muted bg-light">
                {formatDate(announcement.updated_at, true)}
              </div>
            </div>
          </div>

          <div className="mt-4 text-end">
            <button className="btn btn-secondary" onClick={() => navigate('/Announcement')}>
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementShow;