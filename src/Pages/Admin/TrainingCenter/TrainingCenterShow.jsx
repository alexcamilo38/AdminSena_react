import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
                const data = await response.json();
                setTrainingCenter(data);
            } catch (error) {
                console.error('Error al obtener los detalles del centro:', error);
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
            <div className="card shadow-lg border-0">

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