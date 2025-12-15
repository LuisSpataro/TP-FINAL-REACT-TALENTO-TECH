import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Usaremos Link en lugar de window.location.href
import '../Tienda.css';

// Componente para la Tarjeta de Producto (reutilizable)
// Usamos props para pasar los datos
const ProductCard = ({ product }) => {
    // CORRECCIÓN DE RUTA DE IMAGEN (igual que en ProductList)
    const imagePath = product.images[0];
    const finalImagePath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    
    // Función para manejar el clic (si quieres guardar el producto, puedes usar contexto o Redux)
    const handleClick = () => {
        // En un proyecto real, se navega a /producto/:id
        console.log(`Navegando a detalles de: ${product.name}`);
        // Ejemplo de uso de Link, aunque ahora lo pondremos en el <Link> en el return
    };

    return (
        // Usamos <Link> de React Router para navegar sin recargar
        <Link 
            to={`/producto/${product.id}`} 
            className="product-card" 
            onClick={handleClick}
        >
            <img src={finalImagePath} alt={product.name} />
            <p className="name">{product.name}</p>
            <p className="price">${product.price.toLocaleString("es-AR")}</p>
        </Link>
    );
};


const Tienda = () => {
    // 1. Estados para manejar los datos y el filtro activo
    const [allProducts, setAllProducts] = useState([]); // Guarda todos los productos originales
    const [filteredProducts, setFilteredProducts] = useState([]); // Guarda la lista actual a mostrar
    const [activeFilter, setActiveFilter] = useState('all'); // Estado del botón activo
    const [loading, setLoading] = useState(true);
    
    // 2. useEffect: Carga inicial de datos (Reemplazo del primer fetch y DOMContentLoaded)
    useEffect(() => {
        fetch('/data/products.json') 
            .then(res => res.json())
            .then(data => {
                setAllProducts(data); // Guardamos todos los productos
                setFilteredProducts(data); // Inicialmente, mostramos todos
            })
            .catch(err => console.error("Error al cargar el catálogo:", err))
            .finally(() => setLoading(false));
    }, []); 

    // 3. Función de Filtrado (Reemplazo de los event listeners de los botones)
    const handleFilter = (type) => {
        setActiveFilter(type); // Seteamos el botón activo

        if (type === 'all') {
            setFilteredProducts(allProducts);
        } else {
            // Aplicamos el filtro usando .filter() de JavaScript
            setFilteredProducts(allProducts.filter(p => p.type === type));
        }
    };
    
    if (loading) return <p className="loading-message">Cargando catálogo...</p>;

    return (
        <main className="tienda-layout">
            
            {/* SIDEBAR */}
            <aside className="tienda-sidebar">
                <button 
                    className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} 
                    onClick={() => handleFilter('all')} 
                    data-type="all"
                >
                    Todos
                </button>
                <button 
                    className={`filter-btn ${activeFilter === 'mujer' ? 'active' : ''}`} 
                    onClick={() => handleFilter('mujer')} 
                    data-type="mujer"
                >
                    Ropa Mujer
                </button>
                <button 
                    className={`filter-btn ${activeFilter === 'hombre' ? 'active' : ''}`} 
                    onClick={() => handleFilter('hombre')} 
                    data-type="hombre"
                >
                    Ropa Hombre
                </button>
            </aside>

            {/* CATÁLOGO */}
            <section className="tienda-catalogo" id="catalogo">
                {/* 4. Renderizado: Usamos .map para renderizar la lista filtrada */}
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>No hay productos que coincidan con el filtro.</p>
                )}
            </section>

        </main>
    );
};

export default Tienda;