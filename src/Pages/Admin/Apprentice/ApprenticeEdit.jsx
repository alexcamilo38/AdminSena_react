import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ApprenticeEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Obtiene el ID del aprendiz desde la URL

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

    // Precargar los datos del aprendiz y las listas desplegables
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [apprenticeRes, coursesRes, computersRes] = await Promise.all([
                    fetch(`/api/apprentices/${id}`),
                    fetch('/api/courses'),
                    fetch('/api/computers'),
                ]);

                const apprenticeData = await apprenticeRes.json();
                const coursesData = await coursesRes.json();
                const computersData = await computersRes.json();

                setFormData({
                    name: apprenticeData.name || '',
                    email: apprenticeData.email || '',
                    cell_number: apprenticeData.cell_number || '',
                    course_id: apprenticeData.course_id || '',
                    computer_id: apprenticeData.computer_id || '',
                });

                setCourses(coursesData);
                setComputers(computersData);
            } catch (error) {
                console.error('Error al cargar la información:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    // Manejar cambios en las entradas del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Enviar los cambios con método PUT
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/apprentices/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Aprendiz actualizado con éxito');
                navigate('/apprentices');
            }
        } catch (error) {
            console.error('Error al actualizar:', error);
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