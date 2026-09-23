import React, { useState } from 'react';

const ProgramEdit = () => {
    // Datos ficticios iniciales del programa a editar
    const [formData, setFormData] = useState({
        name: 'Análisis y Desarrollo de Software',
        description: 'Programa enfocado en el diseño, desarrollo y gestión de soluciones de software web y móvil.',
        type: 'Tecnólogo',
        duration: '24 Meses',
        modality: 'Presencial',
        area_id: '1',
        urlFoto: null,
        currentFoto: 'adso.png', // Simula la imagen cargada previamente
    });

    // Datos ficticios para el listado de áreas
    const areas = [
        { id: '1', name: 'Sistemas y Desarrollo' },
        { id: '2', name: 'Gestión Ambiental' },
        { id: '3', name: 'Recursos Humanos' },
    ];

    // Manejador de cambios para inputs, selects y archivos
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value,
        }));
    };

    // Envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos a enviar:', formData);
        alert('Programa actualizado correctamente (Mock)');
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="card shadow-lg border-0 rounded-5">
                <div className="card-header text-white" style={{ backgroundColor: '#39A900' }}>
                    <h3 className="mb-0">Actualizar Programa</h3>
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        {/* Nombre del Programa */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label fw-bold">
                                Nombre del Programa
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Ingrese el nombre del programa"
                            />
                        </div>

                        {/* Descripción */}
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label fw-bold">
                                Descripción
                            </label>
                            <textarea
                                className="form-control"
                                id="description"
                                name="description"
                                rows="3"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Ingrese la descripción del programa"
                            />
                        </div>

                        {/* Tipo de Programa */}
                        <div className="mb-3">
                            <label htmlFor="type" className="form-label fw-bold">
                                Tipo de Programa
                            </label>
                            <select
                                name="type"
                                id="type"
                                className="form-select"
                                value={formData.type}
                                onChange={handleChange}
                            >
                                <option value="">Seleccione el tipo</option>
                                <option value="Tecnólogo">Tecnólogo</option>
                                <option value="Técnico">Técnico</option>
                                <option value="Especialización Tecnológica">Especialización Tecnológica</option>
                                <option value="Curso Especial">Curso Especial</option>
                            </select>
                        </div>

                        {/* Duración */}
                        <div className="mb-3">
                            <label htmlFor="duration" className="form-label fw-bold">
                                Duración
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="duration"
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                                placeholder="Ingrese la duración"
                            />
                        </div>

                        {/* Modalidad */}
                        <div className="mb-3">
                            <label htmlFor="modality" className="form-label fw-bold">
                                Modalidad
                            </label>
                            <select
                                name="modality"
                                id="modality"
                                className="form-select"
                                value={formData.modality}
                                onChange={handleChange}
                            >
                                <option value="">Seleccione la modalidad</option>
                                <option value="Presencial">Presencial</option>
                                <option value="Virtual">Virtual</option>
                                <option value="Presencial / Virtual">Presencial / Virtual</option>
                            </select>
                        </div>

                        {/* Área */}
                        <div className="mb-3">
                            <label htmlFor="area_id" className="form-label fw-bold">
                                Área
                            </label>
                            <select
                                name="area_id"
                                id="area_id"
                                className="form-select"
                                value={formData.area_id}
                                onChange={handleChange}
                            >
                                <option value="">Seleccione un área</option>
                                {areas.map((area) => (
                                    <option key={area.id} value={area.id}>
                                        {area.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Foto del Programa */}
                        <div className="mb-3">
                            <label className="form-label fw-bold d-block">
                                Foto del Programa
                            </label>

                            <div className="p-3 bg-light rounded border">
                                <div className="row align-items-center">
                                    <div className="col-md-3 text-center mb-3 mb-md-0">
                                        <span className="d-block small text-muted mb-2 fw-semibold">
                                            Imagen actual:
                                        </span>
                                        {formData.currentFoto ? (
                                            <img
                                                src={`/storage/images/${formData.currentFoto}`}
                                                alt="Foto del programa"
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
                                            onChange={handleChange}
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
                                className="btn btn-secondary"
                                onClick={() => window.history.back()}
                            >
                                Volver
                            </button>

                            <button
                                type="submit"
                                className="btn text-white"
                                style={{ backgroundColor: '#143084' }}
                            >
                                Actualizar Programa
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProgramEdit;