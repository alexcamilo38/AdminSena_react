import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Datos ficticios de los centros de formación
const MOCK_TRAINING_CENTERS = [
    {
        id: 1,
        name: 'Centro de Comercio y Servicios',
        location: 'Sede Principal - Popayán',
        created_at: '2026-01-15T08:30:00Z',
        updated_at: '2026-02-10T14:20:00Z',
    },
    {
        id: 2,
        name: 'Centro Agropecuario',
        location: 'Sede Norte - Cauca',
        created_at: '2026-01-18T09:00:00Z',
        updated_at: '2026-02-12T11:45:00Z',
    },
    {
        id: 3,
        name: 'Centro de Teleinformática y Producción Industrial',
        location: 'Sede Alto de Cauca',
        created_at: '2026-01-20T10:15:00Z',
        updated_at: '2026-02-15T16:10:00Z',
    },
    {
        id: 4,
        name: 'Centro Nacional de Aprendizaje',
        location: 'Sede Santander de Quilichao',
        created_at: '2026-01-25T07:45:00Z',
        updated_at: '2026-02-20T13:00:00Z',
    },
];

const TrainingCenterShow = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [trainingCenter, setTrainingCenter] = useState(null);
    const [loading, setLoading] = useState(true);

    // Cargar la información del centro de formación
    useEffect(() => {
        const fetchTrainingCenter = async () => {
            try {
                const response = await fetch(`/api/training-centers/${id}`);
                if (!response.ok) throw new Error('API no disponible');

                const data = await response.json();
                setTrainingCenter(data);
            } catch (error) {
                // Busca en los datos ficticios coincidiendo el ID del parámetro
                const found = MOCK_TRAINING_CENTERS.find((item) => item.id === Number(id));
                setTrainingCenter(found || MOCK_TRAINING_CENTERS[0]);
            } finally {
                setLoading(false);
            }
        };

        fetchTrainingCenter();
    }, [id]);

    // Función para formatear fechas (equivalente a Carbon::parse()->format('d/m/Y H:i'))
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

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    if (!trainingCenter) {
        return (
            <div className="container mt-5 text-center">
                <p className="text-muted">No se encontró la información del centro de formación.</p>
                <button onClick={() => navigate(-1)} className="btn btn-secondary">
                    Volver
                </button>
            </div>
        );
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="card shadow-lg border-0 rounded-4">

                <div className="card-header bg-success text-white">
                    <h3 className="mb-0">{trainingCenter.name}</h3>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">ID</label>
                            <div className="form-control bg-light">{trainingCenter.id}</div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Nombre</label>
                            <div className="form-control">{trainingCenter.name}</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Ubicación</label>
                            <div className="form-control">{trainingCenter.location}</div>
                        </div>
                    </div>

                    <hr className="my-4" />

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Fecha de creación</label>
                            <div className="form-control text-muted">
                                {formatDate(trainingCenter.created_at)}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Última actualización</label>
                            <div className="form-control text-muted">
                                {formatDate(trainingCenter.updated_at)}
                            </div>
                        </div>
                    </div>

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

export default TrainingCenterShow;