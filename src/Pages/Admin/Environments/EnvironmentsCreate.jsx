import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EnvironmentsCreate = () => {
    const navigate = useNavigate();

    // Estado para los campos del formulario
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        training_center_id: '',
        urlFoto: null
    });

    // Estados para la carga de datos, errores y envío
    const [trainingCenters, setTrainingCenters] = useState([]);
    const [loadingCenters, setLoadingCenters] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    // Cargar la lista de centros de formación al montar el componente
    useEffect(() => {
        const fetchTrainingCenters = async () => {
            try {
                // Reemplaza esta URL por el endpoint real de tu API
                const response = await fetch('/api/training-centers');
                if (!response.ok) {
                    throw new Error('Error al cargar los centros de formación');
                }
                const data = await response.json();
                setTrainingCenters(data);
            } catch (err) {
                console.error(err);
                // Datos de prueba fallback si falla la API
                setTrainingCenters([
                    { id: 1, name: 'Centro de Teleinformática y Producción Industrial' },
                    { id: 2, name: 'Centro Agropecuario' }
                ]);
            } finally {
                setLoadingCenters(false);
            }
        };

        fetchTrainingCenters();
    }, []);

    // Manejar cambios en campos de texto y select
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Manejar la selección del archivo de foto
    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            urlFoto: e.target.files[0]
        }));
    };

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        // Construir FormData para enviar texto y archivos al backend
        const data = new FormData();
        data.append('name', formData.name);
        data.append('location', formData.location);
        data.append('training_center_id', formData.training_center_id);
        if (formData.urlFoto) {
            data.append('urlFoto', formData.urlFoto);
        }

        try {
            // Reemplaza esta URL por la ruta de tu API (ej. Laravel backend)
            const response = await fetch('/api/environments', {
                method: 'POST',
                body: data,
                // Nota: No incluir 'Content-Type', el navegador lo asigna automáticamente para FormData
            });

            if (!response.ok) {
                throw new Error('Error al registrar el ambiente');
            }

            // Redireccionar al listado de ambientes tras guardar con éxito
            navigate('/environments');
        } catch (err) {
            setError(err.message || 'Ocurrió un error inesperado');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow border-0 rounded-4">

                        {/* Encabezado del Card */}
                        <div className="card-header bg-success text-white">
                            <h4 className="mb-0">Registrar Ambiente</h4>
                        </div>

                        {/* Cuerpo del Card */}
                        <div className="card-body">

                            {/* Alerta de errores */}
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} encType="multipart/form-data">

                                {/* Campo: Nombre del Ambiente */}
                                <div className="mb-3">
                                    <label className="form-label fw-bold">
                                        Nombre del Ambiente
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Ingrese el nombre del ambiente"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Campo: Ubicación */}
                                <div className="mb-3">
                                    <label className="form-label fw-bold">
                                        Ubicación
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        className="form-control"
                                        placeholder="Ingrese la ubicación del ambiente"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Campo: Centro de Formación */}
                                <div className="mb-3">
                                    <label htmlFor="training_center_id" className="form-label fw-bold">
                                        Centro de Formación
                                    </label>
                                    <select
                                        name="training_center_id"
                                        id="training_center_id"
                                        className="form-select"
                                        value={formData.training_center_id}
                                        onChange={handleChange}
                                        required
                                        disabled={loadingCenters}
                                    >
                                        <option value="">
                                            {loadingCenters ? 'Cargando centros...' : 'Seleccione un centro de formación'}
                                        </option>
                                        {trainingCenters.map((center) => (
                                            <option key={center.id} value={center.id}>
                                                {center.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Campo: Adjuntar Foto */}
                                <div className="mb-3">
                                    <label className="form-label fw-bold">
                                        Adjuntar FOTO
                                    </label>
                                    <input
                                        type="file"
                                        name="urlFoto"
                                        className="form-control"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        required
                                    />
                                </div>

                                {/* Botones de acción */}
                                <div className="d-flex justify-content-between">
                                    <button
                                        type="button"
                                        onClick={() => navigate('/environments')}
                                        className="btn btn-secondary"
                                        disabled={submitting}
                                    >
                                        Cancelar
                                    </button>

                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                        disabled={submitting}
                                    >
                                        {submitting ? 'Guardando...' : 'Guardar Ambiente'}
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

export default EnvironmentsCreate;