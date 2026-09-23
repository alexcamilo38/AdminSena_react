import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const CourseShow = () => {
    // Captura el parámetro "id" desde la URL 
    const { id } = useParams();

    // Estado local para almacenar la información del curso seleccionado
    const [course, setCourse] = useState(null);

    // EFECTO: Carga los datos ficticios según el ID de la URL
    useEffect(() => {
        // Listado simulado de cursos con relaciones resueltas
        const mockCourses = [
            {
                id: '1',
                course_number: '2671234',
                day: '2026-09-23',
                training_center_name: 'Centro de Comercio y Servicios',
                cohort_name: 'Ficha 3223899',
                environment_name: 'Ambiente 302 - Sistemas',
                created_at: '2026-01-15T08:30:00',
                updated_at: '2026-09-20T14:45:00'
            },
            {
                id: '2',
                course_number: '2559876',
                day: '2026-09-24',
                training_center_name: 'Centro Agropecuario',
                cohort_name: 'Ficha 2559876',
                environment_name: 'Ambiente 104 - Redes',
                created_at: '2026-02-10T10:15:00',
                updated_at: '2026-08-12T11:20:00'
            },
            {
                id: '3',
                course_number: '2890112',
                day: '2026-09-25',
                training_center_name: 'Centro de Teleinformática',
                cohort_name: 'Ficha 2890112',
                environment_name: 'Sin ambiente',
                created_at: '2026-03-05T09:00:00',
                updated_at: '2026-07-01T16:10:00'
            }
        ];

        // Busca el registro que coincide con el ID recibido
        const foundCourse = mockCourses.find((item) => item.id === id);

        if (foundCourse) {
            setCourse(foundCourse);
        }
    }, [id]);

    // Función helper para formatear fechas tipo YYYY-MM-DD a DD/MM/YYYY
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        return date.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    // Función helper para formatear fechas completas con hora (DD/MM/YYYY HH:mm)
    const formatDateTime = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        return `${date.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })} ${date.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        })}`;
    };

    // Mensaje en caso de que no se encuentre el registro con ese ID
    if (!course) {
        return (
            <div className="container py-5 text-center">
                <div className="alert alert-warning shadow-sm" role="alert">
                    <i className="bi bi-exclamation-triangle me-2"></i>
                    No se encontró el curso especificado.
                </div>
                <Link to="/Courses" className="btn btn-secondary mt-3">
                    <i className="bi bi-arrow-left me-1"></i> Volver a la lista
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <div className="card shadow-lg border-0 rounded-4">
                {/* Cabecera de la Tarjeta */}
                <div className="card-header bg-success text-white p-3">
                    <h4 className="mb-0 fw-bold">
                        Curso #{course.course_number}
                    </h4>
                </div>

                {/* Cuerpo de la Tarjeta */}
                <div className="card-body p-4">
                    {/* Fila 1: ID y Número de Curso */}
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold mb-1 text-dark">ID</label>
                            <div className="form-control bg-light text-secondary">
                                {course.id}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold mb-1 text-dark">Número de Curso</label>
                            <div className="form-control bg-light">
                                {course.course_number}
                            </div>
                        </div>
                    </div>

                    {/* Fila 2: Fecha Programada y Centro de Formación */}
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold mb-1 text-dark">Fecha programada (Día)</label>
                            <div className="form-control bg-light">
                                {formatDate(course.day)}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold mb-1 text-dark">Centro de Formación</label>
                            <div className="form-control bg-light">
                                {course.training_center_name || 'No asignado'}
                            </div>
                        </div>
                    </div>

                    {/* Fila 3: Cohorte / Ficha y Ambiente Formativo */}
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold mb-1 text-dark">Cohorte / Ficha</label>
                            <div className="form-control bg-light">
                                {course.cohort_name || 'No asignada'}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold mb-1 text-dark">Ambiente Formativo</label>
                            <div className="form-control bg-light">
                                {course.environment_name || 'No asignado'}
                            </div>
                        </div>
                    </div>

                    <hr className="my-4" />

                    {/* Fila 4: Timestamps de sistema (Fechas de creación y actualización) */}
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold mb-1 text-dark">Fecha de creación</label>
                            <div className="form-control text-muted bg-light">
                                {formatDateTime(course.created_at)}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold mb-1 text-dark">Última actualización</label>
                            <div className="form-control text-muted bg-light">
                                {formatDateTime(course.updated_at)}
                            </div>
                        </div>
                    </div>

                    {/* Botón de retorno */}
                    <div className="mt-4 text-end">
                        <Link to="/Courses" className="btn btn-secondary px-4 shadow-sm">
                            <i className="bi bi-arrow-left me-1"></i> Volver
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseShow;