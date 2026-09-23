import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Base de datos ficticia local de programas de formación
const MOCK_PROGRAMS = [
    {
        id: 1,
        name: 'Análisis y Desarrollo de Software',
        description: 'Construcción de software web y móvil utilizando tecnologías modernas.',
        type: 'Tecnólogo',
        duration: '24 Meses',
        modality: 'Presencial',
        area_name: 'Sistemas y Desarrollo',
        created_at: '2026-01-10T08:00:00Z',
        updated_at: '2026-03-01T10:30:00Z'
    },
    {
        id: 2,
        name: 'Conservación de Recursos Naturales',
        description: 'Monitoreo y protección de ecosistemas y cuencas hidrográficas.',
        type: 'Técnico',
        duration: '12 Meses',
        modality: 'Presencial',
        area_name: 'Gestión Ambiental',
        created_at: '2026-01-15T09:00:00Z',
        updated_at: '2026-02-20T11:15:00Z'
    },
    {
        id: 3,
        name: 'Gestión del Talento Humano',
        description: 'Administración del capital humano en organizaciones del sector productivo.',
        type: 'Tecnólogo',
        duration: '24 Meses',
        modality: 'Virtual',
        area_name: 'Recursos Humanos',
        created_at: '2026-02-01T14:00:00Z',
        updated_at: '2026-02-01T14:00:00Z'
    }
];

const ProgramShow = () => {
    // Hooks de navegación y parámetros de la URL
    const navigate = useNavigate();
    const { id } = useParams();

    // Estados para la información del programa y la carga
    const [program, setProgram] = useState(null);
    const [loading, setLoading] = useState(true);

    // Efecto para buscar el programa cuando cambie el ID en la URL
    useEffect(() => {
        const fetchProgram = () => {
            setLoading(true);

            // Búsqueda del programa por ID en la lista ficticia
            const foundProgram = MOCK_PROGRAMS.find((p) => p.id === parseInt(id, 10));

            if (foundProgram) {
                setProgram(foundProgram);
            } else {
                setProgram(null);
            }

            setLoading(false);
        };

        fetchProgram();
    }, [id]);

    // Función auxiliar para dar formato a las fechas (DD/MM/YYYY HH:mm)
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleString('es-CO', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });
    };

    // Pantalla de carga mientras se consulta el registro
    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    // Mensaje de error si el programa no existe
    if (!program) {
        return (
            <div className="container mt-5 text-center">
                <div className="alert alert-danger" role="alert">
                    No se encontró la información del programa solicitado.
                </div>
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                    Volver
                </button>
            </div>
        );
    }

    // Renderizado principal con el detalle del programa
    return (
        <div className="container mt-5 mb-5">
            <div className="card shadow-lg border-0">

                {/* Encabezado del Card */}
                <div className="card-header bg-success text-white">
                    <h3 className="mb-0">
                        Programa: {program.name}
                    </h3>
                </div>

                {/* Cuerpo del Card */}
                <div className="card-body">

                    {/* Fila: ID y Nombre */}
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">ID</label>
                            <div className="form-control bg-light">
                                {program.id}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Nombre del Programa</label>
                            <div className="form-control">
                                {program.name}
                            </div>
                        </div>
                    </div>

                    {/* Fila: Descripción */}
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label className="fw-bold">Descripción</label>
                            <div className="form-control" style={{ minHeight: '80px', height: 'auto' }}>
                                {program.description}
                            </div>
                        </div>
                    </div>

                    {/* Fila: Tipo y Duración */}
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Tipo de Programa</label>
                            <div className="form-control">
                                {program.type}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Duración</label>
                            <div className="form-control">
                                {program.duration}
                            </div>
                        </div>
                    </div>

                    {/* Fila: Modalidad y Área */}
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Modalidad</label>
                            <div className="form-control">
                                {program.modality}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Área</label>
                            <div className="form-control">
                                {program.area_name || 'N/A'}
                            </div>
                        </div>
                    </div>

                    <hr className="my-4" />

                    {/* Fila: Fechas de auditoría */}
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Fecha de registro</label>
                            <div className="form-control text-muted bg-light">
                                {formatDate(program.created_at)}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="fw-bold">Última actualización</label>
                            <div className="form-control text-muted bg-light">
                                {formatDate(program.updated_at)}
                            </div>
                        </div>
                    </div>

                    {/* Botón de retorno */}
                    <div className="mt-4 text-end">
                        <button onClick={() => navigate(-1)} className="btn btn-secondary">
                            Volver
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProgramShow;