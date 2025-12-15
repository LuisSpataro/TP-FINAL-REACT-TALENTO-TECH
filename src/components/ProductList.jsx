// src/components/ProductList.jsx
import React, { useState, useEffect } from 'react';
// 1. Importar useNavigate
import { useNavigate } from 'react-router-dom'; 

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // 2. Inicializar useNavigate
    const navigate = useNavigate(); 
    
    // Lógica de fetch (sin cambios)
    useEffect(() => {
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

    // 3. Función de Navegación Corregida
    const handleCardClick = (productId) => {
        // Usamos navigate para ir a la ruta dinámica: /producto/ID_DEL_PRODUCTO
        navigate(`/producto/${productId}`);
    };

    return (
        <section className="product-list">
            <h3>RECIÉN LLEGADOS</h3>
            <div className="products-grid">
                {products.map((product, index) => {
                    const tag = index < 3 ? "NUEVO" : "OFERTA";
                    
                    const imagePath = product.images[0];
                    const finalImagePath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;

                    return (
                        <div 
                            className="product-card" 
                            key={product.id || index}
                            // 4. Llamar a handleCardClick con el ID del producto
                            onClick={() => handleCardClick(product.id)}
                        > 
                            {tag && <p className="tag">{tag}</p>}
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