import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OfferCreate = ({ programs = [] }) => {
    const navigate = useNavigate();

    // Estado local para los campos del formulario
    const [formData, setFormData] = useState({
        shift: '',
        registration_date: '',
        capacity: '',
        program_id: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Manejador genérico para la captura de datos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Ejemplo de envio a API:
            // await axios.post('/api/offers', formData);
            console.log('Datos a enviar:', formData);
            navigate(-1);
        } catch (error) {
            console.error('Error al guardar la oferta:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow border-0 rounded-4">
                        <div className="card-header bg-success text-white">
                            <h4 className="mb-0">Registrar Oferta</h4>
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
                                        name="program_id"
                                        id="program_id"
                                        className="form-select"
                                        value={formData.program_id}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Seleccione un programa de formación</option>
                                        {programs.map((program) => (
                                            <option key={program.id} value={program.id}>
                                                {program.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Botones de acción */}
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
                                        {isSubmitting ? 'Guardando...' : 'Guardar Oferta'}
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

export default OfferCreate;