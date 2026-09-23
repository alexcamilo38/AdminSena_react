import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Datos ficticios para los computadores
const MOCK_COMPUTERS = [
    {
        id: 1,
        number: 'PC-01',
        brand: 'Lenovo ThinkCentre',
        environment_id: 1,
        environment_name: 'Ambiente 302 - Sistemas',
        state: 'activo'
    },
    {
        id: 2,
        number: 'PC-02',
        brand: 'HP EliteDesk',
        environment_id: 1,
        environment_name: 'Ambiente 302 - Sistemas',
        state: 'mantenimiento'
    },
    {
        id: 3,
        number: 'PC-03',
        brand: 'Dell OptiPlex',
        environment_id: 2,
        environment_name: 'Ambiente 104 - Redes',
        state: 'activo'
    },
    {
        id: 4,
        number: 'PC-04',
        brand: 'HP ProDesk',
        environment_id: 3,
        environment_name: 'Ambiente 201 - Electrónica',
        state: 'mantenimiento'
    }
];

// Datos ficticios para los ambientes de formación
const MOCK_ENVIRONMENTS = [
    { id: 1, name: 'Ambiente 302 - Sistemas' },
    { id: 2, name: 'Ambiente 104 - Redes' },
    { id: 3, name: 'Ambiente 201 - Electrónica' }
];

const ComputerEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // Estado local para los campos del formulario
    const [formData, setFormData] = useState({
        number: '',
        brand: '',
        state: 'activo',
        environment_id: '',
    });

    // Estado para cargar la lista de ambientes en el <select>
    const [environments, setEnvironments] = useState([]);
    const [loading, setLoading] = useState(true);

    // Cargar información del computador a editar y los ambientes disponibles
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Intenta obtener los datos desde el servidor API
                const [computerRes, environmentsRes] = await Promise.all([
                    fetch(`/api/computers/${id}`),
                    fetch('/api/environments'),
                ]);

                if (!computerRes.ok || !environmentsRes.ok) {
                    throw new Error('Servidor API no disponible');
                }

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
                console.warn('API no disponible, utilizando datos ficticios (Mock).');

                // Buscar el equipo actual en el arreglo ficticio usando el id recibido por parámetros
                const foundComputer = MOCK_COMPUTERS.find((comp) => comp.id === Number(id)) || MOCK_COMPUTERS[0];

                // Mapear los datos ficticios al formulario
                setFormData({
                    number: foundComputer.number,
                    brand: foundComputer.brand,
                    // Normalizar estado 'Activo'/'En Mantenimiento' a los valores 'activo'/'mantenimiento'
                    state: foundComputer.status?.toLowerCase().includes('mantenimiento') || foundComputer.state === 'mantenimiento'
                        ? 'mantenimiento'
                        : 'activo',
                    environment_id: foundComputer.environment_id || 1,
                });

                // Asignar lista ficticia de ambientes
                setEnvironments(MOCK_ENVIRONMENTS);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    // Manejar el cambio de valores de los inputs y selects
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Enviar formulario (Intenta PUT en API y redirige)
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
            console.warn('Servidor API no disponible para la actualización. Simulando guardado exitoso.');
            alert('Computador actualizado con éxito (Modo Simulación)');
            navigate('/computers');
        }
    };

    // Spinner mientras se cargan los datos
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

                        {/* Encabezado del Formulario */}
                        <div className="card-header bg-success text-white">
                            <h4 className="mb-0">Actualizar Computador</h4>
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>

                                {/* Campo Número del Equipo */}
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Número</label>
                                    <input
                                        type="text"
                                        name="number"
                                        className="form-control"
                                        placeholder="Ej: PC-01"
                                        value={formData.number}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Campo Marca */}
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

                                {/* Seleccionable para Ambiente Formativo */}
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
                                        required
                                    >
                                        <option value="">Seleccione un ambiente...</option>
                                        {environments.map((environment) => (
                                            <option key={environment.id} value={environment.id}>
                                                {environment.name || `Ambiente ${environment.id}`}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Botones de Acción */}
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