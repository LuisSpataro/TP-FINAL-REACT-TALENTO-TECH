import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedGrid = () => {
    return (
        <section className="featured-grid">
            <div className="grid-item">
                <img src="/img/top-01.jpeg" alt="Recién Llegados" />
                <div className="item-overlay">
                    <h2>RECIÉN LLEGADOS</h2>
                     <Link to="/tienda" className="btn-link">→</Link>
                </div>
            </div>
            <div className="grid-item">
                <img src="/img/short-calza-hombre-01-00.jpeg" alt="Más Vendidos" />
                <div className="item-overlay">
                    <h2>MÁS VENDIDOS</h2>
                    <Link to="/tienda" className="btn-link">→</Link>
                </div>
            </div>
            <div className="grid-item">
                <img src="/img/crop-top-01-00.jpeg" alt="Mira todo el catálogo" />
                <div className="item-overlay">
                    <h2>MIRA TODO EL CATALOGO</h2>
                    <Link to="/tienda" className="btn-link">→</Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedGrid;