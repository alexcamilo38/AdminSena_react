import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TeacherCreate = () => {
    const navigate = useNavigate();

    // Estado para controlar los campos del formulario
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        area_id: '',
        training_center_id: '',
    });

    // Estados para las select opcionales de la API
    const [areas, setAreas] = useState([]);
    const [trainingCenters, setTrainingCenters] = useState([]);
    const [loading, setLoading] = useState(true);

    // Obtener áreas y centros de formación
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [areasRes, centersRes] = await Promise.all([
                    fetch('/api/areas'),
                    fetch('/api/training-centers'),
                ]);

                const areasData = await areasRes.json();
                const centersData = await centersRes.json();

                setAreas(areasData);
                setTrainingCenters(centersData);
            } catch (error) {
                console.error('Error al cargar datos necesarios:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Manejar cambios en las entradas del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Enviar el formulario a la API
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/teachers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Instructor creado correctamente');
                navigate('/teachers');
            } else {
                const errorData = await response.json();
                console.error('Error al guardar el instructor:', errorData);
            }
        } catch (error) {
            console.error('Error en la petición:', error);
        }
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

    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow border-0 rounded-4">

                        <div className="card-header bg-success text-white">
                            <h4 className="mb-0">Registrar Instructor</h4>
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Ingrese el nombre del instructor"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Ingrese el correo electrónico"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="area_id" className="form-label fw-bold">
                                        Área
                                    </label>
                                    <select
                                        name="area_id"
                                        id="area_id"
                                        className="form-select"
                                        value={formData.area_id}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Seleccione un área</option>
                                        {areas.map((area) => (
                                            <option key={area.id} value={area.id}>
                                                {area.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="training_center_id" className="form-label fw-bold">
                                        Centro de Formación
                                    </label>
                                    <select
                                        name="training_center_id"
                                        id="training_center_id"
                                        className="form-select"
                                        value={formData.training_center_id}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Seleccione un centro de formación</option>
                                        {trainingCenters.map((training) => (
                                            <option key={training.id} value={training.id}>
                                                {training.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <button
                                        type="button"
                                        onClick={() => navigate(-1)}
                                        className="btn btn-secondary"
                                    >
                                        Cancelar
                                    </button>

                                    <button type="submit" className="btn btn-success">
                                        Guardar Instructor
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

export default TeacherCreate;