import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ApprenticeShow = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [apprentice, setApprentice] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApprentice = async () => {
            try {
                const response = await fetch(`/api/apprentices/${id}`);
                const data = await response.json();
                setApprentice(data);
            } catch (error) {
                console.error('Error al obtener la información del aprendiz:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchApprentice();
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

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    if (!apprentice) {
        return (
            <div className="container mt-5 text-center">
                <div className="alert alert-danger" role="alert">
                    No se encontró la información del aprendiz.
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

                <div className="card-header bg-success text-white">
                    <h3 className="mb-0">
                        Aprendiz: {apprentice.name}
                    </h3>
                </div>

                <div className="card-body">

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">ID</label>
                            <div className="form-control bg-light">
                                {apprentice.id}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Nombre Completo</label>
                            <div className="form-control">
                                {apprentice.name}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Correo Electrónico</label>
                            <div className="form-control">
                                {apprentice.email}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Número de Celular</label>
                            <div className="form-control">
                                {apprentice.cell_number}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Número de Curso</label>
                            <div className="form-control">
                                {apprentice.course?.course_number || 'N/A'}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Número de Computador</label>
                            <div className="form-control">
                                {apprentice.computer?.number || 'N/A'}
                            </div>
                        </div>
                    </div>

                    <hr className="my-4" />

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Fecha de registro</label>
                            <div className="form-control text-muted bg-light">
                                {formatDate(apprentice.created_at)}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Última actualización</label>
                            <div className="form-control text-muted bg-light">
                                {formatDate(apprentice.updated_at)}
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

export default ApprenticeShow;