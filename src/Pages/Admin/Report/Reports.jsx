import { useNavigate } from "react-router-dom";

const Reports = () => {
    const navigate = useNavigate();

    // Datos de ejemplo
    const inscripciones = [
        {
            nombre: "Carlos Pérez",
            documento: "1001234567",
            email: "carlos@correo.com",
            telefono: "3001234567",
            programa: "Análisis y Desarrollo de Software",
            fecha: "05/09/2026",
        },
        {
            nombre: "María López",
            documento: "1002345678",
            email: "maria@correo.com",
            telefono: "3009876543",
            programa: "Gestión Empresarial",
            fecha: "06/09/2026",
        },
        {
            nombre: "Juan Torres",
            documento: "1003456789",
            email: "juan@correo.com",
            telefono: null,
            programa: "Seguridad de la Información y Redes",
            fecha: "07/09/2026",
        },
    ];

    // Exportar Excel
    const exportExcel = () => {
        alert("Exportación disponible próximamente");
    };

    // Exportar PDF
    const exportPDF = () => {
        alert("Exportación disponible próximamente");
    };

    return (
        <div className="container py-5">

            <div className="card shadow-sm border-0 rounded-4 p-4">

                {/* ENCABEZADO */}
                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>
                        <h3 className="fw-bold mb-1">
                            📂 Reporte de Inscritos
                        </h3>

                        <p className="text-muted mb-0">
                            Total: {inscripciones.length} postulados
                        </p>
                    </div>

                    <div className="d-flex gap-2">

                        <button
                            className="btn btn-outline-success"
                            onClick={exportExcel}
                        >
                            Excel
                        </button>

                        <button
                            className="btn btn-outline-danger"
                            onClick={exportPDF}
                        >
                            PDF
                        </button>

                    </div>

                </div>


                {/* TABLA */}
                <div className="table-responsive">

                    <table className="table align-middle">

                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Documento</th>
                                <th>Correo</th>
                                <th>Teléfono</th>
                                <th>Programa</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>

                        <tbody>

                            {inscripciones.length > 0 ? (

                                inscripciones.map((inscripcion, index) => (

                                    <tr key={index}>

                                        <td>
                                            {inscripcion.nombre}
                                        </td>

                                        <td>
                                            {inscripcion.documento}
                                        </td>

                                        <td>
                                            {inscripcion.email}
                                        </td>

                                        <td>
                                            {inscripcion.telefono || "—"}
                                        </td>

                                        <td>
                                            {inscripcion.programa}
                                        </td>

                                        <td>
                                            {inscripcion.fecha}
                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>
                                    <td
                                        colSpan="6"
                                        className="text-center text-muted py-4"
                                    >
                                        Aún no hay inscritos.
                                    </td>
                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>


                {/* VOLVER */}
                <button
                    onClick={() => navigate(-1)}
                    className="btn btn-secondary w-auto mt-3"
                >
                    Volver
                </button>

            </div>

        </div>
    );
};

export default Reports;