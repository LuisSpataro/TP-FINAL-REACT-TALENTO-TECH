// src/pages/Home.jsx

import React from 'react';
import HeroBanner from '../components/HeroBanner';
import FeaturedGrid from '../components/FeaturedGrid';
import SloganSection from '../components/SloganSection';
import ProductList from '../components/ProductList';

const Home = () => {
    return (
        <main>
            <HeroBanner />
            <FeaturedGrid />
            <SloganSection />
            <ProductList />
        </main>
    );
};

// NOTA IMPORTANTE: Si ves que Footer y Header también dan error,
// la estructura que te di en el mensaje anterior para Home.jsx
// no debe tenerlos, porque ya están en App.jsx:

/*
// Si tenías estas líneas, DEBES ELIMINARLAS de Home.jsx, ya que están en App.jsx
// import Header from '../components/Header'; // <-- ELIMINAR ESTO
// import Footer from '../components/Footer'; // <-- ELIMINAR ESTO
*/

export default Home;