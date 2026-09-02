import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-content">

                    {/* Información del aprendiz */}
                    <div className="footer-left">
                        <h5>Alex Camilo Vergara Flor</h5>

                        <p>
                            <span className="clipboard">📋</span>
                            Ficha: <strong>3223899</strong>
                        </p>
                    </div>

                    {/* Información del sistema */}
                    <div className="footer-right">
                        <h5>
                            ADMIN <span>SENA</span>
                        </h5>

                        <p>Panel de Administración Académica</p>
                    </div>

                </div>

                {/* Línea */}
                <div className="footer-line"></div>

                {/* Copyright */}
                <div className="footer-bottom">
                    © {new Date().getFullYear()} <strong>Camilo</strong>. Todos los derechos reservados.
                </div>

            </div>
        </footer>
    );
}

export default Footer;
