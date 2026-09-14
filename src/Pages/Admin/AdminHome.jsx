import { Link } from "react-router-dom";

function AdminHome() {
    return (
        <div className="container my-5">

            {/* Encabezado de Bienvenida */}
            <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
                <div>
                    <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-1 rounded-pill fw-semibold mb-2">
                        Panel de Control
                    </span>

                    <h1 className="fw-bold text-dark h2 mb-1">
                        Bienvenido, Administrador
                    </h1>

                    <p className="text-secondary small mb-0">
                        Gestión general del centro de formación y oferta educativa
                    </p>
                </div>

                <div>
                    <Link
                        to="/programas/crear"
                        className="btn btn-success fw-medium rounded-2 px-3 py-2 shadow-sm"
                    >
                        + Nuevo Programa
                    </Link>
                </div>
            </div>

            {/* Tarjetas de Métricas Rápidas */}
            <div className="row g-3 mb-5">

                {/* Oferta Total */}
                <div className="col-md-6 col-xl-3">
                    <div className="card border-0 shadow-sm rounded-3 p-3 bg-white">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-secondary small fw-bold d-block text-uppercase mb-1">
                                    Oferta Total
                                </span>

                                <h3 className="fw-bold text-dark mb-0">
                                    12
                                </h3>
                            </div>

                            <div className="p-3 bg-success-subtle rounded-3 text-success fs-4">
                                📚
                            </div>
                        </div>
                    </div>
                </div>

                {/* Convocatorias Activas */}
                <div className="col-md-6 col-xl-3">
                    <div className="card border-0 shadow-sm rounded-3 p-3 bg-white">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-secondary small fw-bold d-block text-uppercase mb-1">
                                    Convocatorias Activas
                                </span>

                                <h3 className="fw-bold text-dark mb-0">
                                    8
                                </h3>
                            </div>

                            <div className="p-3 bg-primary-subtle rounded-3 text-primary fs-4">
                                📢
                            </div>
                        </div>
                    </div>
                </div>

                {/* Aspirantes Inscritos */}
                <div className="col-md-6 col-xl-3">
                    <div className="card border-0 shadow-sm rounded-3 p-3 bg-white">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-secondary small fw-bold d-block text-uppercase mb-1">
                                    Aspirantes Inscritos
                                </span>

                                <h3 className="fw-bold text-dark mb-0">
                                    342
                                </h3>
                            </div>

                            <div className="p-3 bg-warning-subtle rounded-3 text-warning-emphasis fs-4">
                                👥
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cupos Disponibles */}
                <div className="col-md-6 col-xl-3">
                    <div className="card border-0 shadow-sm rounded-3 p-3 bg-white">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-secondary small fw-bold d-block text-uppercase mb-1">
                                    Cupos Disponibles
                                </span>

                                <h3 className="fw-bold text-dark mb-0">
                                    115
                                </h3>
                            </div>

                            <div className="p-3 bg-danger-subtle rounded-3 text-danger fs-4">
                                🎯
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Sección Principal */}
            <div className="row g-4">

                {/* Tabla de Programas Recientes */}
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm rounded-3 p-4 bg-white h-100">

                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="fw-bold text-dark mb-0">
                                Programas Gestionados
                            </h5>

                            <Link
                                to="/programas"
                                className="text-success text-decoration-none small fw-semibold"
                            >
                                Ver todos →
                            </Link>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-hover align-middle mb-0">

                                <thead className="table-light">
                                    <tr className="small text-secondary">
                                        <th>Programa</th>
                                        <th>Tipo</th>
                                        <th>Duración</th>
                                        <th>Estado</th>
                                        <th className="text-end">Acción</th>
                                    </tr>
                                </thead>

                                <tbody className="small">

                                    <tr>
                                        <td className="fw-bold text-dark">
                                            Análisis y Desarrollo de Software
                                        </td>

                                        <td>
                                            <span className="badge bg-light text-dark border">
                                                Tecnólogo
                                            </span>
                                        </td>

                                        <td>
                                            27 Meses
                                        </td>

                                        <td>
                                            <span className="badge bg-success-subtle text-success">
                                                Activo
                                            </span>
                                        </td>

                                        <td className="text-end">
                                            <Link
                                                to="#"
                                                className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                                            >
                                                Editar
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="fw-bold text-dark">
                                            Producción de Contenidos Digitales
                                        </td>

                                        <td>
                                            <span className="badge bg-light text-dark border">
                                                Tecnólogo
                                            </span>
                                        </td>

                                        <td>
                                            24 Meses
                                        </td>

                                        <td>
                                            <span className="badge bg-success-subtle text-success">
                                                Activo
                                            </span>
                                        </td>

                                        <td className="text-end">
                                            <Link
                                                to="#"
                                                className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                                            >
                                                Editar
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="fw-bold text-dark">
                                            Contabilización de Operaciones
                                        </td>

                                        <td>
                                            <span className="badge bg-light text-dark border">
                                                Técnico
                                            </span>
                                        </td>

                                        <td>
                                            15 Meses
                                        </td>

                                        <td>
                                            <span className="badge bg-secondary-subtle text-secondary">
                                                Cerrado
                                            </span>
                                        </td>

                                        <td className="text-end">
                                            <Link
                                                to="#"
                                                className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                                            >
                                                Editar
                                            </Link>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Módulos de Accesos Rápidos */}
                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm rounded-3 p-4 bg-white h-100">

                        <h5 className="fw-bold text-dark mb-3">
                            Acciones de Gestión
                        </h5>

                        <div className="d-grid gap-2">

                            {/* Vista Pública */}
                            <Link
                                to="/programas"
                                className="btn btn-outline-success text-start p-3 rounded-3 fw-medium"
                            >
                                🌐 <strong>Vista Pública de Ofertas</strong>

                                <span className="d-block small text-muted">
                                    Revisar cómo los usuarios ven los programas
                                </span>
                            </Link>

                            {/* Reportes */}
                            <Link
                                to="/Reports"
                                className="btn btn-outline-secondary text-start p-3 rounded-3 fw-medium"
                            >
                                📂 <strong>Reporte de Inscritos (Excel/PDF)</strong>

                                <span className="d-block small text-muted">
                                    Descargar base de datos de los postulados
                                </span>
                            </Link>

                            {/* Configuración */}
                            <Link
                                to="/Convocatorias"
                                className="btn btn-outline-secondary text-start p-3 rounded-3 fw-medium"
                            >
                                ⚙️ <strong>Configuración de Convocatorias</strong>

                                <span className="d-block small text-muted">
                                    Ajustar fechas límite de preinscripción
                                </span>
                            </Link>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default AdminHome;

