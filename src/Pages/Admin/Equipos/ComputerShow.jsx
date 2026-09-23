import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

// Datos ficticios para los computadores
const MOCK_COMPUTERS = [
  {
    id: 1,
    number: 'PC-01',
    brand: 'Lenovo ThinkCentre',
    environment_name: 'Ambiente 302 - Sistemas',
    status: 'Activo',
    created_at: '2026-02-01T08:00:00Z',
    updated_at: '2026-02-15T10:30:00Z',
  },
  {
    id: 2,
    number: 'PC-02',
    brand: 'HP EliteDesk',
    environment_name: 'Ambiente 302 - Sistemas',
    status: 'En Mantenimiento',
    created_at: '2026-02-02T09:15:00Z',
    updated_at: '2026-02-16T11:00:00Z',
  },
  {
    id: 3,
    number: 'PC-03',
    brand: 'Dell OptiPlex',
    environment_name: 'Ambiente 104 - Redes',
    status: 'Activo',
    created_at: '2026-02-05T14:20:00Z',
    updated_at: '2026-02-18T16:45:00Z',
  },
  {
    id: 4,
    number: 'PC-04',
    brand: 'HP ProDesk',
    environment_name: 'Ambiente 201 - Electrónica',
    status: 'En Mantenimiento',
    created_at: '2026-02-10T10:00:00Z',
    updated_at: '2026-02-20T12:30:00Z',
  },
];

const ComputerShow = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Estado para la información del equipo e indicador de carga
  const [computer, setComputer] = useState(null);
  const [loading, setLoading] = useState(true);

  // Efecto para consultar la API o cargar los datos ficticios de respaldo
  useEffect(() => {
    const fetchComputer = async () => {
      try {
        const response = await fetch(`/api/computers/${id}`);
        if (!response.ok) throw new Error('API no disponible');

        const data = await response.json();
        setComputer(data);
      } catch (error) {
        console.warn('API no disponible, utilizando datos ficticios (Mock).');

        // Buscar el computador correspondiente por ID en los datos ficticios
        const found = MOCK_COMPUTERS.find((item) => item.id === Number(id));

        if (found) {
          // Normalizar las propiedades ficticias al formato esperado por la vista
          setComputer({
            id: found.id,
            number: found.number,
            brand: found.brand,
            state: found.status,
            environment: { name: found.environment_name },
            created_at: found.created_at,
            updated_at: found.updated_at,
          });
        } else {
          setComputer(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchComputer();
  }, [id]);

  // Función para formatear fechas
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

  // Función para renderizar el badge de estado según 'Activo' o 'En Mantenimiento'
  const renderStateBadge = (state, isHeader = false) => {
    const normalizedState = state?.toLowerCase();

    if (normalizedState === 'activo') {
      return (
        <span
          className={`badge ${isHeader ? 'bg-light text-success' : 'bg-success'
            } fs-6 px-3 py-2 me-2`}
        >
          🟢 Activo
        </span>
      );
    }

    if (
      normalizedState === 'en mantenimiento' ||
      normalizedState === 'mantenimiento'
    ) {
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

  // Spinner mientras finaliza la consulta
  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  // Alerta si el equipo no fue encontrado
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

        {/* Encabezado del Card */}
        <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
          <h3 className="mb-0">
            Computador {computer.number} - {computer.brand}
          </h3>
          {renderStateBadge(computer.state, true)}
        </div>

        <div className="card-body">
          {/* Fila 1: ID, Número y Marca */}
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

          {/* Fila 2: Estado y Ambiente Formativo */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="fw-bold">Estado del Equipo</label>
              <div className="form-control d-flex align-items-center">
                {renderStateBadge(computer.state)}
                <small className="text-muted">
                  {computer.state?.toLowerCase() === 'activo' &&
                    'Equipo disponible para uso'}
                  {(computer.state?.toLowerCase() === 'en mantenimiento' ||
                    computer.state?.toLowerCase() === 'mantenimiento') &&
                    'Equipo en revisión técnica'}
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

          {/* Fila 3: Fechas de Creación y Actualización */}
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

          {/* Botones de navegación */}
          <div className="mt-4 d-flex justify-content-between">
            <button onClick={() => navigate(-1)} className="btn btn-secondary">
              Volver
            </button>

            <Link
              to={`/computers/edit/${computer.id}`}
              className="btn btn-warning"
            >
              Editar Computador
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ComputerShow;