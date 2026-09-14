import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    // Estados del formulario
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    // Función para iniciar sesión
    const executeLogin = (e) => {

        e.preventDefault();

        // Verificar campos
        if (!name || !email || !role || !password) {

            alert("Por favor completa todos los campos.");

            return;
        }

        // Crear avatar
        const avatarUrl =
            `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=39A900&color=fff&bold=true`;

        // Crear sesión
        const userSession = {
            name: name,
            email: email,
            avatar: avatarUrl,
            role: role
        };

        // Guardar sesión
        localStorage.setItem(
            "user_session",
            JSON.stringify(userSession)
        );

        // Guardar rol
        localStorage.setItem(
            "user_role",
            role
        );

        // Guardar estado
        localStorage.setItem(
            "isLoggedIn",
            "true"
        );

        // Redirección según el rol
        if (role === "administrador") {

            navigate("/AdminHome");

        } else if (role === "profesor") {

            navigate("/");

        } else if (role === "estudiante") {

            navigate("/StudentHome");

        }

    };


    return (

        <div
            className="container d-flex justify-content-center align-items-center py-5"
            style={{ minHeight: "85vh" }}
        >

            <div
                className="card border-0 shadow-lg overflow-hidden"
                style={{
                    width: "100%",
                    maxWidth: "980px",
                    borderRadius: "24px"
                }}
            >

                <div className="row g-0">


                    {/* ========================================= */}
                    {/* PARTE IZQUIERDA */}
                    {/* ========================================= */}

                    <div
                        className="col-lg-5 text-white d-none d-lg-flex flex-column justify-content-between p-5"
                        style={{
                            background:
                                "linear-gradient(145deg, #00324d 0%, #001f31 100%)"
                        }}
                    >

                        <div>

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
                                    🔑
                                </span>

                            </div>


                            <h3 className="fw-bold mb-1">

                                Admin{" "}

                                <span style={{ color: "#39A900" }}>
                                    SENA
                                </span>

                            </h3>


                            <p className="small text-white-50">
                                Portal de Acceso Administrativo
                            </p>

                        </div>


                        <div className="my-auto py-4">

                            <h5 className="fw-bold text-white mb-2">
                                ¡Bienvenido de nuevo!
                            </h5>


                            <p className="text-white-50 small mb-4">

                                Ingresa con tu correo institucional y
                                selecciona tu rol asignado para acceder
                                al panel correspondiente.

                            </p>


                            <div
                                className="p-3 rounded-3"
                                style={{
                                    backgroundColor:
                                        "rgba(255, 255, 255, 0.05)",

                                    border:
                                        "1px solid rgba(255, 255, 255, 0.1)"
                                }}
                            >

                                <p className="mb-0 small text-white-50">

                                    🛡️{" "}

                                    <strong className="text-white">
                                        Acceso Seguro:
                                    </strong>{" "}

                                    Tu información está protegida mediante
                                    autenticación por roles.

                                </p>

                            </div>

                        </div>

                    </div>


                    {/* ========================================= */}
                    {/* PARTE DERECHA */}
                    {/* ========================================= */}

                    <div
                        className="col-lg-7 p-4 p-xl-5 bg-white d-flex flex-column justify-content-center"
                    >

                        {/* ENCABEZADO */}

                        <div className="d-flex justify-content-between align-items-center mb-4">

                            <div>

                                <h2 className="fw-bold text-dark mb-0 fs-3">
                                    Iniciar Sesión
                                </h2>

                                <p className="text-muted small mb-0">
                                    Ingresa tus credenciales para continuar
                                </p>

                            </div>


                            <span
                                className="badge rounded-pill px-3 py-2 fw-semibold d-none d-sm-inline-block"
                                style={{
                                    backgroundColor:
                                        "rgba(0, 50, 77, 0.08)",

                                    color: "#00324d"
                                }}
                            >
                                Sistema de Autenticación
                            </span>

                        </div>


                        {/* ========================================= */}
                        {/* FORMULARIO */}
                        {/* ========================================= */}

                        <form onSubmit={executeLogin}>

                            <div
                                className="p-4 mb-3 rounded-3"
                                style={{
                                    backgroundColor: "#f8f9fa",
                                    border: "1px solid #edf2f7"
                                }}
                            >


                                {/* NOMBRE */}

                                <div className="mb-3">

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
                                        autoComplete="name"
                                        autoFocus
                                        placeholder="Ej: Carlos Pérez"
                                        style={{
                                            borderRadius: "8px",
                                            fontSize: "0.9rem",
                                            padding: "0.6rem 0.8rem"
                                        }}
                                    />

                                </div>


                                {/* CORREO */}

                                <div className="mb-3">

                                    <label
                                        htmlFor="email"
                                        className="form-label fw-semibold text-secondary small mb-1"
                                    >
                                        Correo Electrónico
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
                                        autoComplete="email"
                                        placeholder="ejemplo@sena.edu.co"
                                        style={{
                                            borderRadius: "8px",
                                            fontSize: "0.9rem",
                                            padding: "0.6rem 0.8rem"
                                        }}
                                    />

                                </div>


                                {/* ROL */}

                                <div className="mb-3">

                                    <label
                                        htmlFor="role"
                                        className="form-label fw-semibold text-secondary small mb-1"
                                    >
                                        Ingresar como (Rol)
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
                                            fontSize: "0.9rem",
                                            padding: "0.6rem 0.8rem"
                                        }}
                                    >

                                        <option value="">
                                            Selecciona tu rol...
                                        </option>

                                        <option value="estudiante">
                                            Aprendiz / Estudiante
                                        </option>

                                        <option value="profesor">
                                            Instructor / Profesor
                                        </option>

                                        <option value="administrador">
                                            Administrador
                                        </option>

                                    </select>

                                </div>


                                {/* CONTRASEÑA */}

                                <div className="mb-0">

                                    <label
                                        htmlFor="password"
                                        className="form-label fw-semibold text-secondary small mb-1"
                                    >
                                        Contraseña
                                    </label>


                                    <input
                                        id="password"
                                        type="password"
                                        className="form-control bg-white"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        required
                                        autoComplete="current-password"
                                        placeholder="••••••••"
                                        style={{
                                            borderRadius: "8px",
                                            fontSize: "0.9rem",
                                            padding: "0.6rem 0.8rem"
                                        }}
                                    />

                                </div>

                            </div>


                            {/* ========================================= */}
                            {/* RECORDAR / CONTRASEÑA */}
                            {/* ========================================= */}

                            <div className="d-flex justify-content-between align-items-center mb-4 px-1">

                                <div className="form-check">

                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="remember"
                                        checked={remember}
                                        onChange={(e) =>
                                            setRemember(e.target.checked)
                                        }
                                    />

                                    <label
                                        className="form-check-label text-muted small"
                                        htmlFor="remember"
                                    >
                                        Recordarme
                                    </label>

                                </div>


                                <Link
                                    to="/password/reset"
                                    className="text-decoration-none small fw-semibold"
                                    style={{ color: "#00324d" }}
                                >
                                    ¿Olvidaste tu contraseña?
                                </Link>

                            </div>


                            {/* ========================================= */}
                            {/* BOTONES */}
                            {/* ========================================= */}

                            <div className="d-grid gap-2 mb-3">


                                {/* INGRESAR */}

                                <button
                                    type="submit"
                                    className="btn text-white fw-bold py-2 shadow-sm d-flex justify-content-center align-items-center"
                                    style={{
                                        backgroundColor: "#39A900",
                                        border: "none",
                                        borderRadius: "10px",
                                        fontSize: "0.95rem"
                                    }}
                                >
                                    Ingresar a la Plataforma
                                </button>


                                {/* CREAR CUENTA */}

                                <Link
                                    to="/register"
                                    className="btn fw-semibold py-2 shadow-sm text-decoration-none"
                                    style={{
                                        borderRadius: "10px",
                                        fontSize: "0.9rem",
                                        border: "1px solid #00324d",
                                        color: "#00324d",
                                        backgroundColor: "transparent"
                                    }}
                                >
                                    Crear una cuenta nueva
                                </Link>

                            </div>

                        </form>


                        {/* ========================================= */}
                        {/* PIE */}
                        {/* ========================================= */}

                        <div className="text-center pt-3 border-top">

                            <p className="text-muted small mb-0">

                                ¿No tienes una cuenta?{" "}

                                <Link
                                    to="/register"
                                    className="fw-bold text-decoration-none"
                                    style={{ color: "#39A900" }}
                                >
                                    Regístrate aquí
                                </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Login;
