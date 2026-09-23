import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProgramCreate = ({ areas = [], onSubmit }) => {
    // Estado para capturar todos los campos, incluyendo el archivo
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        type: '',
        duration: '',
        modality: '',
        area_id: '',
        urlFoto: null,
    });

    // Manejador genérico para texto, select y archivos
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value,
        }));
    };

    // Manejador del envío delegando la lógica al padre
    const handleSubmit = (e) => {
        e.preventDefault();

        // Si se envía una foto, la forma recomendada para manejar multipart/form-data
        const dataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            if (formData[key] !== null) {
                dataToSend.append(key, formData[key]);
            }
        });

        if (onSubmit) {
            onSubmit(dataToSend, formData);
        }
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow border-0 rounded-4">
                        <div className="card-header bg-success text-white">
                            <h4 className="mb-0">Registrar Programa</h4>
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
                                        id="name"
                                        name="name"
                                        className="form-control"
                                        placeholder="Ingrese el nombre del programa"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Descripción */}
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label fw-bold">
                                        Descripción
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        className="form-control"
                                        rows="3"
                                        placeholder="Ingrese la descripción del programa"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
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
                                        required
                                    >
                                        <option value="">Seleccione el tipo</option>
                                        <option value="Tecnólogo">Tecnólogo</option>
                                        <option value="Técnico">Técnico</option>
                                        <option value="Especialización Tecnológica">
                                            Especialización Tecnológica
                                        </option>
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
                                        id="duration"
                                        name="duration"
                                        className="form-control"
                                        placeholder="Ej. 27 Meses"
                                        value={formData.duration}
                                        onChange={handleChange}
                                        required
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
                                        required
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
                                        required
                                    >
                                        <option value="">Seleccione un área</option>
                                        {areas.map((area) => (
                                            <option key={area.id} value={area.id}>
                                                {area.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Adjuntar FOTO */}
                                <div className="mb-3">
                                    <label htmlFor="urlFoto" className="form-label fw-bold">
                                        Adjuntar FOTO
                                    </label>
                                    <input
                                        type="file"
                                        id="urlFoto"
                                        name="urlFoto"
                                        className="form-control"
                                        accept="image/*"
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Botones de acción */}
                                <div className="d-flex justify-content-between">
                                    <Link to="/Program" className="btn btn-secondary">
                                        Cancelar
                                    </Link>

                                    <button type="submit" className="btn btn-success">
                                        Guardar Programa
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

export default ProgramCreate;