//import React from 'react'

const About = () => {
    return (
        <div className="container py-5">

            {/* ENCABEZADO */}
            <div className="text-center mb-5">
                <h1 className="fw-bold text-success display-5">
                    ¿Quiénes Somos?
                </h1>

                <p className="lead text-muted">
                    Conoce la misión y el propósito de nuestro centro de formación e innovación.
                </p>

                <hr className="w-25 mx-auto text-success border-2" />
            </div>

            {/* MISIÓN Y VISIÓN */}
            <div className="row g-4 mb-5">

                {/* MISIÓN */}
                <div className="col-md-6">
                    <div className="card h-100 shadow-sm border-0 rounded-3">
                        <div className="card-body p-4">

                            <div className="d-flex align-items-center mb-3">
                                <span className="fs-1 me-3">🎯</span>

                                <h3 className="card-title fw-bold text-success m-0">
                                    Nuestra Misión
                                </h3>
                            </div>

                            <p className="card-text text-secondary">
                                El SENA está encargado de cumplir la función que le corresponde
                                al Estado de invertir en el desarrollo social y técnico de los
                                trabajadores colombianos, ofreciendo y ejecutando la formación
                                profesional integral para el desarrollo de la estructura
                                productiva del país.
                            </p>

                        </div>
                    </div>
                </div>

                {/* VISIÓN */}
                <div className="col-md-6">
                    <div className="card h-100 shadow-sm border-0 rounded-3">
                        <div className="card-body p-4">

                            <div className="d-flex align-items-center mb-3">
                                <span className="fs-1 me-3">🚀</span>

                                <h3 className="card-title fw-bold text-success m-0">
                                    Nuestra Visión
                                </h3>
                            </div>

                            <p className="card-text text-secondary">
                                Ser una entidad de clase mundial en formación profesional
                                integral, referente nacional e internacional en innovación,
                                tecnología y aprendizaje continuo, impulsando el talento humano
                                de la región.
                            </p>

                        </div>
                    </div>
                </div>

            </div>

            {/* INFORMACIÓN DEL SISTEMA */}
            <div className="row text-center g-4">

                {/* GESTIÓN DE CENTROS */}
                <div className="col-md-4">
                    <div className="p-4 bg-light rounded-3 shadow-sm border">

                        <div className="fs-1 text-success mb-2">
                            🏢
                        </div>

                        <h5 className="fw-bold">
                            Gestión de Centros
                        </h5>

                        <p className="text-muted small">
                            Administración eficiente de sedes, ambientes de aprendizaje
                            y áreas de formación.
                        </p>

                    </div>
                </div>

                {/* INSTRUCTORES */}
                <div className="col-md-4">
                    <div className="p-4 bg-light rounded-3 shadow-sm border">

                        <div className="fs-1 text-success mb-2">
                            👨‍🏫
                        </div>

                        <h5 className="fw-bold">
                            Talento Instructores
                        </h5>

                        <p className="text-muted small">
                            Apoyo a la labor de formación y seguimiento académico de
                            nuestros docentes.
                        </p>

                    </div>
                </div>

                {/* RECURSOS TECNOLÓGICOS */}
                <div className="col-md-4">
                    <div className="p-4 bg-light rounded-3 shadow-sm border">

                        <div className="fs-1 text-success mb-2">
                            💻
                        </div>

                        <h5 className="fw-bold">
                            Recursos Tecnológicos
                        </h5>

                        <p className="text-muted small">
                            Control e inventario de los equipos de cómputo para el uso
                            de aprendices.
                        </p>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default About

