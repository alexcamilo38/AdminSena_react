import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Program = () => {
  // Datos ficticios iniciales de programas de formación
  const [programs, setPrograms] = useState([
    {
      id: 1,
      name: 'Análisis y Desarrollo de Software',
      description: 'Construcción de software web y móvil utilizando tecnologías modernas.',
      type: 'Tecnólogo',
      duration: '24 Meses',
      modality: 'Presencial',
      area_name: 'Sistemas y Desarrollo',

    },
    {
      id: 2,
      name: 'Conservación de Recursos Naturales',
      description: 'Monitoreo y protección de ecosistemas y cuencas hidrográficas.',
      type: 'Técnico',
      duration: '12 Meses',
      modality: 'Presencial',
      area_name: 'Gestión Ambiental',

    },
    {
      id: 3,
      name: 'Gestión del Talento Humano',
      description: 'Administración del capital humano en organizaciones del sector productivo.',
      type: 'Tecnólogo',
      duration: '24 Meses',
      modality: 'Virtual',
      area_name: 'Recursos Humanos',
    }
  ]);

  // Función ficticia para simular la eliminación de un programa
  const handleDelete = (id) => {
    const confirmDelete = window.confirm('¿Está seguro de eliminar este programa?');
    if (confirmDelete) {
      setPrograms(programs.filter((program) => program.id !== id));
    }
  };

  return (
    <div className="container py-4">
      {/* Encabezado con título y botón de registro */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold text-dark">Lista de Programas</h1>

        <Link to="/ProgramCreate" className="btn btn-success shadow-sm">
          <i className="bi bi-plus-circle me-1"></i> Nuevo Programa
        </Link>
      </div>

      {/* Tarjeta y Tabla */}
      <div className="card shadow-lg border-0 rounded-4">
        <div
          className="card-header text-white encabezado-tabla"
          style={{ backgroundColor: '#25c72f' }}
        >
          <h5 className="mb-0">Programas Registrados</h5>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table id="idProgram" className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Tipo</th>
                  <th>Duración</th>
                  <th>Modalidad</th>
                  <th>Área</th>

                  <th className="text-center">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {programs.length > 0 ? (
                  programs.map((program) => (
                    <tr key={program.id}>
                      <td>{program.id}</td>

                      <td className="fw-semibold">
                        {program.name}
                      </td>

                      <td
                        className="small text-muted"
                        style={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                      >
                        {program.description}
                      </td>

                      <td>
                        <span className="badge bg-light text-dark border shadow-sm px-2 py-1 fs-6 fw-normal">
                          <i className="bi bi-award-fill text-primary me-1"></i>{program.type}
                        </span>
                      </td>

                      <td>{program.duration}</td>

                      <td>{program.modality}</td>

                      <td>{program.area_name || 'N/A'}</td>


                      <td className="text-center">
                        <Link
                          to={`/Program/${program.id}`}
                          className="btn btn-info btn-sm me-1 text-white"
                        >
                          Mostrar
                        </Link>

                        <Link
                          to={`/Program/${program.id}/edit`}
                          className="btn btn-warning btn-sm me-1 text-white"
                        >
                          Editar
                        </Link>

                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(program.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center py-3 text-muted">
                      No hay programas registrados.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;