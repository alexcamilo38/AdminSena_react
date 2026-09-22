import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AnnouncementShow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [announcement, setAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);

  // Obtener los datos del anuncio al cargar el componente
  useEffect(() => {
    fetch(`/api/announcements/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAnnouncement(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener el anuncio:', error);
        setLoading(false);
      });
  }, [id]);

  // Formatear fechas similar a Carbon de Blade
  const formatDate = (dateString, includeTime = false) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
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
    return <div className="container mt-5 text-center">Cargando...</div>;
  }

  if (!announcement) {
    return <div className="container mt-5 text-center">Anuncio no encontrado</div>;
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow-lg border-0">
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
              <div className="form-control">{announcement.title}</div>
            </div>

            <div className="col-md-12 mb-3">
              <label className="fw-bold">Contenido</label>
              <div className="form-control" style={{ height: 'auto', minHeight: '80px' }}>
                {announcement.content}
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <label className="fw-bold">Fecha de Publicación</label>
              <div className="form-control">
                {formatDate(announcement.publish_date)}
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <label className="fw-bold">Centro de Formación</label>
              <div className="form-control">
                {announcement.training_center?.name || 'N/A'}
              </div>
            </div>

            {/* Muestra la imagen cargada o un indicador por defecto */}
            <div className="col-md-12 mb-3">
              <label className="fw-bold d-block">Foto del Anuncio</label>
              {announcement.urlFoto ? (
                <img
                  src={`/storage/images/${announcement.urlFoto}`}
                  alt="Foto del anuncio"
                  className="img-thumbnail mt-2"
                  style={{ maxWidth: '200px', height: 'auto' }}
                />
              ) : (
                <div className="form-control text-muted">Sin foto asignada</div>
              )}
            </div>
          </div>

          <hr className="my-4" />

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="fw-bold">Fecha de creación</label>
              <div className="form-control text-muted">
                {formatDate(announcement.created_at, true)}
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <label className="fw-bold">Última actualización</label>
              <div className="form-control text-muted">
                {formatDate(announcement.updated_at, true)}
              </div>
            </div>
          </div>

          <div className="mt-4 text-end">
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementShow;