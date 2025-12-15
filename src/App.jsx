// src/App.jsx
import React from 'react';
// Importamos los componentes clave de React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importamos los componentes que serán las "páginas"
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import Envios from './pages/Envios';
import Contacto from './pages/Contacto';
import ProductoDetalle from './pages/Producto';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Ruta para la página principal (index) */}
        <Route path="/" element={<Home />} />

        {/* Ruta para la página de la tienda */}
        <Route path="/tienda" element={<Tienda />} />

        {/* Agregamos una ruta temporal para la página de Envíos */}
        <Route path="/envios" element={<Envios />} />

        {/* ruta contacto */}
        <Route path="/contacto" element={<Contacto />} />

        {/* También necesitamos una ruta para los detalles del producto */}
        <Route path="/producto/:id" element={<ProductoDetalle />} />


      </Routes>

      <Footer />
    </Router>
  );
}

export default App;