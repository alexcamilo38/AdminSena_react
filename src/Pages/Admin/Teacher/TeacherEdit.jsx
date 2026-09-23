import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Base de datos de prueba local
const MOCK_TEACHERS = [
    {
        id: 1,
        name: 'Roberto Gómez',
        email: 'roberto.gomez@sena.edu.co',
        area_id: 1,
        area_name: 'Sistemas y Desarrollo',
        training_center_id: 1,
        training_center_name: 'Centro de Comercio y Servicios'
    },
    {
        id: 2,
        name: 'Elena Benítez',
        email: 'elena.benitez@sena.edu.co',
        area_id: 2,
        area_name: 'Gestión Ambiental',
        training_center_id: 2,
        training_center_name: 'Centro Agropecuario'
    },
    {
        id: 3,
        name: 'Fernando Martínez',
        email: 'f.martinez@sena.edu.co',
        area_id: 3,
        area_name: 'Recursos Humanos',
        training_center_id: 1,
        training_center_name: 'Centro de Comercio y Servicios'
    },
    {
        id: 4,
        name: 'Claudia López',
        email: 'claudia.lopez@sena.edu.co',
        area_id: 4,
        area_name: 'Redes y Teleinformática',
        training_center_id: 3,
        training_center_name: 'Centro de Teleinformática'
    }
];

// Opciones ficticias para los desplegables (<select>)
const MOCK_AREAS = [
    { id: 1, name: 'Sistemas y Desarrollo' },
    { id: 2, name: 'Gestión Ambiental' },
    { id: 3, name: 'Recursos Humanos' },
    { id: 4, name: 'Redes y Teleinformática' }
];

const MOCK_TRAINING_CENTERS = [
    { id: 1, name: 'Centro de Comercio y Servicios' },
    { id: 2, name: 'Centro Agropecuario' },
    { id: 3, name: 'Centro de Teleinformática' }
];

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
    const [error, setError] = useState(null);

    // Cargar los datos ficticios correspondientes al ID recibido por parámetro
    useEffect(() => {
        const loadMockData = () => {
            setLoading(true);

            // Simular búsqueda del profesor por ID
            const teacherFound = MOCK_TEACHERS.find((t) => t.id === parseInt(id, 10));

            if (teacherFound) {
                setFormData({
                    name: teacherFound.name,
                    email: teacherFound.email,
                    area_id: teacherFound.area_id || '',
                    training_center_id: teacherFound.training_center_id || '',
                });
                setAreas(MOCK_AREAS);
                setTrainingCenters(MOCK_TRAINING_CENTERS);
                setError(null);
            } else {
                setError('El profesor solicitado no existe en los datos locales.');
            }

            setLoading(false);
        };

        loadMockData();
    }, [id]);

    // Manejar cambios en los inputs del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Simular el envío del formulario (PUT)
    const handleSubmit = (e) => {
        e.preventDefault();

        // Obtener nombres descriptivos a partir de los IDs seleccionados
        const selectedArea = areas.find((a) => a.id === parseInt(formData.area_id, 10));
        const selectedCenter = trainingCenters.find((c) => c.id === parseInt(formData.training_center_id, 10));

        const updatedTeacher = {
            id: parseInt(id, 10),
            name: formData.name,
            email: formData.email,
            area_id: parseInt(formData.area_id, 10),
            area_name: selectedArea ? selectedArea.name : '',
            training_center_id: parseInt(formData.training_center_id, 10),
            training_center_name: selectedCenter ? selectedCenter.name : '',
        };

        console.log('Profesor actualizado (Mock Result):', updatedTeacher);
        alert(`Profesor "${updatedTeacher.name}" actualizado con éxito (Modo Ficticio).`);
        navigate('/teachers');
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

    if (error) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger text-center" role="alert">
                    {error}
                </div>
                <div className="text-center">
                    <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                        Volver
                    </button>
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