import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AreaEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ name: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    // Cargar el área correspondiente desde localStorage
    useEffect(() => {
        const storedAreas = JSON.parse(localStorage.getItem('areas')) || [
            { id: '1', name: 'Sistemas y Desarrollo' },
            { id: '2', name: 'Gestión Humana' }
        ];

        const areaToEdit = storedAreas.find((area) => String(area.id) === String(id));

        if (areaToEdit) {
            setFormData({ name: areaToEdit.name });
        } else {
            setError('El área solicitada no existe.');
        }

        setLoading(false);
    }, [id]);

    // Permitir la edición del input en tiempo real
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
        if (error) setError('');
    };

    // Guardar los cambios actualizados en localStorage
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            setError('El nombre del área es obligatorio.');
            return;
        }

        const storedAreas = JSON.parse(localStorage.getItem('areas')) || [];
        const updatedAreas = storedAreas.map((area) =>
            String(area.id) === String(id) ? { ...area, name: formData.name } : area
        );

        localStorage.setItem('areas', JSON.stringify(updatedAreas));

        // Redireccionar a la lista
        navigate('/areas');
    };

    if (loading) {
        return (
            <div className="container py-5 text-center">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div
                            className="card-header text-white"
                            style={{ backgroundColor: '#25c72f' }}
                        >
                            <h5 className="mb-0 fw-bold">Editar Área #{id}</h5>
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
                                        Nombre del Área <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Ej. Sistemas y Desarrollo"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <Link to="/areas" className="btn btn-outline-secondary">
                                        <i className="bi bi-arrow-left me-1"></i> Cancelar
                                    </Link>

                                    <button type="submit" className="btn btn-warning text-white shadow-sm fw-semibold">
                                        <i className="bi bi-pencil-square me-1"></i> Actualizar Área
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

export default AreaEdit;