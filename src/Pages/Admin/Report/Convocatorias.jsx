import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Convocatorias = () => {
  const navigate = useNavigate();

  const [programs, setPrograms] = useState([
    {
      nombre: "Análisis y Desarrollo de Software",
      tipo: "Tecnólogo",
      fecha_limite: "2026-10-15",
    },
    {
      nombre: "Gestión Empresarial",
      tipo: "Tecnólogo",
      fecha_limite: "2026-09-30",
    },
    {
      nombre: "Sistemas y Mantenimiento de Equipos",
      tipo: "Técnico",
      fecha_limite: "",
    },
  ]);

  const handleDateChange = (index, value) => {
    const updatedPrograms = [...programs];

    updatedPrograms[index].fecha_limite = value;

    setPrograms(updatedPrograms);
  };

  const handleSave = () => {
    alert("Guardado disponible próximamente");
  };

  return (
    <div className="container py-5">

      <div className="card shadow-sm border-0 rounded-4 p-4">

        <h3 className="fw-bold mb-1">
          ⚙️ Configuración de Convocatorias
        </h3>

        <p className="text-muted mb-4">
          Ajusta la fecha límite de preinscripción de cada programa.
        </p>

        <div className="table-responsive">

          <table className="table align-middle">

            <thead>
              <tr>
                <th>Programa</th>
                <th>Tipo</th>
                <th style={{ width: "260px" }}>
                  Fecha límite de inscripción
                </th>
                <th></th>
              </tr>
            </thead>

            <tbody>

              {programs.length > 0 ? (
                programs.map((program, index) => (
                  <tr key={index}>

                    <td>
                      {program.nombre}
                    </td>

                    <td>
                      <span className="badge bg-success">
                        {program.tipo}
                      </span>
                    </td>

                    <td>
                      <input
                        type="date"
                        value={program.fecha_limite}
                        onChange={(e) =>
                          handleDateChange(index, e.target.value)
                        }
                        className="form-control form-control-sm"
                      />
                    </td>

                    <td>
                      <button
                        className="btn btn-sm text-white"
                        style={{
                          backgroundColor: "#39A900",
                        }}
                        onClick={handleSave}
                      >
                        Guardar
                      </button>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center text-muted py-4"
                  >
                    No hay programas cargados.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

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

export default Convocatorias;