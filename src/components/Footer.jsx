import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <div>
                    <h4>INFO</h4>
                    <a href="#">Quiénes somos</a>
                    <h4>ENVIOS</h4>
                    <a href="/envios">Formas de envío</a>
                    <h4>SÍGUENOS</h4>
                    <a href="https://www.instagram.com/sportlion.jen/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
            <div className="copyright">
                © 2025 Sport Lion. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;