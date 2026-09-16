import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TrainingCenterCreate = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        location: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (error) setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.location.trim()) {
            setError('Todos los campos son obligatorios.');
            return;
        }

        // Petición POST a tu API (Laravel) o actualización de estado local
        console.log('Nuevo centro de formación enviado:', formData);

        // Redireccionar a la lista de centros tras guardar
        navigate('/trainingcenters');
    };

    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div
                            className="card-header text-white"
                            style={{ backgroundColor: '#25c72f' }}
                        >
                            <h5 className="mb-0 fw-bold">Registrar Centro de Formación</h5>
                        </div>

                        <div className="card-body p-4">
                            {error && (
                                <div className="alert alert-danger py-2" role="alert">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label fw-semibold text-dark">
                                        Nombre del Centro <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Ingrese el nombre del centro"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="location" className="form-label fw-semibold text-dark">
                                        Ubicación <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="location"
                                        name="location"
                                        placeholder="Ingrese la ubicación del centro"
                                        value={formData.location}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <Link to="/TrainingCenter" className="btn btn-outline-secondary">
                                        <i className="bi bi-arrow-left me-1"></i> Cancelar
                                    </Link>

                                    <button type="submit" className="btn btn-success shadow-sm">
                                        <i className="bi bi-check-circle me-1"></i> Guardar Centro
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingCenterCreate;