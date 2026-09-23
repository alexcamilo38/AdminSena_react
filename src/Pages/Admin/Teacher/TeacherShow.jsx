import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

// Base de datos ficticia local
const MOCK_TEACHERS = [
    {
        id: 1,
        name: 'Roberto Gómez',
        email: 'roberto.gomez@sena.edu.co',
        area_name: 'Sistemas y Desarrollo',
        training_center_name: 'Centro de Comercio y Servicios'
    },
    {
        id: 2,
        name: 'Elena Benítez',
        email: 'elena.benitez@sena.edu.co',
        area_name: 'Gestión Ambiental',
        training_center_name: 'Centro Agropecuario'
    },
    {
        id: 3,
        name: 'Fernando Martínez',
        email: 'f.martinez@sena.edu.co',
        area_name: 'Recursos Humanos',
        training_center_name: 'Centro de Comercio y Servicios'
    },
    {
        id: 4,
        name: 'Claudia López',
        email: 'claudia.lopez@sena.edu.co',
        area_name: 'Redes y Teleinformática',
        training_center_name: 'Centro de Teleinformática'
    }
];

const TeacherShow = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [teacher, setTeacher] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simular la consulta del profesor por ID en la lista ficticia
        const teacherFound = MOCK_TEACHERS.find((t) => t.id === parseInt(id, 10));

        if (teacherFound) {
            setTeacher(teacherFound);
            setError(null);
        } else {
            setError('El profesor solicitado no fue encontrado.');
        }

        setLoading(false);
    }, [id]);

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

                        <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
                            <h4 className="mb-0">Detalle del Profesor</h4>
                            <span className="badge bg-light text-success fw-bold">ID: #{teacher.id}</span>
                        </div>

                        <div className="card-body">
                            <div className="mb-3">
                                <label className="text-muted small fw-bold">Nombre Completo</label>
                                <p className="fs-5 fw-semibold mb-0">{teacher.name}</p>
                            </div>

                            <hr className="my-2" />

                            <div className="mb-3">
                                <label className="text-muted small fw-bold">Correo Electrónico</label>
                                <p className="fs-6 mb-0">{teacher.email}</p>
                            </div>

                            <hr className="my-2" />

                            <div className="mb-3">
                                <label className="text-muted small fw-bold">Área</label>
                                <p className="fs-6 mb-0">{teacher.area_name}</p>
                            </div>

                            <hr className="my-2" />

                            <div className="mb-3">
                                <label className="text-muted small fw-bold">Centro de Formación</label>
                                <p className="fs-6 mb-0">{teacher.training_center_name}</p>
                            </div>

                            <div className="d-flex justify-content-between mt-4">
                                <button
                                    type="button"
                                    onClick={() => navigate(-1)}
                                    className="btn btn-secondary"
                                >
                                    Volver
                                </button>

                                <Link
                                    to={`/teachers/edit/${teacher.id}`}
                                    className="btn btn-warning text-white fw-bold"
                                >
                                    Editar Profesor
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherShow;