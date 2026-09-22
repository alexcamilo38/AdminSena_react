import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ComputerEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // Estado del formulario
    const [formData, setFormData] = useState({
        number: '',
        brand: '',
        state: 'activo',
        environment_id: '',
    });

    // Estado para la lista de ambientes y control de carga
    const [environments, setEnvironments] = useState([]);
    const [loading, setLoading] = useState(true);

    // Cargar los datos del equipo y los ambientes
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [computerRes, environmentsRes] = await Promise.all([
                    fetch(`/api/computers/${id}`),
                    fetch('/api/environments'),
                ]);

                const computerData = await computerRes.json();
                const environmentsData = await environmentsRes.json();

                setFormData({
                    number: computerData.number || '',
                    brand: computerData.brand || '',
                    state: computerData.state || 'activo',
                    environment_id: computerData.environment_id || '',
                });

                setEnvironments(environmentsData);
            } catch (error) {
                console.error('Error al cargar la información:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    // Manejar cambios en las entradas del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Enviar los datos actualizados mediante PUT
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/computers/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Computador actualizado con éxito');
                navigate('/computers');
            } else {
                const errorData = await response.json();
                console.error('Error de validación:', errorData);
            }
        } catch (error) {
            console.error('Error al actualizar el equipo:', error);
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
                            <h4 className="mb-0">Actualizar Computador</h4>
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Número</label>
                                    <input
                                        type="number"
                                        name="number"
                                        className="form-control"
                                        placeholder="Ingrese el número del computador"
                                        value={formData.number}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Marca</label>
                                    <input
                                        type="text"
                                        name="brand"
                                        className="form-control"
                                        placeholder="Ingrese la marca"
                                        value={formData.brand}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Campo de Estado */}
                                <div className="mb-3">
                                    <label htmlFor="state" className="form-label fw-bold">
                                        Estado del Equipo
                                    </label>
                                    <select
                                        name="state"
                                        id="state"
                                        className="form-select"
                                        value={formData.state}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="activo">🟢 Activo</option>
                                        <option value="mantenimiento">🟡 En Mantenimiento</option>
                                    </select>
                                </div>

                                {/* Ambiente Formativo */}
                                <div className="mb-3">
                                    <label htmlFor="environment_id" className="form-label fw-bold">
                                        Ambiente de Formación
                                    </label>
                                    <select
                                        name="environment_id"
                                        id="environment_id"
                                        className="form-select"
                                        value={formData.environment_id}
                                        onChange={handleChange}
                                    >
                                        <option value="">Seleccione un ambiente...</option>
                                        {environments.map((environment) => (
                                            <option key={environment.id} value={environment.id}>
                                                Ambiente {environment.name || environment.id}
                                            </option>
                                        ))}
                                    </select>
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
                                        Actualizar Computador
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

export default ComputerEdit;