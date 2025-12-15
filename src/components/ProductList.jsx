// src/components/ProductList.jsx
import React, { useState, useEffect } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Asumiendo que el JSON está en public/data/products.json
    useEffect(() => {
        // CORRECCIÓN 1: Asegúrate de que la ruta de fetch use la barra inicial para apuntar a /public
        fetch('/data/products.json') 
            .then(res => {
                if (!res.ok) {
                    throw new Error('Error al cargar products.json: ' + res.status);
                }
                return res.json();
            })
            .then(data => {
                const featured = data.slice(0, 6);
                setProducts(featured);
                setError(null);
            })
            .catch(err => {
                setError("No se pudieron cargar los productos.");
                console.error("Error al cargar productos:", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []); 

    // Renderizado condicional
    if (loading) return <p className="loading-message">Cargando productos...</p>;
    if (error) return <p className="error-message">{error}</p>;

    const handleCardClick = (product) => {
        // Lógica de navegación.
        console.log("Producto seleccionado para ver detalles:", product.name);
    };

    return (
        <section className="product-list">
            <h3>RECIÉN LLEGADOS</h3>
            <div className="products-grid">
                {products.map((product, index) => {
                    const tag = index < 3 ? "NUEVO" : "OFERTA";
                    
                    // Asumimos que product.images[0] contiene "img/nombre.jpg"
                    const imagePath = product.images[0];
                    
                    // Verificamos si la ruta ya tiene la barra inicial, si no, la agregamos
                    // Tu JSON tiene "img/top-01.jpeg". La queremos convertir en "/img/top-01.jpeg"
                    const finalImagePath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;

                    return (
                        <div 
                            className="product-card" 
                            key={product.id || index}
                            onClick={() => handleCardClick(product)}
                        > 
                            {tag && <p className="tag">{tag}</p>}
                            {/* CORRECCIÓN 2: Uso de la ruta absoluta con / inicial */}
                            <img src={finalImagePath} alt={product.name} /> 
                            <p className="name">{product.name}</p>
                            <p className="price">${product.price.toLocaleString("es-AR")}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ProductList;