import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // <--- 1. Importamos Link

const Header = () => {
    // Estado y referencias (sin cambios aquí)
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
    const toggleRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Nueva función: Cierra el menú móvil al hacer clic en un enlace
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    // useEffect para manejar la lógica de cerrar al hacer click fuera (sin cambios)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && 
                navRef.current && !navRef.current.contains(event.target) && 
                toggleRef.current && !toggleRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header className="header">
            <div className="logo">
                <img src="/img/logo.jpg" alt="Logo de Sport Lion" /> 
            </div>

            <button 
                className="menu-toggle" 
                aria-label="Toggle navigation"
                onClick={toggleMenu}
                ref={toggleRef}
            >
                {isOpen ? '✕' : '&#9776;'} 
            </button>

            <nav 
                className={`nav ${isOpen ? 'nav-open' : ''}`}
                ref={navRef}
            >
                {/* 2. Reemplazo de <a> por <Link> y uso de 'to' */}
                <Link to="/" onClick={handleLinkClick}>Inicio</Link>
                <Link to="/tienda" onClick={handleLinkClick}>Tienda</Link>
                <Link to="/envios" onClick={handleLinkClick}>Envíos</Link>
                <Link to="/contacto" onClick={handleLinkClick}>Contacto</Link>
                {/* NOTA: Las rutas /envios y /contacto deben existir en App.jsx */}
            </nav>
        </header>
    );
};

export default Header;