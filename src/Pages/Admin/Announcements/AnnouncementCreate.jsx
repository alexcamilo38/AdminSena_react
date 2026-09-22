import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AnnouncementCreate = () => {
    const navigate = useNavigate();

    // Estado para los campos del formulario y el archivo adjunto
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        publish_date: '',
        training_center_id: '',
    });
    const [photo, setPhoto] = useState(null);
    const [trainingCenters, setTrainingCenters] = useState([]);

    // Carga de centros de formación desde el backend
    useEffect(() => {
        fetch('/api/training-centers')
            .then((res) => res.json())
            .then((data) => setTrainingCenters(data))
            .catch((err) => console.error('Error al cargar centros:', err));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Captura del archivo de imagen
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    };

    // Envío de datos mediante FormData
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('title', formData.title);
        data.append('content', formData.content);
        data.append('publish_date', formData.publish_date);
        data.append('training_center_id', formData.training_center_id);
        if (photo) data.append('urlFoto', photo);

        try {
            const response = await fetch('/api/announcements', {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: data,
            });

            if (response.ok) {
                alert('Anuncio guardado exitosamente');
                // Redirección con react-router-dom
                navigate('/announcements');
            }
        } catch (error) {
            console.error('Error en la petición:', error);
        }
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6">

                    <div className="card shadow border-0 rounded-4">
                        <div className="card-header bg-success text-white">
                            <h4 className="mb-0">Registrar Anuncio</h4>
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit} encType="multipart/form-data">

                                <div className="mb-3">
                                    <label className="form-label fw-bold">
                                        Título del Anuncio
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control"
                                        placeholder="Ingrese el título del anuncio"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">
                                        Contenido
                                    </label>
                                    <textarea
                                        name="content"
                                        className="form-control"
                                        rows="4"
                                        placeholder="Ingrese el contenido del anuncio"
                                        value={formData.content}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">
                                        Fecha de Publicación
                                    </label>
                                    <input
                                        type="date"
                                        name="publish_date"
                                        className="form-control"
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

                                        {/* Mapeo dinámico de los centros de formación */}
                                        {trainingCenters.map((training_center) => (
                                            <option key={training_center.id} value={training_center.id}>
                                                {training_center.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

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

                                <div className="d-flex justify-content-between">
                                    {/* Navegación mediante Link de react-router-dom */}
                                    <Link to="/Announcement" className="btn btn-secondary">
                                        Cancelar
                                    </Link>

                                    <button type="submit" className="btn btn-success">
                                        Guardar Anuncio
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

export default AnnouncementCreate;