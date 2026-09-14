import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  // Estados del formulario
  const [name, setName] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [ficha, setFicha] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [terms, setTerms] = useState(false);

  // Registrar usuario
  const handleRegister = (e) => {

    e.preventDefault();

    // Verificar contraseñas
    if (password !== passwordConfirmation) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    // Verificar términos
    if (!terms) {
      alert("Debes aceptar los términos de uso.");
      return;
    }

    // Verificar campos
    if (
      !name ||
      !documentType ||
      !documentNumber ||
      !email ||
      !role ||
      !password ||
      !passwordConfirmation
    ) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    // Crear usuario
    const newUser = {
      name: name,
      documentType: documentType,
      documentNumber: documentNumber,
      email: email,
      role: role,
      ficha: ficha,
    };

    // Guardar usuario
    localStorage.setItem(
      "registered_user",
      JSON.stringify(newUser)
    );

    alert("Cuenta registrada correctamente.");

    // Ir al Login
    navigate("/login");
  };


  return (

    <div
      className="container d-flex justify-content-center align-items-center py-5"
      style={{ minHeight: "90vh" }}
    >

      <div
        className="card border-0 shadow-lg overflow-hidden"
        style={{
          width: "100%",
          maxWidth: "1080px",
          borderRadius: "24px"
        }}
      >

        <div className="row g-0">


          {/* ========================================= */}
          {/* COLUMNA IZQUIERDA */}
          {/* ========================================= */}

          <div
            className="col-lg-5 text-white d-none d-lg-flex flex-column justify-content-between p-5"
            style={{
              background:
                "linear-gradient(145deg, #00324d 0%, #001f31 100%)"
            }}
          >

            <div>

              {/* Logo */}
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-sm"
                style={{
                  width: "56px",
                  height: "56px",
                  backgroundColor:
                    "rgba(255, 255, 255, 0.12)"
                }}
              >

                <span className="fs-3">
                  🏛️
                </span>

              </div>


              <h3 className="fw-bold mb-1">

                Admin{" "}

                <span style={{ color: "#39A900" }}>
                  SENA
                </span>

              </h3>


              <p className="small text-white-50">
                Plataforma Integrada de Gestión Académica
              </p>

            </div>


            {/* Puntos clave */}

            <div className="my-auto py-4">

              <h5 className="fw-bold text-white mb-3">
                Únete a la plataforma centralizada
              </h5>


              {/* Punto 1 */}

              <div className="d-flex align-items-start mb-3">

                <div
                  className="rounded-circle me-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor:
                      "rgba(57, 169, 0, 0.2)",
                    color: "#39A900"
                  }}
                >
                  ✓
                </div>


                <div>

                  <h6 className="mb-0 fw-bold small text-white">
                    Gestión de Fichas y Programas
                  </h6>

                  <p className="mb-0 text-white-50 small">
                    Acceso directo a la administración de convocatorias activas.
                  </p>

                </div>

              </div>


              {/* Punto 2 */}

              <div className="d-flex align-items-start mb-3">

                <div
                  className="rounded-circle me-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor:
                      "rgba(57, 169, 0, 0.2)",
                    color: "#39A900"
                  }}
                >
                  ✓
                </div>


                <div>

                  <h6 className="mb-0 fw-bold small text-white">
                    Seguridad Centralizada
                  </h6>

                  <p className="mb-0 text-white-50 small">
                    Validación por roles para aprendices,
                    instructores y administradores.
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* ========================================= */}
          {/* COLUMNA DERECHA */}
          {/* ========================================= */}

          <div className="col-lg-7 p-4 p-xl-5 bg-white">

            {/* Encabezado */}

            <div className="d-flex justify-content-between align-items-center mb-4">

              <div>

                <h2 className="fw-bold text-dark mb-0 fs-3">
                  Registro de Usuario
                </h2>

                <p className="text-muted small mb-0">
                  Completa la información requerida para habilitar tu cuenta.
                </p>

              </div>


              <span
                className="badge rounded-pill px-3 py-2 fw-semibold d-none d-sm-inline-block"
                style={{
                  backgroundColor:
                    "rgba(57, 169, 0, 0.1)",
                  color: "#39A900"
                }}
              >
                Portal Oficial
              </span>

            </div>


            {/* ========================================= */}
            {/* FORMULARIO */}
            {/* ========================================= */}

            <form onSubmit={handleRegister}>


              {/* ========================================= */}
              {/* 1. IDENTIFICACIÓN */}
              {/* ========================================= */}

              <div
                className="p-3 mb-3 rounded-3"
                style={{
                  backgroundColor: "#f8f9fa",
                  border: "1px solid #edf2f7"
                }}
              >

                <span
                  className="fw-bold text-uppercase d-block mb-2"
                  style={{
                    fontSize: "0.75rem",
                    color: "#00324d",
                    letterSpacing: "0.5px"
                  }}
                >
                  1. Identificación Personales
                </span>


                {/* Nombre */}

                <div className="mb-2">

                  <label
                    htmlFor="name"
                    className="form-label fw-semibold text-secondary small mb-1"
                  >
                    Nombre Completo
                  </label>


                  <input
                    id="name"
                    type="text"
                    className="form-control bg-white"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    required
                    autoFocus
                    placeholder="Ej. Carlos Pérez"
                    style={{
                      borderRadius: "8px",
                      fontSize: "0.9rem"
                    }}
                  />

                </div>


                {/* Documento */}

                <div className="row g-2">

                  <div className="col-md-5">

                    <label
                      htmlFor="document_type"
                      className="form-label fw-semibold text-secondary small mb-1"
                    >
                      Tipo Doc.
                    </label>


                    <select
                      id="document_type"
                      className="form-select bg-white"
                      value={documentType}
                      onChange={(e) =>
                        setDocumentType(e.target.value)
                      }
                      required
                      style={{
                        borderRadius: "8px",
                        fontSize: "0.9rem"
                      }}
                    >

                      <option value="">
                        Seleccionar...
                      </option>

                      <option value="CC">
                        C.C. Cédula
                      </option>

                      <option value="TI">
                        T.I. Tarjeta Identidad
                      </option>

                      <option value="CE">
                        C.E. Extranjería
                      </option>

                    </select>

                  </div>


                  <div className="col-md-7">

                    <label
                      htmlFor="document_number"
                      className="form-label fw-semibold text-secondary small mb-1"
                    >
                      N° Documento
                    </label>


                    <input
                      id="document_number"
                      type="text"
                      className="form-control bg-white"
                      value={documentNumber}
                      onChange={(e) =>
                        setDocumentNumber(e.target.value)
                      }
                      required
                      placeholder="1001234567"
                      style={{
                        borderRadius: "8px",
                        fontSize: "0.9rem"
                      }}
                    />

                  </div>

                </div>

              </div>


              {/* ========================================= */}
              {/* 2. INFORMACIÓN ACADÉMICA */}
              {/* ========================================= */}

              <div
                className="p-3 mb-3 rounded-3"
                style={{
                  backgroundColor: "#f8f9fa",
                  border: "1px solid #edf2f7"
                }}
              >

                <span
                  className="fw-bold text-uppercase d-block mb-2"
                  style={{
                    fontSize: "0.75rem",
                    color: "#00324d",
                    letterSpacing: "0.5px"
                  }}
                >
                  2. Información Académica
                </span>


                {/* Correo */}

                <div className="mb-2">

                  <label
                    htmlFor="email"
                    className="form-label fw-semibold text-secondary small mb-1"
                  >
                    Correo Electrónico Institucional
                  </label>


                  <input
                    id="email"
                    type="email"
                    className="form-control bg-white"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    required
                    placeholder="ejemplo@sena.edu.co"
                    style={{
                      borderRadius: "8px",
                      fontSize: "0.9rem"
                    }}
                  />

                </div>


                {/* Rol y ficha */}

                <div className="row g-2">

                  <div className="col-md-6">

                    <label
                      htmlFor="role"
                      className="form-label fw-semibold text-secondary small mb-1"
                    >
                      Rol de Usuario
                    </label>


                    <select
                      id="role"
                      className="form-select bg-white"
                      value={role}
                      onChange={(e) =>
                        setRole(e.target.value)
                      }
                      required
                      style={{
                        borderRadius: "8px",
                        fontSize: "0.9rem"
                      }}
                    >

                      <option value="">
                        Seleccionar...
                      </option>

                      <option value="estudiante">
                        Aprendiz
                      </option>

                      <option value="profesor">
                        Instructor
                      </option>

                      <option value="administrador">
                        Administrador
                      </option>

                    </select>

                  </div>


                  <div className="col-md-6">

                    <label
                      htmlFor="ficha"
                      className="form-label fw-semibold text-secondary small mb-1"
                    >
                      N° Ficha{" "}
                      <span className="text-muted fw-normal">
                        (Opcional)
                      </span>
                    </label>


                    <input
                      id="ficha"
                      type="text"
                      className="form-control bg-white"
                      value={ficha}
                      onChange={(e) =>
                        setFicha(e.target.value)
                      }
                      placeholder="Ej. 3223899"
                      style={{
                        borderRadius: "8px",
                        fontSize: "0.9rem"
                      }}
                    />

                  </div>

                </div>

              </div>


              {/* ========================================= */}
              {/* 3. SEGURIDAD */}
              {/* ========================================= */}

              <div className="row g-2 mb-3">

                <div className="col-md-6">

                  <label
                    htmlFor="password"
                    className="form-label fw-semibold text-secondary small mb-1"
                  >
                    Contraseña
                  </label>


                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    required
                    placeholder="••••••••"
                    style={{
                      borderRadius: "8px",
                      fontSize: "0.9rem"
                    }}
                  />

                </div>


                <div className="col-md-6">

                  <label
                    htmlFor="password-confirm"
                    className="form-label fw-semibold text-secondary small mb-1"
                  >
                    Confirmar Contraseña
                  </label>


                  <input
                    id="password-confirm"
                    type="password"
                    className="form-control"
                    value={passwordConfirmation}
                    onChange={(e) =>
                      setPasswordConfirmation(e.target.value)
                    }
                    required
                    placeholder="••••••••"
                    style={{
                      borderRadius: "8px",
                      fontSize: "0.9rem"
                    }}
                  />

                </div>

              </div>


              {/* ========================================= */}
              {/* TÉRMINOS */}
              {/* ========================================= */}

              <div className="mb-4 form-check">

                <input
                  className="form-check-input"
                  type="checkbox"
                  id="terms"
                  checked={terms}
                  onChange={(e) =>
                    setTerms(e.target.checked)
                  }
                  required
                />


                <label
                  className="form-check-label text-muted small"
                  htmlFor="terms"
                >

                  Acepto los{" "}

                  <a
                    href="#"
                    className="text-decoration-none fw-semibold"
                    style={{ color: "#00324d" }}
                  >
                    términos de uso
                  </a>{" "}

                  y la política de tratamiento de datos.

                </label>

              </div>


              {/* ========================================= */}
              {/* BOTONES */}
              {/* ========================================= */}

              <div className="d-flex align-items-center justify-content-between pt-2 border-top">

                <Link
                  to="/login"
                  className="btn btn-link text-decoration-none px-0 fw-bold small"
                  style={{ color: "#00324d" }}
                >
                  ← Volver al Login
                </Link>


                <button
                  type="submit"
                  className="btn text-white fw-bold px-4 py-2 shadow-sm"
                  style={{
                    backgroundColor: "#39A900",
                    borderRadius: "10px",
                    fontSize: "0.95rem"
                  }}
                >
                  Registrar Cuenta
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Register;
