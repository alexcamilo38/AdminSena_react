import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

// Datos ficticios de Fichas (Cohorts)
const MOCK_COHORTS = [
    {
        id: 1,
        code: '3223899',
        start_date: '2026-04-01',
        end_date: '2027-10-01',
        schedule: 'Diurna (07:00 - 13:00)',
        offer: { id: 101, shift: 'Mañana' },
        created_at: '2026-03-15T08:30:00',
        updated_at: '2026-03-20T14:15:00'
    },
    {
        id: 2,
        code: '2891234',
        start_date: '2026-04-15',
        end_date: '2027-11-15',
        schedule: 'Nocturna (18:00 - 22:00)',
        offer: { id: 102, shift: 'Nocturna' },
        created_at: '2026-03-10T09:00:00',
        updated_at: '2026-03-18T11:45:00'
    },
    {
        id: 3,
        code: '2955678',
        start_date: '2026-05-01',
        end_date: '2027-12-01',
        schedule: 'Mixta (13:00 - 18:00)',
        offer: { id: 103, shift: 'Tarde' },
        created_at: '2026-03-12T10:20:00',
        updated_at: '2026-03-22T16:00:00'
    }
];

const CohortShow = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [cohort, setCohort] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Función para formatear fechas a DD/MM/YYYY o DD/MM/YYYY HH:mm
    const formatDate = (dateString, includeTime = false) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return 'N/A';

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        if (includeTime) {
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            return `${day}/${month}/${year} ${hours}:${minutes}`;
        }

        return `${day}/${month}/${year}`;
    };

    useEffect(() => {
        setIsLoading(true);
        // Búsqueda del registro por ID simulando llamada a API
        const foundCohort = MOCK_COHORTS.find((item) => item.id === parseInt(id, 10));
        setCohort(foundCohort || null);
        setIsLoading(false);
    }, [id]);

    if (isLoading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Cargando detalle de la ficha...</span>
                </div>
            </div>
        );
    }

    if (!cohort) {
        return (
            <div className="container mt-5 text-center">
                <div className="alert alert-danger" role="alert">
                    No se encontró la ficha solicitada.
                </div>
                <button className="btn btn-secondary" onClick={() => navigate('/cohorts')}>
                    Volver a la lista
                </button>
            </div>
        );
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="card shadow-lg border-0 rounded-4">

                {/* Card Header */}
                <div className="card-header bg-success text-white">
                    <h3 className="mb-0">
                        Ficha #{cohort.code}
                    </h3>
                </div>

                {/* Card Body */}
                <div className="card-body">

                    {/* ID y Código */}
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">ID</label>
                            <div className="form-control bg-light">
                                {cohort.id}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Código de ficha</label>
                            <div className="form-control">
                                {cohort.code}
                            </div>
                        </div>
                    </div>

                    {/* Fechas de Inicio y Fin */}
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Fecha de Inicio</label>
                            <div className="form-control">
                                {formatDate(cohort.start_date)}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Fecha de Fin</label>
                            <div className="form-control">
                                {formatDate(cohort.end_date)}
                            </div>
                        </div>
                    </div>

                    {/* Horario y Oferta Asociada */}
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Horario</label>
                            <div className="form-control">
                                {cohort.schedule || 'N/A'}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Oferta Asociada</label>
                            <div className="form-control">
                                {cohort.offer
                                    ? `Oferta #${cohort.offer.id} - ${cohort.offer.shift}`
                                    : 'Sin oferta asignada'}
                            </div>
                        </div>
                    </div>

                    <hr className="my-4" />

                    {/* Auditoría: Creación y Actualización */}
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Fecha de creación</label>
                            <div className="form-control text-muted bg-light">
                                {formatDate(cohort.created_at, true)}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Última actualización</label>
                            <div className="form-control text-muted bg-light">
                                {formatDate(cohort.updated_at, true)}
                            </div>
                        </div>
                    </div>

                    {/* Botones de Acción */}
                    <div className="mt-4 d-flex justify-content-between">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => navigate(-1)}
                        >
                            <i className="bi bi-arrow-left"></i> Volver a la lista
                        </button>

                        <Link to={`/cohorts/${cohort.id}/edit`} className="btn btn-warning">
                            Editar Ficha
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CohortShow;