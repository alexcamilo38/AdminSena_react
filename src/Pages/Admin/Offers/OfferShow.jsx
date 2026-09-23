import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Datos ficticios
const MOCK_OFFERS = [
    {
        id: 1,
        shift: 'Mañana',
        registration_date: '2026-03-20',
        capacity: 30,
        program: { name: 'Análisis y Desarrollo de Software' },
        created_at: '2026-01-15T08:30:00Z',
        updated_at: '2026-02-10T14:20:00Z'
    },
    {
        id: 2,
        shift: 'Tarde',
        registration_date: '2026-03-22',
        capacity: 25,
        program: { name: 'Conservación de Recursos Naturales' },
        created_at: '2026-01-20T09:15:00Z',
        updated_at: '2026-02-15T11:45:00Z'
    },
    {
        id: 3,
        shift: 'Nocturna',
        registration_date: '2026-03-25',
        capacity: 35,
        program: { name: 'Gestión del Talento Humano' },
        created_at: '2026-02-01T10:00:00Z',
        updated_at: '2026-02-01T10:00:00Z'
    }
];

const OfferShow = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [offer, setOffer] = useState(null);
    const [loading, setLoading] = useState(true);

    // Buscar la oferta correspondiente según el ID recibido por URL
    useEffect(() => {
        const fetchOffer = () => {
            setLoading(true);

            const foundOffer = MOCK_OFFERS.find(
                (item) => item.id === parseInt(id, 10)
            );

            if (foundOffer) {
                setOffer(foundOffer);
            } else {
                setOffer(null);
            }

            setLoading(false);
        };

        fetchOffer();
    }, [id]);

    // Función para formatear fechas completas (Fecha y hora)
    const formatDateTime = (dateString) => {
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

    // Función para formatear fecha de inscripción (Solo día/mes/año)
    const formatDateOnly = (dateString) => {
        if (!dateString) return 'N/A';
        // Se agrega tiempo T00:00:00 para evitar despasaje por zonas horarias al usar solo YYYY-MM-DD
        const date = new Date(`${dateString}T00:00:00`);
        return date.toLocaleDateString('es-CO', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Cargando oferta...</span>
                </div>
            </div>
        );
    }

    if (!offer) {
        return (
            <div className="container mt-5 text-center">
                <div className="alert alert-danger" role="alert">
                    No se encontró la oferta solicitada.
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

                {/* Encabezado */}
                <div className="card-header bg-success text-white">
                    <h3 className="mb-0">
                        Oferta #{offer.id}
                    </h3>
                </div>

                <div className="card-body">

                    {/* Fila: ID y Jornada */}
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">ID</label>
                            <div className="form-control bg-light">
                                {offer.id}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Jornada</label>
                            <div className="form-control">
                                {offer.shift}
                            </div>
                        </div>
                    </div>

                    {/* Fila: Fecha de Inscripción y Capacidad */}
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Fecha de Inscripción</label>
                            <div className="form-control">
                                {formatDateOnly(offer.registration_date)}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Capacidad / Cupos</label>
                            <div className="form-control">
                                {offer.capacity}
                            </div>
                        </div>
                    </div>

                    {/* Fila: Programa de Formación */}
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Programa de Formación</label>
                            <div className="form-control">
                                {offer.program?.name || 'N/A'}
                            </div>
                        </div>
                    </div>

                    <hr className="my-4" />

                    {/* Fila: Fechas de auditoría */}
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Fecha de creación</label>
                            <div className="form-control text-muted bg-light">
                                {formatDateTime(offer.created_at)}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Última actualización</label>
                            <div className="form-control text-muted bg-light">
                                {formatDateTime(offer.updated_at)}
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

export default OfferShow;