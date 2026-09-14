import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [userSession, setUserSession] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    const session = JSON.parse(localStorage.getItem("user_session"));
    const role =
      localStorage.getItem("user_role") ||
      (session ? session.role : null);

    setUserSession(session);
    setUserRole(role);
  };

  const logout = () => {
    localStorage.removeItem("user_session");
    localStorage.removeItem("user_role");
    localStorage.removeItem("isLoggedIn");

    setUserSession(null);
    setUserRole(null);

    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow"
      style={{ backgroundColor: "#25c72f" }}
    >
      <div className="container-fluid px-4">

        {/* LOGO Y NOMBRE */}
        <div className="navbar-brand d-flex align-items-center">

          <Link to="/" className="me-2 text-decoration-none">
            <span className="bg-white rounded p-1 d-inline-flex align-items-center justify-content-center">
              <img
                src="https://pautonoticias.com/sites/default/files/Article/sena-colombia-logo-green39a900png-20250120.png"
                alt="Logo SENA"
                width="40"
                height="40"
                className="img-fluid"
              />
            </span>
          </Link>

          <Link to="/" className="text-decoration-none">
            <span className="text-white fw-bold">
              Admin SENA
            </span>
          </Link>

        </div>

        {/* BOTÓN MÓVIL */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* CONTENIDO */}
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >

          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center gap-2 ms-lg-3">

            {/* QUIÉNES SOMOS */}
            <li className="nav-item">
              <Link
                className="nav-link text-white fw-semibold"
                to="/about"
              >
                Quiénes Somos
              </Link>
            </li>

            {/* MENÚ ADMINISTRACIÓN */}
            {userSession &&
              (userRole === "admin" || userRole === "administrador") && (
                <li className="nav-item dropdown">

                  <a
                    className="btn btn-light dropdown-toggle text-dark fw-medium px-3"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Administración
                  </a>

                  <ul className="dropdown-menu shadow-sm border-0 mt-2">

                    <li>
                      <Link className="dropdown-item py-2" to="/Areas">
                        📁 Lista Áreas
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item py-2"
                        to="/TrainingCenter"
                      >
                        🏢 Lista Centros
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item py-2" to="/Computer">
                        💻 Lista Computadores
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item py-2" to="/teacher">
                        👨‍🏫 Lista Instructores
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item py-2" to="/Courses">
                        📚 Lista Cursos
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item py-2" to="/Apprentice">
                        👨‍🎓 Lista Aprendices
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item py-2" to="/programas">
                        🎓 Lista Programas
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item py-2"
                        to="/environments"
                      >
                        🏫 Lista Ambientes
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item py-2"
                        to="/announcements"
                      >
                        📢 Lista Anuncios
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item py-2" to="/offers">
                        🏷️ Lista Ofertas
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item py-2" to="/cohorts">
                        👥 Lista Ficha
                      </Link>
                    </li>

                  </ul>
                </li>
              )}

          </ul>

          {/* BUSCADOR */}
          <form
            onSubmit={(e) => {
              e.preventDefault();

              const search = e.target.search.value;

              navigate(`/apprentice?search=${search}`);
            }}
            className="d-flex align-items-center my-2 my-lg-0 me-lg-4"
            role="search"
          >
            <div className="input-group">

              <span className="input-group-text bg-white border-end-0">
                🔍
              </span>

              <input
                className="form-control border-start-0"
                type="search"
                name="search"
                placeholder="Buscar..."
                aria-label="Buscar"
              />

              <button
                className="btn btn-light text-success fw-bold border"
                type="submit"
              >
                Buscar
              </button>

            </div>
          </form>

          {/* PERFIL / INICIAR SESIÓN */}
          <div>

            {userSession ? (
              <div className="dropdown ms-lg-2 my-2 my-lg-0">

                <a
                  href="#"
                  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >

                  <div
                    className="rounded-circle bg-white text-success fw-bold d-flex align-items-center justify-content-center shadow-sm me-2"
                    style={{
                      width: "38px",
                      height: "38px",
                      border: "2px solid rgba(255,255,255,.8)",
                    }}
                  >
                    👤
                  </div>

                  <span className="fw-bold text-white d-none d-md-inline">
                    {userSession.name || "Usuario"}
                  </span>

                </a>

                <ul
                  className="dropdown-menu dropdown-menu-end border-0 shadow-lg mt-2"
                  style={{ borderRadius: "12px" }}
                >

                  {/* INFORMACIÓN DEL USUARIO */}
                  <li>
                    <div className="px-3 py-2 border-bottom">

                      <p className="fw-bold mb-0 text-dark small">
                        {userSession.name || "Usuario"}
                      </p>

                      <small className="text-muted">
                        {userSession.email || ""}
                      </small>

                    </div>
                  </li>

                  {/* PERFIL */}
                  <li>
                    <Link
                      className="dropdown-item py-2"
                      to="/profile"
                    >
                      👤 Mi Perfil
                    </Link>
                  </li>

                  {/* CERRAR SESIÓN */}
                  <li>
                    <button
                      onClick={logout}
                      className="dropdown-item text-danger fw-bold py-2 w-100 text-start"
                    >
                      <i className="bi bi-box-arrow-right me-2"></i>
                      Cerrar Sesión
                    </button>
                  </li>

                </ul>

              </div>
            ) : (
              /* INICIAR SESIÓN */
              <Link
                to="/login"
                className="btn btn-light text-success fw-bold px-3 rounded-3 shadow-sm d-flex align-items-center gap-1"
              >
                <i className="bi bi-person-circle"></i>
                Iniciar Sesión
              </Link>
            )}

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
