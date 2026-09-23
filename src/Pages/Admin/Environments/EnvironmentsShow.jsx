import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Datos ficticios
const MOCK_ENVIRONMENTS = [
    {
        id: 1,
        name: 'Ambiente de Software 1',
        location: 'Bloque A - Piso 2',
        training_center: { name: 'Centro de Teleinformática y Producción Industrial' },
        urlFoto: 'ambiente_software_1.jpg',
        created_at: '2026-01-15T08:30:00Z',
        updated_at: '2026-02-10T14:20:00Z'
    },
    {
        id: 2,
        name: 'Laboratorio de Redes',
        location: 'Bloque B - Piso 1',
        training_center: { name: 'Centro Agropecuario' },
        urlFoto: 'laboratorio_redes.jpg',
        created_at: '2026-01-20T09:15:00Z',
        updated_at: '2026-02-15T11:45:00Z'
    },
    {
        id: 3,
        name: 'Taller de Electrónica',
        location: 'Bloque C - Piso 1',
        training_center: { name: 'Centro de Teleinformática y Producción Industrial' },
        urlFoto: null,
        created_at: '2026-02-01T10:00:00Z',
        updated_at: '2026-02-01T10:00:00Z'
    }
];

const EnvironmentsShow = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [environment, setEnvironment] = useState(null);
    const [loading, setLoading] = useState(true);

    // Buscar la información del ambiente según el ID de la URL
    useEffect(() => {
        const fetchEnvironment = () => {
            setLoading(true);

            // Búsqueda en los datos ficticios
            const foundEnvironment = MOCK_ENVIRONMENTS.find(
                (item) => item.id === parseInt(id, 10)
            );

            if (foundEnvironment) {
                setEnvironment(foundEnvironment);
            } else {
                setEnvironment(null);
            }

            setLoading(false);
        };

        fetchEnvironment();
    }, [id]);

    // Función equivalente a \Carbon\Carbon::parse()->format('d/m/Y H:i')
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

    // Estado de carga
    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Cargando ambiente...</span>
                </div>
            </div>
        );
    }

    // Mensaje si no se encuentra el ambiente
    if (!environment) {
        return (
            <div className="container mt-5 text-center">
                <div className="alert alert-danger" role="alert">
                    No se encontró el ambiente solicitado.
                </div>
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                    Volver
                </button>
            </div>
        );
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="card shadow-lg border-0">

                {/* Encabezado del Card */}
                <div className="card-header bg-success text-white">
                    <h3 className="mb-0">
                        {environment.name}
                    </h3>
                </div>

                <div className="card-body">

                    {/* Fila: ID y Nombre */}
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">ID</label>
                            <div className="form-control bg-light">
                                {environment.id}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Nombre del ambiente</label>
                            <div className="form-control">
                                {environment.name}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Ubicación</label>
                            <div className="form-control">
                                {environment.location}
                            </div>
                        </div>

                        {/* Centro de Formación / Área */}
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Centro de Formación</label>
                            <div className="form-control">
                                {environment.training_center?.name || 'N/A'}
                            </div>
                        </div>

                        {/* Visualización de la foto */}
                        <div className="col-md-12 mb-3">
                            <label className="fw-bold d-block">Foto del ambiente</label>
                            {environment.urlFoto ? (
                                <img
                                    src={`/storage/images/${environment.urlFoto}`}
                                    alt={`Foto de ${environment.name}`}
                                    className="img-thumbnail mt-2"
                                    style={{ maxWidth: '200px', height: 'auto' }}
                                />
                            ) : (
                                <div className="form-control text-muted bg-light">
                                    Sin foto asignada
                                </div>
                            )}
                        </div>
                    </div>

                    <hr className="my-4" />

                    {/* Fila: Fechas de auditoría */}
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Fecha de creación</label>
                            <div className="form-control text-muted bg-light">
                                {formatDate(environment.created_at)}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Última actualización</label>
                            <div className="form-control text-muted bg-light">
                                {formatDate(environment.updated_at)}
                            </div>
                        </div>
                    </div>

                    {/* Botón Volver */}
                    <div className="mt-4 text-end">
                        <button onClick={() => navigate(-1)} className="btn btn-secondary">
                            Volver
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default EnvironmentsShow;