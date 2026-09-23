import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

// Base de datos ficticia local
const MOCK_APPRENTICES = [
    {
        id: 1,
        name: 'Carlos Mendoza',
        email: 'carlos.mendoza@soy.sena.edu.co',
        cell_number: '3101234567',
        course_id: 1,
        course_number: '2671234',
        computer_id: 1,
        computer_number: 'PC-01'
    },
    {
        id: 2,
        name: 'María Alejandra Gómez',
        email: 'maria.gomez@soy.sena.edu.co',
        cell_number: '3209876543',
        course_id: 1,
        course_number: '2671234',
        computer_id: 2,
        computer_number: 'PC-05'
    },
    {
        id: 3,
        name: 'Juan David Ramírez',
        email: 'juan.ramirez@soy.sena.edu.co',
        cell_number: '3155551234',
        course_id: 2,
        course_number: '2559876',
        computer_id: 4,
        computer_number: 'N/A'
    },
    {
        id: 4,
        name: 'Laura Sofía Torres',
        email: 'laura.torres@soy.sena.edu.co',
        cell_number: '3004448899',
        course_id: 2,
        course_number: '2559876',
        computer_id: 3,
        computer_number: 'PC-12'
    }
];

// Opciones ficticias para los desplegables (<select>)
const MOCK_COURSES = [
    { id: 1, course_number: '2671234' },
    { id: 2, course_number: '2559876' }
];

const MOCK_COMPUTERS = [
    { id: 1, number: 'PC-01' },
    { id: 2, number: 'PC-05' },
    { id: 3, number: 'PC-12' },
    { id: 4, number: 'N/A' }
];

const ApprenticeEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // Estado del formulario
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cell_number: '',
        course_id: '',
        computer_id: '',
    });

    // Estados para datos externos y estado de carga
    const [courses, setCourses] = useState([]);
    const [computers, setComputers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Precargar los datos del aprendiz y las listas desplegables desde datos ficticios
    useEffect(() => {
        const loadMockData = () => {
            setLoading(true);

            // Búsqueda del aprendiz por ID
            const apprenticeFound = MOCK_APPRENTICES.find((a) => a.id === parseInt(id, 10));

            if (apprenticeFound) {
                setFormData({
                    name: apprenticeFound.name,
                    email: apprenticeFound.email,
                    cell_number: apprenticeFound.cell_number,
                    course_id: apprenticeFound.course_id || '',
                    computer_id: apprenticeFound.computer_id || '',
                });
                setCourses(MOCK_COURSES);
                setComputers(MOCK_COMPUTERS);
                setError(null);
            } else {
                setError('El aprendiz solicitado no existe en los datos locales.');
            }

            setLoading(false);
        };

        loadMockData();
    }, [id]);

    // Manejar cambios en las entradas del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Simular el envío de cambios (PUT)
    const handleSubmit = (e) => {
        e.preventDefault();

        const selectedCourse = courses.find((c) => c.id === parseInt(formData.course_id, 10));
        const selectedComputer = computers.find((comp) => comp.id === parseInt(formData.computer_id, 10));

        const updatedApprentice = {
            id: parseInt(id, 10),
            name: formData.name,
            email: formData.email,
            cell_number: formData.cell_number,
            course_id: parseInt(formData.course_id, 10),
            course_number: selectedCourse ? selectedCourse.course_number : '',
            computer_id: parseInt(formData.computer_id, 10),
            computer_number: selectedComputer ? selectedComputer.number : '',
        };

        console.log('Aprendiz actualizado (Mock Result):', updatedApprentice);
        alert(`Aprendiz "${updatedApprentice.name}" actualizado con éxito (Modo Ficticio).`);
        navigate('/Apprentice');
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
                    <Link to="/Apprentice" className="btn btn-secondary">
                        Volver
                    </Link>
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
                            <h4 className="mb-0">Actualizar Aprendiz</h4>
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Ingrese el nombre del aprendiz"
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
                                    <label className="form-label fw-bold">Número de Celular</label>
                                    <input
                                        type="tel"
                                        name="cell_number"
                                        className="form-control"
                                        placeholder="Ingrese el número de celular"
                                        value={formData.cell_number}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="course_id" className="form-label fw-bold">
                                        Curso
                                    </label>
                                    <select
                                        name="course_id"
                                        id="course_id"
                                        className="form-select"
                                        value={formData.course_id}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Seleccione un curso...</option>
                                        {courses.map((course) => (
                                            <option key={course.id} value={course.id}>
                                                {course.course_number}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="computer_id" className="form-label fw-bold">
                                        Computador
                                    </label>
                                    <select
                                        name="computer_id"
                                        id="computer_id"
                                        className="form-select"
                                        value={formData.computer_id}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Seleccione un computador...</option>
                                        {computers.map((computer) => (
                                            <option key={computer.id} value={computer.id}>
                                                {computer.number}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <Link to="/Apprentice" className="btn btn-secondary">
                                        Cancelar
                                    </Link>

                                    <button type="submit" className="btn btn-success">
                                        Actualizar Aprendiz
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

export default ApprenticeEdit;