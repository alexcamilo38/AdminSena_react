import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ApprenticeCreate = () => {
    // 1. NAVEGACIÓN PROGRAMÁTICA: Permite redirigir al usuario tras completar el registro
    const navigate = useNavigate();

    // 2. ESTADO UNIFICADO DEL FORMULARIO: Controla todos los campos en un solo objeto reutilizable
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cell_number: '',
        course_id: '',
        computer_id: '',
    });

    // 3. ESTADOS PARA SELECTS: Almacenan la información foránea traída desde las relaciones
    const [courses, setCourses] = useState([]);
    const [computers, setComputers] = useState([]);

    // 4. CICLO DE VIDA (EFECTO INICIAL): Carga de datos necesaria para poblar las listas desplegables
    useEffect(() => {
        // Consulta a la API para traer cursos
        fetch('/api/courses')
            .then((res) => res.json())
            .then((data) => setCourses(data))
            .catch((err) => console.error('Error al cargar cursos:', err));

        // Consulta a la API para traer computadores
        fetch('/api/computers')
            .then((res) => res.json())
            .then((data) => setComputers(data))
            .catch((err) => console.error('Error al cargar computadores:', err));
    }, []); // [] asegura que las peticiones se ejecuten SOLO una vez al renderizar el componente

    // 5. MANEJADOR DINÁMICO DE INPUTS: Lee el 'name' de cualquier control para actualizar 'formData'
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Usa la sintaxis de corchetes [name] para actualizar de forma dinámica la clave del objeto
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // 6. ENVÍO DE DATOS A LA API: Petición asíncrona mediante método POST
    const handleSubmit = async (e) => {
        e.preventDefault(); // Detiene el comportamiento predeterminado del navegador para evitar recargas

        try {
            const response = await fetch('/api/apprentices', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(formData), // Convierte el objeto de React a un string JSON válido
            });

            if (response.ok) {
                alert('Aprendiz registrado exitosamente');
                // Redirección hacia la vista principal utilizando React Router
                navigate('/apprentices');
            }
        } catch (error) {
            console.error('Error en la petición de guardado:', error);
        }
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow border-0 rounded-4">

                        <div className="card-header bg-success text-white">
                            <h4 className="mb-0">Registrar Aprendiz</h4>
                        </div>

                        <div className="card-body">
                            {/* Evento onSubmit vinculado al controlador de React */}
                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Ingrese el nombre del aprendiz"
                                        value={formData.name} // Control de entrada bidireccional (Controlled Component)
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
                                        type="number"
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
                                        <option value="">Seleccione un curso</option>

                                        {/* 7. MAPEO DE OPCIONES: Renderiza dinámicamente las relaciones trayendo su ID */}
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
                                        <option value="">Seleccione un computador</option>

                                        {/* Mapeo dinámico de lista de computadores */}
                                        {computers.map((computer) => (
                                            <option key={computer.id} value={computer.id}>
                                                {computer.number}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="d-flex justify-content-between">
                                    {/* 8. COMPONENTE LINK: Cambia la ruta del navegador manteniendo el estado de SPA */}
                                    <Link to="/Apprentice" className="btn btn-secondary">
                                        Cancelar
                                    </Link>

                                    <button type="submit" className="btn btn-success">
                                        Guardar Aprendiz
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

export default ApprenticeCreate;