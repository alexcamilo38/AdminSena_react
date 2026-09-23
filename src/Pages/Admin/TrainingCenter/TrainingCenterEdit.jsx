import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Datos ficticios exactos de los centros de formación
const MOCK_TRAINING_CENTERS = [
    {
        id: 1,
        name: 'Centro de Comercio y Servicios',
        location: 'Sede Principal - Popayán',
    },
    {
        id: 2,
        name: 'Centro Agropecuario',
        location: 'Sede Norte - Cauca',
    },
    {
        id: 3,
        name: 'Centro de Teleinformática y Producción Industrial',
        location: 'Sede Alto de Cauca',
    },
    {
        id: 4,
        name: 'Centro Nacional de Aprendizaje',
        location: 'Sede Santander de Quilichao',
    },
];

const TrainingCenterEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // Estado para el formulario
    const [formData, setFormData] = useState({
        name: '',
        location: '',
    });

    const [loading, setLoading] = useState(true);

    // Obtener los datos del centro según el ID
    useEffect(() => {
        const fetchTrainingCenter = async () => {
            try {
                const response = await fetch(`/api/training-centers/${id}`);
                if (!response.ok) throw new Error('API no disponible');

                const data = await response.json();
                setFormData({
                    name: data.name || '',
                    location: data.location || '',
                });
            } catch (error) {
                // Carga el centro ficticio que coincida con el ID recibido en la ruta
                const found = MOCK_TRAINING_CENTERS.find((item) => item.id === Number(id)) || MOCK_TRAINING_CENTERS[0];

                setFormData({
                    name: found.name,
                    location: found.location,
                });
            } finally {
                setLoading(false);
            }
        };

        fetchTrainingCenter();
    }, [id]);

    // Manejar cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Enviar formulario mediante petición PUT
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/training-centers/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Centro de formación actualizado con éxito');
                navigate('/training-centers');
            } else {
                throw new Error('Error al actualizar en la API');
            }
        } catch (error) {
            alert('Centro de formación actualizado con éxito (Modo simulación)');
            navigate('/training-centers');
        }
    };

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow border-0 rounded-4">

                        <div className="card-header bg-success text-white">
                            <h4 className="mb-0">Actualizar Centro de Formación</h4>
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Ingrese el nombre del centro"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Ubicación</label>
                                    <input
                                        type="text"
                                        name="location"
                                        className="form-control"
                                        placeholder="Ingrese la ubicación"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="d-flex justify-content-between">
                                    <button
                                        type="button"
                                        onClick={() => navigate(-1)}
                                        className="btn btn-secondary"
                                    >
                                        Cancelar
                                    </button>

                                    <button type="submit" className="btn btn-success">
                                        Actualizar Centro
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

export default TrainingCenterEdit;