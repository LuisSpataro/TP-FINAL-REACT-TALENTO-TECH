import React from 'react';

const HeroBanner = () => {
    return (
        <section className="hero-banner">
            <div className="hero-content">
                <h1>ES MOMENTO DE ELEVAR TU JUEGO</h1>
                <Link to="/tienda" className="btn-primary">Ver Productos</Link>
            </div>
        </section>
    );
};

export default HeroBanner;