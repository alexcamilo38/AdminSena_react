import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CohortCreate = ({ offers = [] }) => {
    const navigate = useNavigate();

    // Estado del formulario
    const [formData, setFormData] = useState({
        code: '',
        start_date: '',
        end_date: '',
        schedule: '',
        offer_id: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Manejador para la captura de inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Manejo del envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Envío de datos a la API (Ej. axios.post('/api/cohorts', formData))
            console.log('Datos de la ficha a guardar:', formData);
            navigate(-1);
        } catch (error) {
            console.error('Error al guardar la ficha:', error);
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
                            <h4 className="mb-0">Registrar Ficha</h4>
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>

                                {/* Código de la Ficha */}
                                <div className="mb-3">
                                    <label htmlFor="code" className="form-label fw-bold">
                                        Código de la Ficha
                                    </label>
                                    <input
                                        type="text"
                                        id="code"
                                        name="code"
                                        className="form-control"
                                        placeholder="Ingrese el código o número de la ficha"
                                        value={formData.code}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Fechas Inicio / Fin (Agrupadas en 2 columnas) */}
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="start_date" className="form-label fw-bold">
                                            Fecha de Inicio
                                        </label>
                                        <input
                                            type="date"
                                            id="start_date"
                                            name="start_date"
                                            className="form-control"
                                            value={formData.start_date}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="end_date" className="form-label fw-bold">
                                            Fecha de Fin
                                        </label>
                                        <input
                                            type="date"
                                            id="end_date"
                                            name="end_date"
                                            className="form-control"
                                            value={formData.end_date}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Horario */}
                                <div className="mb-3">
                                    <label htmlFor="schedule" className="form-label fw-bold">
                                        Horario
                                    </label>
                                    <input
                                        type="text"
                                        id="schedule"
                                        name="schedule"
                                        className="form-control"
                                        placeholder="Ingrese el horario (Ej. 07:00 a 13:00)"
                                        value={formData.schedule}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Oferta */}
                                <div className="mb-3">
                                    <label htmlFor="offer_id" className="form-label fw-bold">
                                        Oferta
                                    </label>
                                    <select
                                        name="offer_id"
                                        id="offer_id"
                                        className="form-select"
                                        value={formData.offer_id}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Seleccione una oferta</option>
                                        {offers.map((item) => (
                                            <option key={item.id} value={item.id}>
                                                Oferta #{item.id} - {item.shift}
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
                                        {isSubmitting ? 'Guardando...' : 'Guardar Ficha'}
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

export default CohortCreate;