import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  // ================================
  // DATOS DEL CARRUSEL
  // ================================

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72",
      title: "ADMIN SENA",
      text: "Bienvenido al sistema de gestión académica",
      button: "Comenzar",
      link: "/admin",
      buttonClass: "btn-success",
    },

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      title: "Innovación Tecnológica",
      text: "Gestiona ambientes y equipos del centro SENA",
      button: "Ver Equipos",
      link: "/computer/list",
      buttonClass: "btn-light",
    },

    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      title: "Formación Profesional",
      text: "Administra aprendices e instructores fácilmente",
      button: "Aprendices",
      link: "/apprentice/list",
      buttonClass: "btn-success",
    },

    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      title: "Centro de Formación",
      text: "Organiza áreas, programas y procesos académicos",
      button: "Explorar",
      link: "/areas/list",
      buttonClass: "btn-light",
    },
  ];


  // ================================
  // PROGRAMAS EDUCATIVOS
  // ================================

  const programas = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      alt: "ADSO",
      tipo: "Tecnólogo",
      titulo: "Análisis y Desarrollo de Software",
      descripcion:
        "Aprende a construir aplicaciones web, móviles y sistemas de software utilizando lenguajes modernos y bases de datos.",
      duracion: "27 Meses",
      modalidad: "Presencial / Virtual",
    },

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
      alt: "Redes",
      tipo: "Técnico",
      titulo: "Sistemas y Mantenimiento de Equipos",
      descripcion:
        "Especialízate en ensamble de computadores, diagnóstico de hardware y cableado estructurado para redes de datos.",
      duracion: "15 Meses",
      modalidad: "Presencial",
    },

    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      alt: "Gestión Empresarial",
      tipo: "Tecnólogo",
      titulo: "Gestión Empresarial",
      descripcion:
        "Adquiere conocimientos en administración de proyectos, finanzas, talento humano y procesos organizacionales.",
      duracion: "24 Meses",
      modalidad: "Virtual",
    },

    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d",
      alt: "Diseño Multimedia",
      tipo: "Tecnólogo",
      titulo: "Producción de Contenidos Digitales",
      descripcion:
        "Crea contenido interactivo, animación 2D/3D, edición de video y diseño de interfaces de usuario (UI/UX).",
      duracion: "24 Meses",
      modalidad: "Presencial",
    },

    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
      alt: "Contabilidad",
      tipo: "Técnico",
      titulo: "Contabilización de Operaciones",
      descripcion:
        "Aprende sobre gestión financiera, nómina, tributaria e impuestos en plataformas contables empresariales.",
      duracion: "15 Meses",
      modalidad: "Virtual / Presencial",
    },

    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      alt: "Ciberseguridad",
      tipo: "Tecnólogo",
      titulo: "Seguridad de la Información y Redes",
      descripcion:
        "Protege datos corporativos, previene vulnerabilidades digitales y administra firewalls e infraestructura informática.",
      duracion: "27 Meses",
      modalidad: "Presencial",
    },
  ];


  return (
    <main className="home">

      {/* ====================================
          CARRUSEL
      ==================================== */}

      <section className="home-carousel">

        <div
          id="senaCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >

          {/* INDICADORES */}

          <div className="carousel-indicators">

            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                data-bs-target="#senaCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-label={`Slide ${index + 1}`}
              />
            ))}

          </div>


          {/* SLIDES */}

          <div className="carousel-inner">

            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`carousel-item ${
                  index === 0 ? "active" : ""
                }`}
              >

                {/* IMAGEN */}

                <div className="carousel-image-container">

                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="carousel-image"
                  />

                  <div className="carousel-overlay"></div>

                </div>


                {/* TEXTO */}

                <div className="carousel-caption-custom">

                  <h1>
                    {slide.title}
                  </h1>

                  <p>
                    {slide.text}
                  </p>

                  <Link
                    to={slide.link}
                    className={`btn ${slide.buttonClass} carousel-button`}
                  >
                    {slide.button}
                  </Link>

                </div>

              </div>
            ))}

          </div>


          {/* FLECHA IZQUIERDA */}

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#senaCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>

            <span className="visually-hidden">
              Anterior
            </span>
          </button>


          {/* FLECHA DERECHA */}

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#senaCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>

            <span className="visually-hidden">
              Siguiente
            </span>
          </button>

        </div>

      </section>


      {/* ====================================
          OFERTA EDUCATIVA
      ==================================== */}

      <section className="container py-5">

        {/* ENCABEZADO */}

        <div className="text-center mb-5">

          <span className="badge bg-success px-3 py-2 fs-6 mb-2">
            Convocatorias Abiertas
          </span>

          <h2 className="fw-bold text-dark display-6">
            Oferta Educativa Destacada
          </h2>

          <p className="text-muted">
            Descubre los programas de formación técnica y
            tecnológica disponibles en nuestro centro
          </p>

          <hr className="w-25 mx-auto text-success border-2" />

        </div>


        {/* ====================================
            TARJETAS
        ==================================== */}

        <div className="row g-4">

          {programas.map((programa) => (

            <div
              className="col-md-4"
              key={programa.id}
            >

              <div className="card program-card h-100 shadow-sm border-0 rounded-3 overflow-hidden">

                {/* IMAGEN */}

                <div className="position-relative">

                  <img
                    src={programa.image}
                    className="card-img-top program-image"
                    alt={programa.alt}
                  />

                  <span className="badge bg-success position-absolute top-0 start-0 m-3 shadow-sm">
                    {programa.tipo}
                  </span>

                </div>


                {/* CONTENIDO */}

                <div className="card-body p-4 d-flex flex-column">

                  <h5 className="card-title fw-bold text-dark">
                    {programa.titulo}
                  </h5>

                  <p className="card-text text-muted small flex-grow-1">
                    {programa.descripcion}
                  </p>


                  {/* INFORMACIÓN */}

                  <ul className="list-unstyled text-secondary small mb-3">

                    <li className="mb-2">
                      ⏱️{" "}
                      <strong>Duración:</strong>{" "}
                      {programa.duracion}
                    </li>

                    <li>
                      📍{" "}
                      <strong>Modalidad:</strong>{" "}
                      {programa.modalidad}
                    </li>

                  </ul>


                  {/* BOTÓN */}

                  <Link
                    to={`/programas/${programa.id}`}
                    className="btn btn-outline-success w-100 fw-bold"
                  >
                    Ver Detalles
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* ====================================
            VER TODAS
        ==================================== */}

        <div className="text-center mt-5">

          <Link
            to="/programas"
            className="btn btn-success btn-lg px-5 shadow-sm fw-bold"
          >
            Ver Todas las Ofertas
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;
