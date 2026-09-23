import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Datos ficticios para los Centros de Formación
const MOCK_TRAINING_CENTERS = [
    { id: 1, name: 'Centro de Teleinformática y Producción Industrial' },
    { id: 2, name: 'Centro Agropecuario' }
];

// Datos ficticios para los Ambientes de Aprendizaje
const MOCK_ENVIRONMENTS = [
    {
        id: 1,
        name: 'Ambiente de Software 1',
        location: 'Bloque A - Piso 2',
        training_center_id: 1,
        training_center: { name: 'Centro de Teleinformática y Producción Industrial' },
        urlFoto: 'ambiente_software_1.jpg'
    },
    {
        id: 2,
        name: 'Laboratorio de Redes',
        location: 'Bloque B - Piso 1',
        training_center_id: 2,
        training_center: { name: 'Centro Agropecuario' },
        urlFoto: 'laboratorio_redes.jpg'
    },
    {
        id: 3,
        name: 'Taller de Electrónica',
        location: 'Bloque C - Piso 1',
        training_center_id: 1,
        training_center: { name: 'Centro de Teleinformática y Producción Industrial' },
        urlFoto: null
    }
];

const EnvironmentsEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Obtiene el ID del ambiente de la URL

    // Estado del formulario
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        training_center_id: '',
        urlFoto: null
    });

    // Estado para gestionar la imagen actual guardada y la previsualización de la nueva
    const [currentImage, setCurrentImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    // Estados de carga y error
    const [trainingCenters, setTrainingCenters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    // Cargar datos al montar el componente
    useEffect(() => {
        const loadData = () => {
            setLoading(true);

            // Cargar centros de formación ficticios
            setTrainingCenters(MOCK_TRAINING_CENTERS);

            // Buscar el ambiente correspondiente por ID
            const foundEnvironment = MOCK_ENVIRONMENTS.find((e) => e.id === parseInt(id, 10));

            if (foundEnvironment) {
                setFormData({
                    name: foundEnvironment.name,
                    location: foundEnvironment.location,
                    training_center_id: foundEnvironment.training_center_id,
                    urlFoto: null
                });
                setCurrentImage(foundEnvironment.urlFoto);
            } else {
                setError('No se encontró el ambiente solicitado.');
            }

            setLoading(false);
        };

        loadData();
    }, [id]);

    // Manejar cambios en campos de texto y select
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Manejar la selección y previsualización de la nueva imagen
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({
                ...prev,
                urlFoto: file
            }));
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    // Manejar el envío del formulario de actualización
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        // Crear FormData para simular la petición de actualización (incluyendo soporte multipart)
        const data = new FormData();
        data.append('_method', 'PUT'); // Simula la directiva @method('PUT') de Blade
        data.append('name', formData.name);
        data.append('location', formData.location);
        data.append('training_center_id', formData.training_center_id);

        if (formData.urlFoto) {
            data.append('urlFoto', formData.urlFoto);
        }

        try {
            // Ejemplo de llamada API real en Laravel:
            // await fetch(`/api/environments/${id}`, { method: 'POST', body: data });

            // Simulación de éxito
            console.log('Ambiente actualizado con éxito', {
                id,
                name: formData.name,
                location: formData.location,
                training_center_id: formData.training_center_id,
                urlFoto: formData.urlFoto ? formData.urlFoto.name : 'Imagen previa conservada'
            });

            navigate('/environments');
        } catch (err) {
            setError('Error al actualizar el ambiente.');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Cargando datos...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="card shadow-lg border-0 rounded-5">

                {/* Encabezado con color institucional del SENA (#39A900) */}
                <div className="card-header text-white" style={{ backgroundColor: '#39A900' }}>
                    <h3 className="mb-0">Actualizar Ambiente</h3>
                </div>

                <div className="card-body">

                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} encType="multipart/form-data">

                        {/* Campo: Nombre del Ambiente */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label fw-bold">
                                Nombre del Ambiente
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Ingrese el nombre del ambiente"
                                required
                            />
                        </div>

                        {/* Campo: Ubicación */}
                        <div className="mb-3">
                            <label htmlFor="location" className="form-label fw-bold">
                                Ubicación
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="Ingrese la ubicación del ambiente"
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
                            >
                                <option value="">Seleccione un centro de formación</option>
                                {trainingCenters.map((center) => (
                                    <option key={center.id} value={center.id}>
                                        {center.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Muestra la imagen actual y permite subir una nueva */}
                        <div className="mb-3">
                            <label className="form-label fw-bold d-block">
                                Foto del Ambiente
                            </label>

                            <div className="p-3 bg-light rounded border">
                                <div className="row align-items-center">

                                    <div className="col-md-3 text-center mb-3 mb-md-0">
                                        <span className="d-block small text-muted mb-2 fw-semibold">
                                            {previewImage ? 'Previsualización:' : 'Imagen actual:'}
                                        </span>

                                        {previewImage ? (
                                            <img
                                                src={previewImage}
                                                alt="Nueva previsualización"
                                                className="img-thumbnail rounded shadow-sm"
                                                style={{ maxHeight: '110px', objectFit: 'cover' }}
                                            />
                                        ) : currentImage ? (
                                            <img
                                                src={`/storage/images/${currentImage}`}
                                                alt="Foto del ambiente"
                                                className="img-thumbnail rounded shadow-sm"
                                                style={{ maxHeight: '110px', objectFit: 'cover' }}
                                            />
                                        ) : (
                                            <span className="badge bg-secondary">Sin imagen cargada</span>
                                        )}
                                    </div>

                                    <div className="col-md-9">
                                        <label htmlFor="urlFoto" className="form-label fw-bold text-secondary small">
                                            Cambiar Imagen (opcional)
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="urlFoto"
                                            name="urlFoto"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                        />
                                        <small className="text-muted d-block mt-1">
                                            Si no selecciona ningún archivo, se mantendrá la imagen que está guardada actualmente.
                                        </small>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Botones de acción */}
                        <div className="d-flex justify-content-between mt-4">
                            <button
                                type="button"
                                onClick={() => navigate(-1)}
                                className="btn btn-secondary"
                                disabled={submitting}
                            >
                                Volver
                            </button>

                            <button
                                type="submit"
                                className="btn text-white"
                                style={{ backgroundColor: '#143084' }}
                                disabled={submitting}
                            >
                                {submitting ? 'Actualizando...' : 'Actualizar Ambiente'}
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default EnvironmentsEdit;