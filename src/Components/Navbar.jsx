import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('/admin')) {
      localStorage.setItem('isLoggedIn', 'true');
    }
    const status = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(status);
  }, [location.pathname]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setUserDropdownOpen(false);
    navigate('/login');
  };

  return (
    <nav className="sena-navbar">
      <div className="sena-container">
        
        {/* Lado Izquierdo */}
        <div className="sena-left-section">
          <Link to="/" className="sena-brand">
            <div className="sena-logo-box">
              <img
                src="https://pautonoticias.com/sites/default/files/Article/sena-colombia-logo-green39a900png-20250120.png"
                alt="Logo SENA"
                className="sena-logo-img"
              />
            </div>
            <span className="sena-brand-text">Admin SENA</span>
          </Link>

          <Link to="/about" className="sena-link">
            Quiénes Somos
          </Link>

          <div className="sena-dropdown-container">
            <button
              type="button"
              className="sena-dropdown-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Administración ▼
            </button>
            {dropdownOpen && (
              <ul className="sena-dropdown-menu">
                <li><Link to="/areas/list" onClick={() => setDropdownOpen(false)}>📁 Lista Áreas</Link></li>
                <li><Link to="/trainingcenter/list" onClick={() => setDropdownOpen(false)}>🏢 Lista Centros</Link></li>
                <li><Link to="/computer/list" onClick={() => setDropdownOpen(false)}>💻 Lista Computadores</Link></li>
                <li><Link to="/course/list" onClick={() => setDropdownOpen(false)}>📚 Lista Cursos</Link></li>
                <li><Link to="/teacher/list" onClick={() => setDropdownOpen(false)}>👨‍🏫 Lista Instructores</Link></li>
                <li><Link to="/apprentice/list" onClick={() => setDropdownOpen(false)}>👨‍🎓 Lista Aprendices</Link></li>
              </ul>
            )}
          </div>
        </div>

        {/* Lado Derecho */}
        <div className="sena-right-section">
          <form className="sena-search-form" onSubmit={(e) => e.preventDefault()}>
            <span className="sena-search-icon">🔍</span>
            <input
              type="search"
              placeholder="Buscar..."
              className="sena-search-input"
            />
            <button type="submit" className="sena-search-btn">
              Buscar
            </button>
          </form>

          {isLoggedIn ? (
            <div className="sena-dropdown-container">
              <button
                type="button"
                className="sena-user-btn"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              >
                <div className="sena-avatar-circle">👤</div>
                <span className="sena-user-name">Administrador</span>
              </button>
              {userDropdownOpen && (
                <ul className="sena-dropdown-menu sena-dropdown-right">
                  <li className="sena-dropdown-header">admin@sena.edu.co</li>
                  <li className="sena-divider"></li>
                  <li><Link to="/profile" onClick={() => setUserDropdownOpen(false)}>👤 Mi Perfil</Link></li>
                  <li>
                    <button className="sena-danger-btn" onClick={handleLogout}>
                      ➔ Cerrar Sesión
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link to="/login" className="sena-btn-login">
              Iniciar Sesión
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
}