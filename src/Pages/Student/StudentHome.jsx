import { Link, useNavigate } from "react-router-dom";

const StudentHome = () => {

  const navigate = useNavigate();

  // Obtener usuario desde localStorage
  const userSession = JSON.parse(localStorage.getItem("user_session"));

  const name = userSession?.name || "Aprendiz";

  // Cerrar sesión
  const logout = () => {
    localStorage.removeItem("user_session");
    localStorage.removeItem("user_role");
    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  };

  return (
    <div className="container-fluid px-4 mt-4 mb-5">

      {/* HERO DE BIENVENIDA */}
      <div
        className="p-5 mb-4 rounded-5 shadow-lg text-white position-relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #39A900 0%, #143084 100%)",
        }}
      >

        <div className="position-relative" style={{ zIndex: 2 }}>

          <span className="badge bg-white text-success fw-bold px-3 py-2 rounded-pill mb-3">
            <i className="bi bi-mortarboard-fill"></i>{" "}
            Panel del Aprendiz
          </span>

          <h1 className="fw-bold mb-1">
            ¡Hola, {name}! 👋
          </h1>

          <p className="mb-0 fs-5 opacity-75">
            Bienvenido a tu espacio de formación SENA.
            Aquí tienes tus accesos directos.
          </p>

        </div>

        {/* ICONO DECORATIVO */}
        <div
          className="position-absolute top-0 end-0 opacity-25"
          style={{
            fontSize: "12rem",
            lineHeight: "1",
          }}
        >
          <i className="bi bi-mortarboard-fill"></i>
        </div>

      </div>


      {/* ACCESOS DIRECTOS */}

      <h5 className="fw-bold text-secondary mb-3">
        <i className="bi bi-lightning-charge-fill text-warning"></i>{" "}
        Accesos Directos
      </h5>


      <div className="row g-4 mb-4">

        {/* REGISTRAR APRENDIZ */}
        <div className="col-md-6 col-lg-4">

          <Link
            to="/apprentice/registro"
            className="text-decoration-none"
          >

            <div className="card h-100 border-0 shadow-sm rounded-4 hover-card border-start border-4 border-success">

              <div className="card-body d-flex align-items-center gap-3 p-4">

                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#d1e7dd",
                  }}
                >
                  <i className="bi bi-person-plus-fill fs-3 text-success"></i>
                </div>

                <div>
                  <h6 className="fw-bold mb-1 text-dark">
                    Registrar Aprendiz
                  </h6>

                  <small className="text-muted">
                    Crear y dar de alta un nuevo aprendiz
                  </small>
                </div>

              </div>

            </div>

          </Link>

        </div>


        {/* PROGRAMAS */}
        <div className="col-md-6 col-lg-4">

          <Link
            to="/programas"
            className="text-decoration-none"
          >

            <div className="card h-100 border-0 shadow-sm rounded-4 hover-card">

              <div className="card-body d-flex align-items-center gap-3 p-4">

                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#e8f7e0",
                  }}
                >
                  <i className="bi bi-journal-bookmark-fill fs-3 text-success"></i>
                </div>

                <div>
                  <h6 className="fw-bold mb-1 text-dark">
                    Programas
                  </h6>

                  <small className="text-muted">
                    Ver oferta y diseño curricular
                  </small>
                </div>

              </div>

            </div>

          </Link>

        </div>


        {/* AMBIENTES */}
        <div className="col-md-6 col-lg-4">

          <Link
            to="/environments"
            className="text-decoration-none"
          >

            <div className="card h-100 border-0 shadow-sm rounded-4 hover-card">

              <div className="card-body d-flex align-items-center gap-3 p-4">

                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#e6ebfa",
                  }}
                >
                  <i
                    className="bi bi-building-fill fs-3"
                    style={{ color: "#143084" }}
                  ></i>
                </div>

                <div>
                  <h6 className="fw-bold mb-1 text-dark">
                    Ambientes
                  </h6>

                  <small className="text-muted">
                    Aulas y laboratorios asignados
                  </small>
                </div>

              </div>

            </div>

          </Link>

        </div>


        {/* ANUNCIOS */}
        <div className="col-md-6 col-lg-4">

          <Link
            to="/announcements"
            className="text-decoration-none"
          >

            <div className="card h-100 border-0 shadow-sm rounded-4 hover-card">

              <div className="card-body d-flex align-items-center gap-3 p-4">

                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#fff3cd",
                  }}
                >
                  <i className="bi bi-megaphone-fill fs-3 text-warning"></i>
                </div>

                <div>
                  <h6 className="fw-bold mb-1 text-dark">
                    Anuncios
                  </h6>

                  <small className="text-muted">
                    Noticias y convocatorias
                  </small>
                </div>

              </div>

            </div>

          </Link>

        </div>


        {/* OFERTAS ACADÉMICAS */}
        <div className="col-md-6 col-lg-4">

          <Link
            to="/offers"
            className="text-decoration-none"
          >

            <div className="card h-100 border-0 shadow-sm rounded-4 hover-card">

              <div className="card-body d-flex align-items-center gap-3 p-4">

                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#e0f7fa",
                  }}
                >
                  <i className="bi bi-tags-fill fs-3 text-info"></i>
                </div>

                <div>
                  <h6 className="fw-bold mb-1 text-dark">
                    Ofertas Académicas
                  </h6>

                  <small className="text-muted">
                    Cursos y formación disponible
                  </small>
                </div>

              </div>

            </div>

          </Link>

        </div>


        {/* MI FICHA */}
        <div className="col-md-6 col-lg-4">

          <Link
            to="/cohorts"
            className="text-decoration-none"
          >

            <div className="card h-100 border-0 shadow-sm rounded-4 hover-card">

              <div className="card-body d-flex align-items-center gap-3 p-4">

                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#fce4ec",
                  }}
                >
                  <i className="bi bi-people-fill fs-3 text-danger"></i>
                </div>

                <div>
                  <h6 className="fw-bold mb-1 text-dark">
                    Mi Ficha
                  </h6>

                  <small className="text-muted">
                    Información de grupo y jornada
                  </small>
                </div>

              </div>

            </div>

          </Link>

        </div>

      </div>


      {/* RESUMEN DE MATRÍCULA */}

      <div className="card border-0 shadow-sm rounded-4">

        <div className="card-header bg-white border-0 pt-4 px-4">

          <h5 className="fw-bold mb-0">
            <i className="bi bi-clipboard-check-fill text-success"></i>{" "}
            Resumen de tu Matrícula
          </h5>

        </div>


        <div className="card-body px-4 pb-4">

          <div className="row text-center g-3">

            {/* PROGRAMA */}
            <div className="col-6 col-md-3">

              <div className="p-3 bg-light rounded-4">

                <small className="text-muted d-block">
                  Programa
                </small>

                <span className="fw-bold">
                  Sin asignar
                </span>

              </div>

            </div>


            {/* TIPO */}
            <div className="col-6 col-md-3">

              <div className="p-3 bg-light rounded-4">

                <small className="text-muted d-block">
                  Tipo
                </small>

                <span className="fw-bold">
                  —
                </span>

              </div>

            </div>


            {/* MODALIDAD */}
            <div className="col-6 col-md-3">

              <div className="p-3 bg-light rounded-4">

                <small className="text-muted d-block">
                  Modalidad
                </small>

                <span className="fw-bold">
                  —
                </span>

              </div>

            </div>


            {/* AMBIENTE */}
            <div className="col-6 col-md-3">

              <div className="p-3 bg-light rounded-4">

                <small className="text-muted d-block">
                  Ambiente
                </small>

                <span className="fw-bold">
                  Sin asignar
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* CERRAR SESIÓN */}

      {userSession && (

        <div className="d-flex justify-content-end mt-4">

          <button
            onClick={logout}
            type="button"
            className="btn btn-outline-danger rounded-pill px-4"
          >
            <i className="bi bi-box-arrow-right"></i>{" "}
            Cerrar Sesión
          </button>

        </div>

      )}


      {/* ESTILO DE LAS TARJETAS */}

      <style>
        {`
          .hover-card {
            transition: all 0.2s ease-in-out;
          }

          .hover-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 0.75rem 1.5rem rgba(0,0,0,0.1) !important;
          }
        `}
      </style>

    </div>
  );
};

export default StudentHome;
