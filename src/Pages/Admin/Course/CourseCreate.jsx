import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CourseCreate = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        course_number: '',
        day: '',
        training_center_id: '',
        cohort_id: '',
        environment_id: ''
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

        // Validación básica de campos requeridos
        if (
            !formData.course_number ||
            !formData.day ||
            !formData.training_center_id ||
            !formData.cohort_id ||
            !formData.environment_id
        ) {
            setError('Todos los campos marcados con (*) son obligatorios.');
            return;
        }

        // Petición POST a la API (Laravel) o actualización de estado
        console.log('Nuevo curso enviado:', formData);

        // Redireccionar a la lista de cursos tras guardar
        navigate('/Course');
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
                            <h5 className="mb-0 fw-bold">Registrar Nuevo Curso</h5>
                        </div>

                        <div className="card-body p-4">
                            {error && (
                                <div className="alert alert-danger py-2" role="alert">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="course_number" className="form-label fw-semibold text-dark">
                                        Número de Curso <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="course_number"
                                        name="course_number"
                                        placeholder="Ej. 101"
                                        value={formData.course_number}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="day" className="form-label fw-semibold text-dark">
                                        Fecha <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="day"
                                        name="day"
                                        value={formData.day}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="training_center_id" className="form-label fw-semibold text-dark">
                                        Centro de Formación <span className="text-danger">*</span>
                                    </label>
                                    <select
                                        className="form-select"
                                        id="training_center_id"
                                        name="training_center_id"
                                        value={formData.training_center_id}
                                        onChange={handleChange}
                                    >
                                        <option value="">Seleccione un centro...</option>
                                        {/* Opciones pobladas desde el backend */}
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="cohort_id" className="form-label fw-semibold text-dark">
                                        Cohorte / Ficha <span className="text-danger">*</span>
                                    </label>
                                    <select
                                        className="form-select"
                                        id="cohort_id"
                                        name="cohort_id"
                                        value={formData.cohort_id}
                                        onChange={handleChange}
                                    >
                                        <option value="">Seleccione una cohorte...</option>
                                        {/* Opciones pobladas desde el backend */}
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="environment_id" className="form-label fw-semibold text-dark">
                                        Ambiente Formativo <span className="text-danger">*</span>
                                    </label>
                                    <select
                                        className="form-select"
                                        id="environment_id"
                                        name="environment_id"
                                        value={formData.environment_id}
                                        onChange={handleChange}
                                    >
                                        <option value="">Seleccione un ambiente...</option>
                                        {/* Opciones pobladas desde el backend */}
                                    </select>
                                </div>

                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <Link to="/Courses" className="btn btn-outline-secondary">
                                        <i className="bi bi-arrow-left me-1"></i> Cancelar
                                    </Link>

                                    <button type="submit" className="btn btn-success shadow-sm">
                                        <i className="bi bi-check-circle me-1"></i> Guardar Curso
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

export default CourseCreate;