import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ComputerCreate = () => {
  const navigate = useNavigate();

  // Estado inicial del formulario
  const [formData, setFormData] = useState({
    number: '',
    brand: '',
    state: 'activo',
    environment_id: '',
  });

  // Estado para cargar la lista de ambientes
  const [environments, setEnvironments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar ambientes formativos desde la API
  useEffect(() => {
    const fetchEnvironments = async () => {
      try {
        const response = await fetch('/api/environments');
        const data = await response.json();
        setEnvironments(data);
      } catch (error) {
        console.error('Error al cargar los ambientes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnvironments();
  }, []);

  // Manejar cambios en las entradas del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Guardar el computador
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/computers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Computador registrado con éxito');
        navigate('/computers');
      } else {
        const errorData = await response.json();
        console.error('Error de validación:', errorData);
      }
    } catch (error) {
      console.error('Error al guardar el equipo:', error);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow border-0 rounded-4">

            <div className="card-header bg-success text-white">
              <h4 className="mb-0">Registrar Equipo</h4>
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
                    placeholder="Ingrese la marca del computador"
                    value={formData.brand}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Estado del Equipo */}
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
                    Ambiente Formativo
                  </label>
                  <select
                    name="environment_id"
                    id="environment_id"
                    className="form-select"
                    value={formData.environment_id}
                    onChange={handleChange}
                    disabled={loading}
                  >
                    <option value="">
                      {loading ? 'Cargando ambientes...' : 'Seleccione un ambiente...'}
                    </option>
                    {environments.map((environment) => (
                      <option key={environment.id} value={environment.id}>
                        Ambiente {environment.name || environment.id}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="d-flex justify-content-between">
                  <Link to="/Computer" className="btn btn-secondary">
                    Cancelar
                  </Link>
                  <button type="submit" className="btn btn-success">
                    Guardar Computador
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

export default ComputerCreate;
