import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

// Datos ficticios exactos
const MOCK_ANNOUNCEMENTS = [
    {
        id: 1,
        title: 'Inscripciones Abiertas 2026',
        content: 'Proceso de inscripción para programas de formación técnica y tecnológica.',
        publish_date: '2026-03-15',
        training_center_id: 1,
        training_center: { id: 1, name: 'Centro de Teleinformática y Producción Industrial' },
        urlFoto: 'https://placehold.co/300x200?text=Inscripciones+2026'
    },
    {
        id: 2,
        title: 'Feria de Emprendimiento',
        content: 'Muestra comercial de proyectos productivos desarrollados por los aprendices.',
        publish_date: '2026-04-10',
        training_center_id: 2,
        training_center: { id: 2, name: 'Centro Agropecuario' },
        urlFoto: 'https://placehold.co/300x200?text=Feria+Emprendimiento'
    },
    {
        id: 3,
        title: 'Mantenimiento de Plataforma',
        content: 'Aviso sobre interrupción programada de los servicios virtuales.',
        publish_date: '2026-05-01',
        training_center_id: 3,
        training_center: { id: 3, name: 'Centro de Comercio y Servicios' },
        urlFoto: ''
    }
];

// Centros de formación derivados de los datos ficticios
const MOCK_TRAINING_CENTERS = [
    { id: 1, name: 'Centro de Teleinformática y Producción Industrial' },
    { id: 2, name: 'Centro Agropecuario' },
    { id: 3, name: 'Centro de Comercio y Servicios' }
];

const AnnouncementEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Estados para controlar los datos del formulario e imagen
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        publish_date: '',
        training_center_id: '',
        currentPhotoUrl: ''
    });
    const [photo, setPhoto] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [trainingCenters, setTrainingCenters] = useState([]);

    useEffect(() => {
        // 1. Cargar lista de centros de formación
        fetch('/api/training-centers')
            .then((res) => res.json())
            .then((data) => setTrainingCenters(data))
            .catch(() => setTrainingCenters(MOCK_TRAINING_CENTERS));

        // 2. Cargar el anuncio específico según el ID de la URL
        fetch(`/api/announcements/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setFormData({
                    title: data.title || '',
                    content: data.content || '',
                    publish_date: data.publish_date || '',
                    training_center_id: data.training_center_id || data.training_center?.id || '',
                    currentPhotoUrl: data.urlFoto
                        ? data.urlFoto.startsWith('http')
                            ? data.urlFoto
                            : `/storage/images/${data.urlFoto}`
                        : ''
                });
            })
            .catch(() => {
                // Carga el anuncio ficticio que coincida con el ID recibido en la ruta (/Announcement/1/edit)
                const found = MOCK_ANNOUNCEMENTS.find((item) => item.id === Number(id)) || MOCK_ANNOUNCEMENTS[0];

                setFormData({
                    title: found.title,
                    content: found.content,
                    publish_date: found.publish_date,
                    training_center_id: found.training_center_id || found.training_center?.id || 1,
                    currentPhotoUrl: found.urlFoto || ''
                });
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Captura de imagen con vista previa
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setPhoto(selectedFile);
            setPreviewUrl(URL.createObjectURL(selectedFile));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('title', formData.title);
        data.append('content', formData.content);
        data.append('publish_date', formData.publish_date);
        data.append('training_center_id', formData.training_center_id);
        data.append('_method', 'PUT');
        if (photo) data.append('urlFoto', photo);

        try {
            const response = await fetch(`/api/announcements/${id}`, {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: data,
            });

            if (response.ok) {
                alert('Anuncio actualizado exitosamente');
                navigate('/Announcement');
            } else {
                throw new Error('Respuesta fallida de la API');
            }
        } catch (error) {
            alert('Anuncio actualizado exitosamente (Modo simulación)');
            navigate('/Announcement');
        }
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="card shadow-lg border-0 rounded-5">

                <div className="card-header text-white" style={{ backgroundColor: '#39A900' }}>
                    <h3 className="mb-0">Actualizar Anuncio</h3>
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">

                        <div className="mb-3">
                            <label htmlFor="title" className="form-label fw-bold">
                                Título del Anuncio
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Ingrese el título del anuncio"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="content" className="form-label fw-bold">
                                Contenido
                            </label>
                            <textarea
                                className="form-control"
                                id="content"
                                name="content"
                                rows="4"
                                value={formData.content}
                                onChange={handleChange}
                                placeholder="Ingrese el contenido del anuncio"
                                required
                            ></textarea>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="publish_date" className="form-label fw-bold">
                                Fecha de Publicación
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="publish_date"
                                name="publish_date"
                                value={formData.publish_date}
                                onChange={handleChange}
                                required
                            />
                        </div>

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
                                {trainingCenters.map((tc) => (
                                    <option key={tc.id} value={tc.id}>
                                        {tc.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Fotografía e Previsualización */}
                        <div className="mb-3">
                            <label className="form-label fw-bold d-block">
                                Foto del Anuncio
                            </label>

                            <div className="p-3 bg-light rounded border">
                                <div className="row align-items-center">

                                    <div className="col-md-4 text-center mb-3 mb-md-0">
                                        <span className="d-block small text-muted mb-2 fw-semibold">
                                            {previewUrl ? 'Nueva vista previa:' : 'Imagen actual:'}
                                        </span>

                                        {previewUrl || formData.currentPhotoUrl ? (
                                            <img
                                                src={previewUrl || formData.currentPhotoUrl}
                                                alt="Foto del anuncio"
                                                className="img-thumbnail rounded shadow-sm"
                                                style={{ maxHeight: '110px', objectFit: 'cover' }}
                                            />
                                        ) : (
                                            <span className="badge bg-secondary p-2">Sin imagen cargada</span>
                                        )}
                                    </div>

                                    <div className="col-md-8">
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
                                            Si no selecciona ningún archivo, se mantendrá la imagen actual.
                                        </small>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between mt-4">
                            <Link to="/Announcement" className="btn btn-secondary">
                                Volver
                            </Link>

                            <button type="submit" className="btn text-white" style={{ backgroundColor: '#143084' }}>
                                Actualizar Anuncio
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default AnnouncementEdit;