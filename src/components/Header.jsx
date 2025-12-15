import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
    const toggleRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

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
                {isOpen ? 'x' : '☰'} 
            </button>

            <nav 
                className={`nav ${isOpen ? 'nav-open' : ''}`}
                ref={navRef}
            >
                <Link to="/" onClick={handleLinkClick}>Inicio</Link>
                <Link to="/tienda" onClick={handleLinkClick}>Tienda</Link>
                <Link to="/envios" onClick={handleLinkClick}>Envíos</Link>
                <Link to="/contacto" onClick={handleLinkClick}>Contacto</Link>
            </nav>
        </header>
    );
};

export default Header;
