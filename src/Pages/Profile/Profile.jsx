import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {

    const [name, setName] = useState("Carlos Pérez");
    const [documentType, setDocumentType] = useState("CC");
    const [documentNumber, setDocumentNumber] = useState("1001234567");
    const [email, setEmail] = useState("carlos.perez@sena.edu.co");
    const [role] = useState("Administrador");
    const [ficha, setFicha] = useState("3223899");

    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== passwordConfirmation) {
            alert("Las contraseñas no coinciden");
            return;
        }

        alert("Los cambios fueron guardados correctamente");
    };

    return (
        <div
            className="container d-flex justify-content-center align-items-center py-5"
            style={{ minHeight: "90vh" }}>

            <div
                className="card border-0 shadow-lg overflow-hidden"
                style={{
                    width: "100%",
                    maxWidth: "1080px",
                    borderRadius: "24px"
                }}>

                <div className="row g-0">

                    {/* COLUMNA IZQUIERDA */}
                    <div
                        className="col-lg-5 text-white d-none d-lg-flex flex-column justify-content-between p-5"
                        style={{
                            background:
                                "linear-gradient(145deg, #00324d 0%, #001f31 100%)"
                        }}>

                        <div>

                            {/* Avatar */}
                            <div
                                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-sm position-relative"
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    backgroundColor: "rgba(255, 255, 255, 0.12)",
                                    border: "2px solid #39A900"
                                }}>
                                <span className="fs-1">
                                    👤
                                </span>
                            </div>

                            <h3 className="fw-bold mb-1">
                                {name}
                            </h3>

                            <p className="small text-white-50 mb-0">
                                {email}
                            </p>

                            <span
                                className="badge rounded-pill mt-2 px-3 py-1 fw-semibold"
                                style={{
                                    backgroundColor: "#39A900",
                                    color: "#ffffff"
                                }}
                            >
                                {role}
                            </span>

                        </div>


                        {/* ESTADO DE LA CUENTA */}
                        <div className="my-auto py-4">

                            <h5 className="fw-bold text-white mb-3">
                                Estado de la Cuenta
                            </h5>


                            {/* Cuenta Activa */}
                            <div className="d-flex align-items-start mb-3">

                                <div
                                    className="rounded-circle me-3 d-flex align-items-center justify-content-center flex-shrink-0"
                                    style={{
                                        width: "32px",
                                        height: "32px",
                                        backgroundColor: "rgba(57, 169, 0, 0.2)",
                                        color: "#39A900"
                                    }}
                                >
                                    ✓
                                </div>

                                <div>
                                    <h6 className="mb-0 fw-bold small text-white">
                                        Cuenta Activa
                                    </h6>

                                    <p className="mb-0 text-white-50 small">
                                        Acceso habilitado en la plataforma centralizada.
                                    </p>
                                </div>

                            </div>


                            {/* Ficha Asignada */}
                            <div className="d-flex align-items-start mb-3">

                                <div
                                    className="rounded-circle me-3 d-flex align-items-center justify-content-center flex-shrink-0"
                                    style={{
                                        width: "32px",
                                        height: "32px",
                                        backgroundColor: "rgba(57, 169, 0, 0.2)",
                                        color: "#39A900"
                                    }}
                                >
                                    ✓
                                </div>

                                <div>
                                    <h6 className="mb-0 fw-bold small text-white">
                                        Ficha Asignada
                                    </h6>

                                    <p className="mb-0 text-white-50 small">
                                        Ficha N° {ficha}
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* COLUMNA DERECHA */}
                    <div className="col-lg-7 p-4 p-xl-5 bg-white">

                        {/* ENCABEZADO */}
                        <div className="d-flex justify-content-between align-items-center mb-4">

                            <div>
                                <h2 className="fw-bold text-dark mb-0 fs-3">
                                    Perfil de Usuario
                                </h2>

                                <p className="text-muted small mb-0">
                                    Gestiona y actualiza tu información personal
                                </p>
                            </div>

                            <span
                                className="badge rounded-pill px-3 py-2 fw-semibold d-none d-sm-inline-block"
                                style={{
                                    backgroundColor: "rgba(57, 169, 0, 0.1)",
                                    color: "#39A900"
                                }}
                            >
                                Datos Registrados
                            </span>

                        </div>


                        <form onSubmit={handleSubmit}>

                            {/* SECCIÓN 1 */}
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
                                    1. Identificación Personal
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
                                        onChange={(e) => setName(e.target.value)}
                                        required
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
                                            onChange={(e) => setDocumentType(e.target.value)}
                                            required
                                            style={{
                                                borderRadius: "8px",
                                                fontSize: "0.9rem"
                                            }}
                                        >
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
                                            style={{
                                                borderRadius: "8px",
                                                fontSize: "0.9rem"
                                            }}
                                        />

                                    </div>

                                </div>

                            </div>


                            {/* SECCIÓN 2 */}
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
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        style={{
                                            borderRadius: "8px",
                                            fontSize: "0.9rem"
                                        }}
                                    />

                                </div>


                                <div className="row g-2">

                                    {/* Rol */}
                                    <div className="col-md-6">

                                        <label
                                            htmlFor="role"
                                            className="form-label fw-semibold text-secondary small mb-1"
                                        >
                                            Rol de Usuario
                                        </label>

                                        <select
                                            id="role"
                                            className="form-select bg-light"
                                            value={role}
                                            disabled
                                            style={{
                                                borderRadius: "8px",
                                                fontSize: "0.9rem"
                                            }}
                                        >
                                            <option>
                                                {role}
                                            </option>
                                        </select>

                                    </div>


                                    {/* Ficha */}
                                    <div className="col-md-6">

                                        <label
                                            htmlFor="ficha"
                                            className="form-label fw-semibold text-secondary small mb-1"
                                        >
                                            N° Ficha
                                        </label>

                                        <input
                                            id="ficha"
                                            type="text"
                                            className="form-control bg-white"
                                            value={ficha}
                                            onChange={(e) => setFicha(e.target.value)}
                                            style={{
                                                borderRadius: "8px",
                                                fontSize: "0.9rem"
                                            }}
                                        />

                                    </div>

                                </div>

                            </div>


                            {/* SECCIÓN 3 */}
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
                                    3. Seguridad (Dejar en blanco si no deseas cambiarla)
                                </span>


                                <div className="row g-2">

                                    <div className="col-md-6">

                                        <label
                                            htmlFor="password"
                                            className="form-label fw-semibold text-secondary small mb-1"
                                        >
                                            Nueva Contraseña
                                        </label>

                                        <input
                                            id="password"
                                            type="password"
                                            className="form-control bg-white"
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
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
                                            Confirmar Nueva Contraseña
                                        </label>

                                        <input
                                            id="password-confirm"
                                            type="password"
                                            className="form-control bg-white"
                                            placeholder="••••••••"
                                            value={passwordConfirmation}
                                            onChange={(e) =>
                                                setPasswordConfirmation(e.target.value)
                                            }
                                            style={{
                                                borderRadius: "8px",
                                                fontSize: "0.9rem"
                                            }}
                                        />

                                    </div>

                                </div>

                            </div>


                            {/* BOTONES */}
                            <div className="d-flex align-items-center justify-content-between pt-2 border-top">

                                <Link
                                    to="/AdminHome"
                                    className="btn btn-link text-decoration-none px-0 fw-bold small"
                                    style={{ color: "#00324d" }}>
                                    ← Volver al Panel
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
                                    Guardar Cambios
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Profile;

