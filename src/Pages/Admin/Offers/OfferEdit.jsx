import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Datos ficticios para las Ofertas
const MOCK_OFFERS = [
    {
        id: 1,
        shift: 'Mañana',
        registration_date: '2026-03-20',
        capacity: 30,
        program_id: 1,
        program: { id: 1, name: 'Análisis y Desarrollo de Software' }
    },
    {
        id: 2,
        shift: 'Tarde',
        registration_date: '2026-03-22',
        capacity: 25,
        program_id: 2,
        program: { id: 2, name: 'Conservación de Recursos Naturales' }
    },
    {
        id: 3,
        shift: 'Nocturna',
        registration_date: '2026-03-25',
        capacity: 35,
        program_id: 3,
        program: { id: 3, name: 'Gestión del Talento Humano' }
    }
];

// Datos ficticios para el selector de Programas
const MOCK_PROGRAMS = [
    { id: 1, name: 'Análisis y Desarrollo de Software' },
    { id: 2, name: 'Conservación de Recursos Naturales' },
    { id: 3, name: 'Gestión del Talento Humano' },
    { id: 4, name: 'Gestión de Redes de Datos' }
];

const OfferEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // Estados del formulario y de carga
    const [formData, setFormData] = useState({
        shift: '',
        registration_date: '',
        capacity: '',
        program_id: ''
    });

    const [programs, setPrograms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    // Precargar los datos de la oferta según el ID
    useEffect(() => {
        setIsLoading(true);
        setPrograms(MOCK_PROGRAMS);

        const offerToEdit = MOCK_OFFERS.find((item) => item.id === parseInt(id, 10));

        if (offerToEdit) {
            setFormData({
                shift: offerToEdit.shift,
                registration_date: offerToEdit.registration_date,
                capacity: offerToEdit.capacity,
                program_id: offerToEdit.program_id || offerToEdit.program?.id || ''
            });
        } else {
            setError('No se encontró la oferta especificada.');
        }

        setIsLoading(false);
    }, [id]);

    // Manejar cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Manejar el envío del formulario de actualización
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulación de envío a API (ej. axios.put(`/api/offers/${id}`, formData))
        console.log('Datos actualizados:', { id, ...formData });

        setTimeout(() => {
            setIsSubmitting(false);
            alert('Oferta actualizada con éxito');
            navigate(-1);
        }, 1000);
    };

    if (isLoading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Cargando oferta...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mt-5 text-center">
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                    Volver
                </button>
            </div>
        );
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow border-0 rounded-4">
                        <div className="card-header bg-success text-white">
                            <h4 className="mb-0">Actualizar Oferta</h4>
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>

                                {/* Jornada */}
                                <div className="mb-3">
                                    <label htmlFor="shift" className="form-label fw-bold">
                                        Jornada
                                    </label>
                                    <input
                                        type="text"
                                        id="shift"
                                        name="shift"
                                        className="form-control"
                                        placeholder="Ingrese la jornada (Ej. Mañana, Tarde, Noche)"
                                        value={formData.shift}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Fecha de Inscripción */}
                                <div className="mb-3">
                                    <label htmlFor="registration_date" className="form-label fw-bold">
                                        Fecha de Inscripción
                                    </label>
                                    <input
                                        type="date"
                                        id="registration_date"
                                        name="registration_date"
                                        className="form-control"
                                        value={formData.registration_date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Capacidad / Cupos */}
                                <div className="mb-3">
                                    <label htmlFor="capacity" className="form-label fw-bold">
                                        Capacidad / Cupos
                                    </label>
                                    <input
                                        type="number"
                                        id="capacity"
                                        name="capacity"
                                        className="form-control"
                                        placeholder="Ingrese la cantidad de cupos disponibles"
                                        value={formData.capacity}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Programa de Formación */}
                                <div className="mb-3">
                                    <label htmlFor="program_id" className="form-label fw-bold">
                                        Programa de Formación
                                    </label>
                                    <select
                                        id="program_id"
                                        name="program_id"
                                        className="form-select"
                                        value={formData.program_id}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Seleccione un programa...</option>
                                        {programs.map((prog) => (
                                            <option key={prog.id} value={prog.id}>
                                                {prog.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Botones de Acción */}
                                <div className="d-flex justify-content-between">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => navigate(-1)}
                                    >
                                        Cancelar
                                    </button>

                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Actualizando...' : 'Actualizar Oferta'}
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

export default OfferEdit;