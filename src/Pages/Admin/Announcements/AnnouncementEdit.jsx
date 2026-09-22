import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

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
    const [trainingCenters, setTrainingCenters] = useState([]);

    // Cargar datos iniciales (Anuncio actual y lista de Centros de Formación)
    useEffect(() => {
        // Petición para obtener la lista de centros de formación
        fetch('/api/training-centers')
            .then((res) => res.json())
            .then((data) => setTrainingCenters(data))
            .catch((err) => console.error('Error al cargar centros:', err));

        // Petición para obtener la información del anuncio a editar
        fetch(`/api/announcements/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setFormData({
                    title: data.title || '',
                    content: data.content || '',
                    publish_date: data.publish_date || '',
                    training_center_id: data.training_center_id || '',
                    currentPhotoUrl: data.urlFoto ? `/storage/images/${data.urlFoto}` : ''
                });
            })
            .catch((err) => console.error('Error al cargar el anuncio:', err));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Captura del nuevo archivo de imagen
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    };

    // Envío del formulario de actualización
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('title', formData.title);
        data.append('content', formData.content);
        data.append('publish_date', formData.publish_date);
        data.append('training_center_id', formData.training_center_id);
        data.append('_method', 'PUT'); // Simulación de verbo PUT para Laravel con FormData
        if (photo) data.append('urlFoto', photo);

        try {
            const response = await fetch(`/api/announcements/${id}`, {
                method: 'POST', // Se usa POST junto con _method=PUT para subir archivos
                headers: { Accept: 'application/json' },
                body: data,
            });

            if (response.ok) {
                alert('Anuncio actualizado exitosamente');
                navigate('/announcements');
            }
        } catch (error) {
            console.error('Error al actualizar el anuncio:', error);
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
                            >
                                <option value="">Seleccione un centro de formación</option>

                                {/* Mapeo de centros de formación */}
                                {trainingCenters.map((training_center) => (
                                    <option key={training_center.id} value={training_center.id}>
                                        {training_center.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Muestra la imagen actual y permite subir una nueva */}
                        <div className="mb-3">
                            <label className="form-label fw-bold d-block">
                                Foto del Anuncio
                            </label>

                            <div className="p-3 bg-light rounded border">
                                <div className="row align-items-center">

                                    <div className="col-md-3 text-center mb-3 mb-md-0">
                                        <span className="d-block small text-muted mb-2 fw-semibold">Imagen actual:</span>
                                        {formData.currentPhotoUrl ? (
                                            <img
                                                src={formData.currentPhotoUrl}
                                                alt="Foto del anuncio"
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

                        <div className="d-flex justify-content-between mt-4">
                            <Link to="/announcements" className="btn btn-secondary">
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
