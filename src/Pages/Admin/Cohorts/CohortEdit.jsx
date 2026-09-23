import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Datos ficticios de Fichas (Cohorts)
const MOCK_COHORTS = [
    {
        id: 1,
        code: '3223899',
        start_date: '2026-04-01',
        end_date: '2027-10-01',
        schedule: 'Diurna (07:00 - 13:00)',
        offer_id: 101,
        offer: { id: 101, shift: 'Mañana' }
    },
    {
        id: 2,
        code: '2891234',
        start_date: '2026-04-15',
        end_date: '2027-11-15',
        schedule: 'Nocturna (18:00 - 22:00)',
        offer_id: 102,
        offer: { id: 102, shift: 'Nocturna' }
    },
    {
        id: 3,
        code: '2955678',
        start_date: '2026-05-01',
        end_date: '2027-12-01',
        schedule: 'Mixta (13:00 - 18:00)',
        offer_id: 103,
        offer: { id: 103, shift: 'Tarde' }
    }
];

// Datos ficticios para el selector de Ofertas
const MOCK_OFFERS = [
    { id: 101, shift: 'Mañana' },
    { id: 102, shift: 'Nocturna' },
    { id: 103, shift: 'Tarde' }
];

const CohortEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // Estados del formulario y banderas de carga
    const [formData, setFormData] = useState({
        code: '',
        start_date: '',
        end_date: '',
        schedule: '',
        offer_id: ''
    });

    const [offers, setOffers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    // Precargar los datos de la ficha según el ID de la URL
    useEffect(() => {
        setIsLoading(true);
        setOffers(MOCK_OFFERS);

        const cohortToEdit = MOCK_COHORTS.find((item) => item.id === parseInt(id, 10));

        if (cohortToEdit) {
            setFormData({
                code: cohortToEdit.code,
                start_date: cohortToEdit.start_date,
                end_date: cohortToEdit.end_date || '',
                schedule: cohortToEdit.schedule,
                offer_id: cohortToEdit.offer_id || cohortToEdit.offer?.id || ''
            });
        } else {
            setError('No se encontró la ficha especificada.');
        }

        setIsLoading(false);
    }, [id]);

    // Captura de cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Envío de actualización
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulación de petición de actualización
        console.log('Ficha actualizada:', { id, ...formData });

        setTimeout(() => {
            setIsSubmitting(false);
            alert('Ficha actualizada con éxito');
            navigate(-1);
        }, 800);
    };

    if (isLoading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Cargando ficha...</span>
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
                            <h4 className="mb-0">Actualizar Ficha</h4>
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

                                {/* Fechas Inicio / Fin (Distribuidas en 2 columnas) */}
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
                                        id="offer_id"
                                        name="offer_id"
                                        className="form-select"
                                        value={formData.offer_id}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Seleccione una oferta...</option>
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
                                        {isSubmitting ? 'Actualizando...' : 'Actualizar Ficha'}
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

export default CohortEdit;