import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ComputerShow = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [computer, setComputer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComputer = async () => {
      try {
        const response = await fetch(`/api/computers/${id}`);
        const data = await response.json();
        setComputer(data);
      } catch (error) {
        console.error('Error al obtener la información del equipo:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchComputer();
  }, [id]);

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleString('es-CO', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  const renderStateBadge = (state, isHeader = false) => {
    const normalizedState = state?.toLowerCase();

    if (normalizedState === 'activo') {
      return (
        <span
          className={`badge ${
            isHeader ? 'bg-light text-success' : 'bg-success'
          } fs-6 px-3 py-2 me-2`}
        >
          🟢 Activo
        </span>
      );
    }

    if (normalizedState === 'mantenimiento') {
      return (
        <span className="badge bg-warning text-dark fs-6 px-3 py-2 me-2">
          🟡 En Mantenimiento
        </span>
      );
    }

    return (
      <span className="badge bg-secondary fs-6 px-3 py-2 me-2">
        {state ? state.charAt(0).toUpperCase() + state.slice(1) : 'N/A'}
      </span>
    );
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

  if (!computer) {
    return (
      <div className="container mt-5 text-center">
        <div className="alert alert-danger" role="alert">
          No se encontró la información del computador.
        </div>
        <Link to="/computers" className="btn btn-secondary">
          Volver a la lista
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow-lg border-0 rounded-4">
        
        <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
          <h3 className="mb-0">
            Computador #{computer.number} - {computer.brand}
          </h3>
          {renderStateBadge(computer.state, true)}
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="fw-bold">ID</label>
              <div className="form-control bg-light">{computer.id}</div>
            </div>

            <div className="col-md-4 mb-3">
              <label className="fw-bold">Número</label>
              <div className="form-control">{computer.number}</div>
            </div>

            <div className="col-md-4 mb-3">
              <label className="fw-bold">Marca</label>
              <div className="form-control">{computer.brand}</div>
            </div>
          </div>

          <div className="row">
            {/* Campo de Estado Detallado */}
            <div className="col-md-6 mb-3">
              <label className="fw-bold">Estado del Equipo</label>
              <div className="form-control d-flex align-items-center">
                {renderStateBadge(computer.state)}
                <small className="text-muted">
                  {computer.state?.toLowerCase() === 'activo' && 'Equipo disponible para uso'}
                  {computer.state?.toLowerCase() === 'mantenimiento' && 'Equipo en revisión técnica'}
                </small>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <label className="fw-bold">Ambiente Formativo</label>
              <div className="form-control">
                {computer.environment?.name ??
                  (computer.environment_id
                    ? `Ambiente #${computer.environment_id}`
                    : 'Sin ambiente asignado')}
              </div>
            </div>
          </div>

          <hr className="my-4" />

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="fw-bold">Fecha de creación</label>
              <div className="form-control text-muted bg-light">
                {formatDate(computer.created_at)}
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <label className="fw-bold">Última actualización</label>
              <div className="form-control text-muted bg-light">
                {formatDate(computer.updated_at)}
              </div>
            </div>
          </div>

          <div className="mt-4 d-flex justify-content-between">
            <Link to="/Computer" className="btn btn-secondary">
              <i className="bi bi-arrow-left"></i> Volver a la lista
            </Link>

            <Link to={`/Computer/edit/${computer.id}`} className="btn btn-warning">
              Editar Computador
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ComputerShow;