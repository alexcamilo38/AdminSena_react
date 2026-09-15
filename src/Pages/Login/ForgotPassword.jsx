import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert('Por favor ingresa tu correo electrónico.');
      return;
    }

    alert('Si el correo está registrado, recibirás instrucciones para recuperar tu contraseña.');
    navigate('/login');
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center py-5"
      style={{ minHeight: '85vh' }}
    >
      <div
        className="card border-0 shadow-lg p-4 p-md-5"
        style={{
          width: '100%',
          maxWidth: '500px',
          borderRadius: '24px',
        }}
      >
        {/* Icono y Encabezado */}
        <div className="text-center mb-4">
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
            style={{
              width: '70px',
              height: '70px',
              backgroundColor: '#e8f5e9',
            }}
          >
            <i
              className="bi bi-key-fill text-success"
              style={{ fontSize: '30px' }}
            ></i>
          </div>

          <h3 className="fw-bold text-dark mb-2">
            ¿Olvidaste tu contraseña?
          </h3>

          <p className="text-muted small mb-0">
            Ingresa tu correo electrónico para recuperar tu contraseña.
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          <div
            className="p-4 mb-3 rounded-3"
            style={{
              background: '#f8f9fa',
              border: '1px solid #edf2f7',
            }}
          >
            <label
              htmlFor="email"
              className="form-label fw-semibold text-secondary small mb-1"
            >
              Correo Electrónico
            </label>

            <input
              type="email"
              id="email"
              className="form-control bg-white"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                borderRadius: '8px',
                fontSize: '0.9rem',
                padding: '0.6rem 0.8rem',
              }}
            />
          </div>

          {/* Botón recuperar */}
          <button
            type="submit"
            className="btn text-white fw-bold py-2 shadow-sm w-100"
            style={{
              backgroundColor: '#39A900',
              border: 'none',
              borderRadius: '10px',
            }}
          >
            <i className="bi bi-envelope me-2"></i>
            Recuperar contraseña
          </button>

          {/* Volver al login */}
          <div className="text-center mt-4">
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="btn btn-link text-decoration-none fw-semibold"
              style={{ color: '#00324d' }}
            >
              <i className="bi bi-arrow-left me-1"></i>
              Volver al inicio de sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;