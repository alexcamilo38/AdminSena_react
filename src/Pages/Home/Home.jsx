import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* ================= CARRUSEL ================= */}
      <div className="container-fluid px-0">

        <div
          id="senaCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >

          {/* Indicadores */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#senaCarousel"
              data-bs-slide-to="0"
              className="active"
            ></button>

            <button
              type="button"
              data-bs-target="#senaCarousel"
              data-bs-slide-to="1"
            ></button>

            <button
              type="button"
              data-bs-target="#senaCarousel"
              data-bs-slide-to="2"
            ></button>

            <button
              type="button"
              data-bs-target="#senaCarousel"
              data-bs-slide-to="3"
            ></button>
          </div>

          <div className="carousel-inner">

            {/* IMAGEN 1 */}
            <div className="carousel-item active">
              <div className="position-relative">

                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
                  className="d-block w-100"
                  style={{
                    height: "650px",
                    objectFit: "cover"
                  }}
                  alt="Bienvenida"
                />

                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background: "rgba(0,0,0,0.60)"
                  }}
                ></div>

              </div>

              <div className="carousel-caption">
                <h1>ADMIN SENA</h1>

                <p>
                  Bienvenido al sistema de gestión académica
                </p>

                <Link
                  to="/login"
                  className="btn btn-success btn-lg px-5"
                >
                  Comenzar
                </Link>
              </div>
            </div>


            {/* IMAGEN 2 */}
            <div className="carousel-item">
              <div className="position-relative">

                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                  className="d-block w-100"
                  style={{
                    height: "650px",
                    objectFit: "cover"
                  }}
                  alt="Tecnología"
                />

                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background: "rgba(0,0,0,0.55)"
                  }}
                ></div>

              </div>

              <div className="carousel-caption">
                <h1>Innovación Tecnológica</h1>

                <p>
                  Gestiona ambientes y equipos del centro SENA
                </p>

                <Link
                  to="/computer/list"
                  className="btn btn-light btn-lg px-5"
                >
                  Ver Equipos
                </Link>
              </div>
            </div>


            {/* IMAGEN 3 */}
            <div className="carousel-item">
              <div className="position-relative">

                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  className="d-block w-100"
                  style={{
                    height: "650px",
                    objectFit: "cover"
                  }}
                  alt="Aprendices"
                />

                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background: "rgba(0,0,0,0.55)"
                  }}
                ></div>

              </div>

              <div className="carousel-caption">
                <h1>Formación Profesional</h1>

                <p>
                  Administra aprendices e instructores fácilmente
                </p>

                <Link
                  to="/apprentice/list"
                  className="btn btn-success btn-lg px-5"
                >
                  Aprendices
                </Link>
              </div>
            </div>


            {/* IMAGEN 4 */}
            <div className="carousel-item">
              <div className="position-relative">

                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
                  className="d-block w-100"
                  style={{
                    height: "650px",
                    objectFit: "cover"
                  }}
                  alt="Centro de formación"
                />

                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background: "rgba(0,0,0,0.55)"
                  }}
                ></div>

              </div>

              <div className="carousel-caption">
                <h1>Centro de Formación</h1>

                <p>
                  Organiza áreas, programas y procesos académicos
                </p>

                <Link
                  to="/areas/list"
                  className="btn btn-light btn-lg px-5"
                >
                  Explorar
                </Link>
              </div>
            </div>

          </div>


          {/* Botón anterior */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#senaCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>


          {/* Botón siguiente */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#senaCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>
      </div>


      {/* ================= OFERTAS ================= */}
      <div className="container py-5">

        <div className="text-center mb-5">

          <span className="badge bg-success px-3 py-2 fs-6 mb-2">
            Convocatorias Abiertas
          </span>

          <h2 className="fw-bold text-dark display-6">
            Oferta Educativa Destacada
          </h2>

          <p className="text-muted">
            Descubre los programas de formación técnica y tecnológica
            disponibles en nuestro centro
          </p>

          <hr className="w-25 mx-auto text-success border-2" />

        </div>


        <div className="row g-4">

          {/* OFERTA 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">

              <div className="position-relative">

                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover"
                  }}
                  alt="ADSO"
                />

                <span className="badge bg-success position-absolute top-0 start-0 m-3 shadow-sm">
                  Tecnólogo
                </span>

              </div>

              <div className="card-body p-4 d-flex flex-column">

                <h5 className="card-title fw-bold text-dark">
                  Análisis y Desarrollo de Software
                </h5>

                <p className="card-text text-muted small flex-grow-1">
                  Aprende a construir aplicaciones web, móviles y sistemas
                  de software utilizando lenguajes modernos y bases de datos.
                </p>

                <ul className="list-unstyled text-secondary small mb-3">
                  <li>
                    ⏱️ <strong>Duración:</strong> 27 Meses
                  </li>

                  <li>
                    📍 <strong>Modalidad:</strong> Presencial / Virtual
                  </li>
                </ul>

                <Link
                  to="/programas/1"
                  className="btn btn-outline-success w-100 fw-bold"
                >
                  Ver Detalles
                </Link>

              </div>
            </div>
          </div>


          {/* OFERTA 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">

              <div className="position-relative">

                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8"
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover"
                  }}
                  alt="Redes"
                />

                <span className="badge bg-success position-absolute top-0 start-0 m-3 shadow-sm">
                  Técnico
                </span>

              </div>

              <div className="card-body p-4 d-flex flex-column">

                <h5 className="card-title fw-bold text-dark">
                  Sistemas y Mantenimiento de Equipos
                </h5>

                <p className="card-text text-muted small flex-grow-1">
                  Especialízate en ensamble de computadores, diagnóstico
                  de hardware y cableado estructurado para redes de datos.
                </p>

                <ul className="list-unstyled text-secondary small mb-3">
                  <li>
                    ⏱️ <strong>Duración:</strong> 15 Meses
                  </li>

                  <li>
                    📍 <strong>Modalidad:</strong> Presencial
                  </li>
                </ul>

                <Link
                  to="/programas/2"
                  className="btn btn-outline-success w-100 fw-bold"
                >
                  Ver Detalles
                </Link>

              </div>
            </div>
          </div>


          {/* OFERTA 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">

              <div className="position-relative">

                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover"
                  }}
                  alt="Gestión Empresarial"
                />

                <span className="badge bg-success position-absolute top-0 start-0 m-3 shadow-sm">
                  Tecnólogo
                </span>

              </div>

              <div className="card-body p-4 d-flex flex-column">

                <h5 className="card-title fw-bold text-dark">
                  Gestión Empresarial
                </h5>

                <p className="card-text text-muted small flex-grow-1">
                  Adquiere conocimientos en administración de proyectos,
                  finanzas, talento humano y procesos organizacionales.
                </p>

                <ul className="list-unstyled text-secondary small mb-3">
                  <li>
                    ⏱️ <strong>Duración:</strong> 24 Meses
                  </li>

                  <li>
                    📍 <strong>Modalidad:</strong> Virtual
                  </li>
                </ul>

                <Link
                  to="/programas/3"
                  className="btn btn-outline-success w-100 fw-bold"
                >
                  Ver Detalles
                </Link>

              </div>
            </div>
          </div>


          {/* OFERTA 4 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">

              <div className="position-relative">

                <img
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d"
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover"
                  }}
                  alt="Diseño Multimedia"
                />

                <span className="badge bg-success position-absolute top-0 start-0 m-3 shadow-sm">
                  Tecnólogo
                </span>

              </div>

              <div className="card-body p-4 d-flex flex-column">

                <h5 className="card-title fw-bold text-dark">
                  Producción de Contenidos Digitales
                </h5>

                <p className="card-text text-muted small flex-grow-1">
                  Crea contenido interactivo, animación 2D/3D, edición
                  de video y diseño de interfaces de usuario (UI/UX).
                </p>

                <ul className="list-unstyled text-secondary small mb-3">
                  <li>
                    ⏱️ <strong>Duración:</strong> 24 Meses
                  </li>

                  <li>
                    📍 <strong>Modalidad:</strong> Presencial
                  </li>
                </ul>

                <Link
                  to="/programas/4"
                  className="btn btn-outline-success w-100 fw-bold"
                >
                  Ver Detalles
                </Link>

              </div>
            </div>
          </div>


          {/* OFERTA 5 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">

              <div className="position-relative">

                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover"
                  }}
                  alt="Contabilidad"
                />

                <span className="badge bg-success position-absolute top-0 start-0 m-3 shadow-sm">
                  Técnico
                </span>

              </div>

              <div className="card-body p-4 d-flex flex-column">

                <h5 className="card-title fw-bold text-dark">
                  Contabilización de Operaciones
                </h5>

                <p className="card-text text-muted small flex-grow-1">
                  Aprende sobre gestión financiera, nómina, tributaria
                  e impuestos en plataformas contables empresariales.
                </p>

                <ul className="list-unstyled text-secondary small mb-3">
                  <li>
                    ⏱️ <strong>Duración:</strong> 15 Meses
                  </li>

                  <li>
                    📍 <strong>Modalidad:</strong> Virtual / Presencial
                  </li>
                </ul>

                <Link
                  to="/programas/5"
                  className="btn btn-outline-success w-100 fw-bold"
                >
                  Ver Detalles
                </Link>

              </div>
            </div>
          </div>


          {/* OFERTA 6 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">

              <div className="position-relative">

                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover"
                  }}
                  alt="Ciberseguridad"
                />

                <span className="badge bg-success position-absolute top-0 start-0 m-3 shadow-sm">
                  Tecnólogo
                </span>

              </div>

              <div className="card-body p-4 d-flex flex-column">

                <h5 className="card-title fw-bold text-dark">
                  Seguridad de la Información y Redes
                </h5>

                <p className="card-text text-muted small flex-grow-1">
                  Protege datos corporativos, previene vulnerabilidades
                  digitales y administra firewalls e infraestructura informática.
                </p>

                <ul className="list-unstyled text-secondary small mb-3">
                  <li>
                    ⏱️ <strong>Duración:</strong> 27 Meses
                  </li>

                  <li>
                    📍 <strong>Modalidad:</strong> Presencial
                  </li>
                </ul>

                <Link
                  to="/programas/6"
                  className="btn btn-outline-success w-100 fw-bold"
                >
                  Ver Detalles
                </Link>

              </div>
            </div>
          </div>

        </div>


        {/* VER MÁS */}
        <div className="text-center mt-5">

          <Link
            to="/programas"
            className="btn btn-success btn-lg px-5 shadow-sm fw-bold"
          >
            Ver Todas las Ofertas
          </Link>

        </div>

      </div>
    </>
  );
}

export default Home;
