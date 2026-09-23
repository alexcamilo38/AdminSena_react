import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const CourseEdit = () => {
    // Captura el parámetro "id" desde la ruta definida en React Router (ej. /courses/edit/:id)
    const { id } = useParams();

    // Hook para realizar redirecciones de navegación
    const navigate = useNavigate();

    // Estado local para gestionar los valores de los campos del formulario
    const [formData, setFormData] = useState({
        course_number: '',
        day: '',
        training_center_id: '',
        cohort_id: '',
        environment_id: ''
    });

    // Estado local para manejar y desplegar mensajes de error de validación
    const [error, setError] = useState('');

    // EFECTO: Simula la carga de datos del curso a editar al montar el componente o cambiar de ID
    useEffect(() => {
        // Datos simulados (mock) que representan la base de datos local
        const mockCourses = [
            {
                id: '1',
                course_number: '2671234',
                day: '2026-09-23',
                training_center_id: '1',
                cohort_id: '1',
                environment_id: '1'
            },
            {
                id: '2',
                course_number: '2559876',
                day: '2026-09-24',
                training_center_id: '2',
                cohort_id: '2',
                environment_id: '2'
            },
            {
                id: '3',
                course_number: '2890112',
                day: '2026-09-25',
                training_center_id: '3',
                cohort_id: '3',
                environment_id: '3'
            }
        ];

        // Busca el curso que coincide con el ID recibido en la URL
        const courseToEdit = mockCourses.find((item) => item.id === id);

        // Si existe el curso, actualiza el estado del formulario con sus datos
        if (courseToEdit) {
            setFormData(courseToEdit);
        }
    }, [id]);

    // MANEJOR DE CAMBIOS: Actualiza el estado cuando el usuario interactúa con cualquier input o select
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value // Vincula dinámicamente el name del input con su estado
        });

        // Limpia el mensaje de error tan pronto como el usuario empieza a corregir datos
        if (error) setError('');
    };

    // MANEJADOR DEL ENVÍO: Procesa y valida el formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Previene la recarga por defecto de la página

        // Validación frontend: verifica que ningún campo requerido esté vacío
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

        // TODO: Reemplazar este log por la petición HTTP con Axios/Fetch hacia la API de Laravel
        // ej. await axios.put(`/api/courses/${id}`, formData);
        console.log('Curso actualizado con éxito:', formData);

        // Redirecciona al listado general de cursos tras la actualización exitosa
        navigate('/Courses');
    };

    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-lg border-0 rounded-4">
                        {/* Cabecera de la Tarjeta */}
                        <div
                            className="card-header text-white"
                            style={{ backgroundColor: '#25c72f' }}
                        >
                            <h5 className="mb-0 fw-bold">Actualizar Curso</h5>
                        </div>

                        {/* Cuerpo de la Tarjeta */}
                        <div className="card-body p-4">
                            {/* Alerta de Error: solo se muestra si el estado 'error' contiene un texto */}
                            {error && (
                                <div className="alert alert-danger py-2" role="alert">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                {/* Campo: Número del Curso */}
                                <div className="mb-3">
                                    <label htmlFor="course_number" className="form-label fw-semibold text-dark">
                                        Número del Curso <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="course_number"
                                        name="course_number"
                                        placeholder="Ingrese el número del curso"
                                        value={formData.course_number}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Campo: Fecha */}
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

                                {/* Campo Selector: Centro de Formación */}
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
                                        <option value="1">Centro de Comercio y Servicios</option>
                                        <option value="2">Centro Agropecuario</option>
                                        <option value="3">Centro de Teleinformática</option>
                                    </select>
                                </div>

                                {/* Campo Selector: Cohorte / Ficha */}
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
                                        <option value="1">Ficha 3223899</option>
                                        <option value="2">Ficha 2559876</option>
                                        <option value="3">Ficha 2890112</option>
                                    </select>
                                </div>

                                {/* Campo Selector: Ambiente Formativo */}
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
                                        <option value="1">Ambiente 302 - Sistemas</option>
                                        <option value="2">Ambiente 104 - Redes</option>
                                        <option value="3">Sin ambiente</option>
                                    </select>
                                </div>

                                {/* Botones de Acción */}
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    {/* Botón Cancelar: Regresa a la vista principal sin guardar */}
                                    <Link to="/Courses" className="btn btn-outline-secondary">
                                        <i className="bi bi-arrow-left me-1"></i> Cancelar
                                    </Link>

                                    {/* Botón Guardar: Ejecuta onSubmit del formulario */}
                                    <button type="submit" className="btn btn-success shadow-sm">
                                        <i className="bi bi-check-circle me-1"></i> Actualizar Curso
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

export default CourseEdit;