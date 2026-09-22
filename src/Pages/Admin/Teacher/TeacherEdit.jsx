import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TeacherEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // Estado del formulario
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        area_id: '',
        training_center_id: '',
    });

    // Estados para las listas dinámicas y control de carga
    const [areas, setAreas] = useState([]);
    const [trainingCenters, setTrainingCenters] = useState([]);
    const [loading, setLoading] = useState(true);

    // Cargar datos del profesor, áreas y centros de formación
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [teacherRes, areasRes, centersRes] = await Promise.all([
                    fetch(`/api/teachers/${id}`),
                    fetch('/api/areas'),
                    fetch('/api/training-centers'),
                ]);

                const teacherData = await teacherRes.json();
                const areasData = await areasRes.json();
                const centersData = await centersRes.json();

                setFormData({
                    name: teacherData.name || '',
                    email: teacherData.email || '',
                    area_id: teacherData.area_id || '',
                    training_center_id: teacherData.training_center_id || '',
                });

                setAreas(areasData);
                setTrainingCenters(centersData);
            } catch (error) {
                console.error('Error al obtener la información:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    // Manejar cambios en las entradas del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Enviar los datos actualizados mediante PUT
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/teachers/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Profesor actualizado con éxito');
                navigate('/teachers');
            } else {
                const errorData = await response.json();
                console.error('Error de validación:', errorData);
            }
        } catch (error) {
            console.error('Error al actualizar el profesor:', error);
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
                            <h4 className="mb-0">Actualizar Profesor</h4>
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Ingrese el nombre del profesor"
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
                                    <label className="form-label fw-bold">Área</label>
                                    <select
                                        name="area_id"
                                        className="form-select"
                                        value={formData.area_id}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Seleccione un área...</option>
                                        {areas.map((area) => (
                                            <option key={area.id} value={area.id}>
                                                {area.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Centro de Formación</label>
                                    <select
                                        name="training_center_id"
                                        className="form-select"
                                        value={formData.training_center_id}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Seleccione un centro...</option>
                                        {trainingCenters.map((center) => (
                                            <option key={center.id} value={center.id}>
                                                {center.name}
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
                                        Actualizar Profesor
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

export default TeacherEdit;