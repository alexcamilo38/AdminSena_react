import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const AreaDetail = () => {
  const { id } = useParams();
  const [area, setArea] = useState(null);

  // Lista mock temporal de áreas (reemplazar con una petición axios/fetch a backend)
  const areasData = [
    { id: 1, name: 'Sistemas y Desarrollo' },
    { id: 2, name: 'Gestión Ambiental' },
    { id: 3, name: 'Recursos Humanos' },
    { id: 4, name: 'Contabilidad y Finanzas' },
    { id: 5, name: 'Mercadeo y Publicidad' }
  ];

  useEffect(() => {
    // Buscar el área por ID
    const foundArea = areasData.find((item) => item.id === parseInt(id));
    setArea(foundArea);
  }, [id]);

  if (!area) {
    return (
      <div className="container py-4 text-center">
        <p className="text-muted">Cargando o el área no fue encontrada...</p>
        <Link to="/areas" className="btn btn-secondary btn-sm">Volver</Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="card shadow-lg border-0 rounded-4">
        <div 
          className="card-header text-white" 
          style={{ backgroundColor: '#25c72f' }}
        >
          <h5 className="mb-0">Detalle del Área</h5>
        </div>

        <div className="card-body">
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">
              <strong>ID:</strong> {area.id}
            </li>
            <li className="list-group-item">
              <strong>Nombre:</strong> {area.name}
            </li>
          </ul>

          <div className="d-flex justify-content-between">
            <Link to="/areas" className="btn btn-secondary">
              Volver a la Lista
            </Link>
            
            <Link to={`/areas/${area.id}/edit`} className="btn btn-warning">
              Editar Área
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaDetail;