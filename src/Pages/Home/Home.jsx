//import React from 'react';
const Home = () => {
  return (
    <>
      {/* 
        ======================================================================
        1. ESTILOS CSS EN LÍNEA (Scoped Styles via JSX <style>)
        ======================================================================
        Definición de variables CSS globales corporativas del SENA y personalizaciones
        avanzadas de UI (Glassmorphism, transiciones fluidas y sombras).
      */}
      <style>{`
        :root {
          --sena-green: #39A900;
          --sena-green-hover: #2e8800;
          --sena-dark: #0f172a;
          --sena-accent: #00e676;
        }

        /* 🎠 Carrusel Hero: Ajustes de altura, contenedor y transiciones */
        .hero-carousel .carousel-item {
          height: 650px;
          background-color: var(--sena-dark);
          overflow: hidden;
        }

        .hero-carousel img {
          height: 100%;
          object-fit: cover;
          transform: scale(1.05);
          transition: transform 6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .hero-carousel .carousel-item.active img {
          transform: scale(1);
        }

        /* Gradient Overlay para mejorar el contraste y lectura del texto */
        .hero-overlay {
          background: linear-gradient(
            180deg, 
            rgba(15, 23, 42, 0.4) 0%, 
            rgba(15, 23, 42, 0.75) 60%, 
            rgba(15, 23, 42, 0.95) 100%
          );
        }

        /* 🃏 Tarjetas con diseño Glassmorphism e interactividad Hover */
        .sena-card {
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: 20px;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          background: #ffffff;
        }

        .sena-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08) !important;
          border-color: rgba(57, 169, 0, 0.3);
        }

        .sena-card .card-img-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 20px 20px 0 0;
          height: 220px;
        }

        .sena-card .card-img-top {
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .sena-card:hover .card-img-top {
          transform: scale(1.1);
        }

        /* 🛠️ Botones personalizados (SENA Primary & Glassmorphism) */
        .btn-sena-primary {
          background-color: var(--sena-green) !important;
          color: #ffffff !important;
          border: none !important;
          box-shadow: 0 4px 15px rgba(57, 169, 0, 0.4);
          transition: all 0.3s ease;
        }

        .btn-sena-primary:hover {
          background-color: var(--sena-green-hover) !important;
          color: #ffffff !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(57, 169, 0, 0.6);
        }

        .btn-glass {
          background: rgba(255, 255, 255, 0.2) !important;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.5) !important;
          color: #ffffff !important;
          transition: all 0.3s ease;
        }

        .btn-glass:hover {
          background: #ffffff !important;
          color: #0f172a !important;
          transform: translateY(-2px);
        }

        .btn-glass:hover i {
          color: #0f172a !important;
        }

        /* 🏷️ Etiquetas (Badges) */
        .badge-sena-tag {
          background: rgba(57, 169, 0, 0.15);
          color: #ffffff;
          border: 1px solid rgba(57, 169, 0, 0.4);
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .badge-type {
          backdrop-filter: blur(8px);
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* 🎛️ Botones circulares de navegación del carrusel */
        .carousel-control-btn {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .carousel-control-btn:hover {
          background: var(--sena-green);
          border-color: var(--sena-green);
          transform: scale(1.1);
        }
      `}</style>

      {/* 
        ======================================================================
        2. SECCIÓN HERO (CARRUSEL PRINCIPAL)
        ======================================================================
      */}
      <div className="container-fluid px-0">
        <div id="senaHeroCarousel" className="carousel slide carousel-fade hero-carousel" data-bs-ride="carousel">

          {/* Indicadores de diapositivas inferiores */}
          <div className="carousel-indicators mb-4">
            <button type="button" data-bs-target="#senaHeroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#senaHeroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#senaHeroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#senaHeroCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>

          <div className="carousel-inner">

            {/* --- SLIDE 1: PLATAFORMA DE GESTIÓN --- */}
            <div className="carousel-item active" data-bs-interval="6000">
              <div className="position-relative h-100">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600" className="d-block w-100" alt="ADMIN SENA" />
                <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
              </div>
              <div className="carousel-caption d-flex flex-column justify-content-center h-100 pb-0 text-start" style={{ top: 0, bottom: 0 }}>
                <div className="container">
                  <div className="col-xl-7 col-lg-8">
                    <span className="badge badge-sena-tag px-3 py-2 rounded-pill mb-3 text-uppercase d-inline-flex align-items-center">
                      <i className="bi bi-shield-check me-2 text-white"></i> Gestión Académica Integral
                    </span>
                    <h1 className="display-3 fw-extrabold text-white mb-3">
                      ADMIN <span style={{ color: 'var(--sena-accent)' }}>SENA</span>
                    </h1>
                    <p className="lead text-light mb-4 opacity-90 fs-5 fw-normal">
                      Tu portal centralizado para la administración de ambientes de formación, aprendices, instructores e infraestructura del centro.
                    </p>
                    <div className="d-flex flex-wrap gap-3">
                      <a href="/login" className="btn btn-sena-primary btn-lg px-4 py-3 rounded-4 fw-bold text-white">
                        <i className="bi bi-box-arrow-in-right me-2 text-white"></i> Iniciar Sesión
                      </a>
                      <a href="#ofertas" className="btn btn-glass btn-lg px-4 py-3 rounded-4 fw-semibold text-white">
                        <i className="bi bi-journal-text me-2 text-white"></i> Ver Oferta Educativa
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- SLIDE 2: TECNOLOGÍA E INNOVACIÓN --- */}
            <div className="carousel-item" data-bs-interval="6000">
              <div className="position-relative h-100">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600" className="d-block w-100" alt="Innovación Tecnológica" />
                <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
              </div>
              <div className="carousel-caption d-flex flex-column justify-content-center h-100 pb-0 text-start" style={{ top: 0, bottom: 0 }}>
                <div className="container">
                  <div className="col-xl-7 col-lg-8">
                    <span className="badge badge-sena-tag px-3 py-2 rounded-pill mb-3 text-uppercase d-inline-flex align-items-center">
                      <i className="bi bi-cpu me-2 text-white"></i> Infraestructura de Vanguardia
                    </span>
                    <h1 className="display-3 fw-extrabold text-white mb-3">
                      Innovación y <span style={{ color: 'var(--sena-accent)' }}>Tecnología</span>
                    </h1>
                    <p className="lead text-light mb-4 opacity-90 fs-5 fw-normal">
                      Control en tiempo real del inventario tecnológico, mantenimiento de equipos de cómputo y ambientes especializados.
                    </p>
                    <div className="d-flex flex-wrap gap-3">
                      <a href="/Computer" className="btn btn-sena-primary btn-lg px-4 py-3 rounded-4 fw-bold text-white">
                        <i className="bi bi-laptop me-2 text-white"></i> Gestionar Equipos
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- SLIDE 3: APRENDICES E INSTRUCTORES --- */}
            <div className="carousel-item" data-bs-interval="6000">
              <div className="position-relative h-100">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600" className="d-block w-100" alt="Formación Profesional" />
                <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
              </div>
              <div className="carousel-caption d-flex flex-column justify-content-center h-100 pb-0 text-start" style={{ top: 0, bottom: 0 }}>
                <div className="container">
                  <div className="col-xl-7 col-lg-8">
                    <span className="badge badge-sena-tag px-3 py-2 rounded-pill mb-3 text-uppercase d-inline-flex align-items-center">
                      <i className="bi bi-mortarboard me-2 text-white"></i> Talento Humano SENA
                    </span>
                    <h1 className="display-3 fw-extrabold text-white mb-3">
                      Comunidad <span style={{ color: 'var(--sena-accent)' }}>Académica</span>
                    </h1>
                    <p className="lead text-light mb-4 opacity-90 fs-5 fw-normal">
                      Organiza fichas de formación, realiza seguimiento a los aprendices y gestiona los horarios de instrucción.
                    </p>
                    <div className="d-flex flex-wrap gap-3">
                      <a href="/Apprentice" className="btn btn-sena-primary btn-lg px-4 py-3 rounded-4 fw-bold text-white">
                        <i className="bi bi-people me-2 text-white"></i> Módulo Aprendices
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- SLIDE 4: CENTRO DE FORMACIÓN Y AMBIENTES --- */}
            <div className="carousel-item" data-bs-interval="6000">
              <div className="position-relative h-100">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600" className="d-block w-100" alt="Centro de Formación" />
                <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
              </div>
              <div className="carousel-caption d-flex flex-column justify-content-center h-100 pb-0 text-start" style={{ top: 0, bottom: 0 }}>
                <div className="container">
                  <div className="col-xl-7 col-lg-8">
                    <span className="badge badge-sena-tag px-3 py-2 rounded-pill mb-3 text-uppercase d-inline-flex align-items-center">
                      <i className="bi bi-building-gear me-2 text-white"></i> Organización Institucional
                    </span>
                    <h1 className="display-3 fw-extrabold text-white mb-3">
                      Centro de <span style={{ color: 'var(--sena-accent)' }}>Formación</span>
                    </h1>
                    <p className="lead text-light mb-4 opacity-90 fs-5 fw-normal">
                      Estructura las áreas de coordinación, programas académicos y espacios físicos de aprendizaje.
                    </p>
                    <div className="d-flex flex-wrap gap-3">
                      <a href="/Areas" className="btn btn-sena-primary btn-lg px-4 py-3 rounded-4 fw-bold text-white">
                        <i className="bi bi-grid-3x3-gap me-2 text-white"></i> Explorar Áreas
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Controles laterales de navegación del carrusel */}
          <button className="carousel-control-prev w-auto ms-lg-4 ms-2" type="button" data-bs-target="#senaHeroCarousel" data-bs-slide="prev">
            <span className="carousel-control-btn text-white">
              <i className="bi bi-chevron-left fs-4"></i>
            </span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next w-auto me-lg-4 me-2" type="button" data-bs-target="#senaHeroCarousel" data-bs-slide="next">
            <span className="carousel-control-btn text-white">
              <i className="bi bi-chevron-right fs-4"></i>
            </span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>

      {/* 
        ======================================================================
        3. SECCIÓN DE OFERTAS EDUCATIVAS (CATÁLOGO EN GRID)
        ======================================================================
      */}
      <div id="ofertas" className="container py-5 my-3">

        {/* Encabezado de la sección */}
        <div className="text-center mb-5">
          <span className="badge badge-sena-tag px-3 py-2 rounded-pill mb-2 text-uppercase text-dark">
            <i className="bi bi-stars me-1 text-success"></i> Inscripciones Abiertas
          </span>
          <h2 className="fw-bold text-dark display-6 mb-2">Oferta Educativa Destacada</h2>
          <p className="text-muted mx-auto fs-6" style={{ maxWidth: '650px' }}>
            Descubre los programas de formación técnica y tecnológica diseñados para impulsar tu perfil profesional en el mercado laboral.
          </p>
        </div>

        {/* Grid adaptable de programas de formación */}
        <div className="row g-4">

          {/* Tarjeta 1: ADSO */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 sena-card">
              <div className="card-img-wrapper">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800" className="card-img-top" alt="ADSO" />
                <span className="badge badge-type text-white position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill fs-7">Tecnólogo</span>
              </div>
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="card-title fw-bold text-dark mb-2">Análisis y Desarrollo de Software</h5>
                <p className="card-text text-muted small mb-4 flex-grow-1">
                  Diseña, desarrolla e implementa soluciones de software web y móviles utilizando tecnologías y bases de datos modernas.
                </p>

                <div className="bg-light p-3 rounded-3 mb-4">
                  <div className="d-flex align-items-center mb-2 text-secondary small">
                    <i className="bi bi-clock-history text-success fs-5 me-2"></i>
                    <span><strong>Duración:</strong> 27 Meses</span>
                  </div>
                  <div className="d-flex align-items-center text-secondary small">
                    <i className="bi bi-laptop text-success fs-5 me-2"></i>
                    <span><strong>Modalidad:</strong> Presencial / Virtual</span>
                  </div>
                </div>

                <a href="/programas/1" className="btn btn-sena-primary w-100 rounded-3 fw-bold py-2 text-white">
                  Ver Detalles <i className="bi bi-arrow-right ms-1 text-white"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Tarjeta 2: Redes y Mantenimiento */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 sena-card">
              <div className="card-img-wrapper">
                <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800" className="card-img-top" alt="Redes" />
                <span className="badge badge-type text-white position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill fs-7">Técnico</span>
              </div>
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="card-title fw-bold text-dark mb-2">Sistemas y Mantenimiento</h5>
                <p className="card-text text-muted small mb-4 flex-grow-1">
                  Especialízate en ensamble de computadores, diagnóstico de hardware, mantenimiento preventivo y cableado estructurado.
                </p>

                <div className="bg-light p-3 rounded-3 mb-4">
                  <div className="d-flex align-items-center mb-2 text-secondary small">
                    <i className="bi bi-clock-history text-success fs-5 me-2"></i>
                    <span><strong>Duración:</strong> 15 Meses</span>
                  </div>
                  <div className="d-flex align-items-center text-secondary small">
                    <i className="bi bi-geo-alt text-success fs-5 me-2"></i>
                    <span><strong>Modalidad:</strong> Presencial</span>
                  </div>
                </div>

                <a href="/programas/2" className="btn btn-sena-primary w-100 rounded-3 fw-bold py-2 text-white">
                  Ver Detalles <i className="bi bi-arrow-right ms-1 text-white"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Tarjeta 3: Gestión Empresarial */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 sena-card">
              <div className="card-img-wrapper">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800" className="card-img-top" alt="Gestión Empresarial" />
                <span className="badge badge-type text-white position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill fs-7">Tecnólogo</span>
              </div>
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="card-title fw-bold text-dark mb-2">Gestión Empresarial</h5>
                <p className="card-text text-muted small mb-4 flex-grow-1">
                  Adquiere competencias en formulación de proyectos, administración financiera, talento humano y procesos estratégicos.
                </p>

                <div className="bg-light p-3 rounded-3 mb-4">
                  <div className="d-flex align-items-center mb-2 text-secondary small">
                    <i className="bi bi-clock-history text-success fs-5 me-2"></i>
                    <span><strong>Duración:</strong> 24 Meses</span>
                  </div>
                  <div className="d-flex align-items-center text-secondary small">
                    <i className="bi bi-wifi text-success fs-5 me-2"></i>
                    <span><strong>Modalidad:</strong> Virtual</span>
                  </div>
                </div>

                <a href="/programas/3" className="btn btn-sena-primary w-100 rounded-3 fw-bold py-2 text-white">
                  Ver Detalles <i className="bi bi-arrow-right ms-1 text-white"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Tarjeta 4: Producción Digital */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 sena-card">
              <div className="card-img-wrapper">
                <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800" className="card-img-top" alt="Diseño Multimedia" />
                <span className="badge badge-type text-white position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill fs-7">Tecnólogo</span>
              </div>
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="card-title fw-bold text-dark mb-2">Producción Multimedia</h5>
                <p className="card-text text-muted small mb-4 flex-grow-1">
                  Crea contenidos interactivos, animaciones 2D/3D, edición de video profesional y diseño de interfaces UI/UX.
                </p>

                <div className="bg-light p-3 rounded-3 mb-4">
                  <div className="d-flex align-items-center mb-2 text-secondary small">
                    <i className="bi bi-clock-history text-success fs-5 me-2"></i>
                    <span><strong>Duración:</strong> 24 Meses</span>
                  </div>
                  <div className="d-flex align-items-center text-secondary small">
                    <i className="bi bi-geo-alt text-success fs-5 me-2"></i>
                    <span><strong>Modalidad:</strong> Presencial</span>
                  </div>
                </div>

                <a href="/programas/4" className="btn btn-sena-primary w-100 rounded-3 fw-bold py-2 text-white">
                  Ver Detalles <i className="bi bi-arrow-right ms-1 text-white"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Tarjeta 5: Contabilidad */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 sena-card">
              <div className="card-img-wrapper">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800" className="card-img-top" alt="Contabilidad" />
                <span className="badge badge-type text-white position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill fs-7">Técnico</span>
              </div>
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="card-title fw-bold text-dark mb-2">Contabilización de Operaciones</h5>
                <p className="card-text text-muted small mb-4 flex-grow-1">
                  Aprende sobre gestión contable, liquidación de nómina, tributaria e impuestos mediante software empresarial.
                </p>

                <div className="bg-light p-3 rounded-3 mb-4">
                  <div className="d-flex align-items-center mb-2 text-secondary small">
                    <i className="bi bi-clock-history text-success fs-5 me-2"></i>
                    <span><strong>Duración:</strong> 15 Meses</span>
                  </div>
                  <div className="d-flex align-items-center text-secondary small">
                    <i className="bi bi-laptop text-success fs-5 me-2"></i>
                    <span><strong>Modalidad:</strong> Virtual / Presencial</span>
                  </div>
                </div>

                <a href="/programas/5" className="btn btn-sena-primary w-100 rounded-3 fw-bold py-2 text-white">
                  Ver Detalles <i className="bi bi-arrow-right ms-1 text-white"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Tarjeta 6: Ciberseguridad */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 sena-card">
              <div className="card-img-wrapper">
                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800" className="card-img-top" alt="Ciberseguridad" />
                <span className="badge badge-type text-white position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill fs-7">Tecnólogo</span>
              </div>
              <div className="card-body p-4 d-flex flex-column">
                <h5 className="card-title fw-bold text-dark mb-2">Seguridad de la Información</h5>
                <p className="card-text text-muted small mb-4 flex-grow-1">
                  Protege infraestructura tecnológica, detecta vulnerabilidades digitales y gestiona firewalls y políticas de seguridad.
                </p>

                <div className="bg-light p-3 rounded-3 mb-4">
                  <div className="d-flex align-items-center mb-2 text-secondary small">
                    <i className="bi bi-clock-history text-success fs-5 me-2"></i>
                    <span><strong>Duración:</strong> 27 Meses</span>
                  </div>
                  <div className="d-flex align-items-center text-secondary small">
                    <i className="bi bi-geo-alt text-success fs-5 me-2"></i>
                    <span><strong>Modalidad:</strong> Presencial</span>
                  </div>
                </div>

                <a href="/programas/6" className="btn btn-sena-primary w-100 rounded-3 fw-bold py-2 text-white">
                  Ver Detalles <i className="bi bi-arrow-right ms-1 text-white"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
        {/* Botón de llamada a la acción principal */}
        <div className="text-center mt-5">
          <a href="/programas" className="btn btn-sena-primary rounded-pill px-5 py-3 fw-bold text-white">
            Ver Catálogo Completo de Programas <i className="bi bi-arrow-right ms-2 fs-5 align-middle text-white"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;