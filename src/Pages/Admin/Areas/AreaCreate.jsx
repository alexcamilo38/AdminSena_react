import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AreaCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError('El nombre del área es obligatorio.');
      return;
    }

    // Petición POST a tu API (Laravel) o actualización de estado local
    console.log('Nueva área enviada:', formData);

    // Redireccionar a la lista de áreas tras guardar
    navigate('/areas');
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div
              className="card-header text-white"
              style={{ backgroundColor: '#25c72f' }}
            >
              <h5 className="mb-0 fw-bold">Registrar Nueva Área</h5>
            </div>

            <div className="card-body p-4">
              {error && (
                <div className="alert alert-danger py-2" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold text-dark">
                    Nombre del Área <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Ej. Sistemas y Desarrollo"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center mt-4">
                  <Link to="/areas" className="btn btn-outline-secondary">
                    <i className="bi bi-arrow-left me-1"></i> Cancelar
                  </Link>

                  <button type="submit" className="btn btn-success shadow-sm">
                    <i className="bi bi-check-circle me-1"></i> Guardar Área
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

export default AreaCreate;