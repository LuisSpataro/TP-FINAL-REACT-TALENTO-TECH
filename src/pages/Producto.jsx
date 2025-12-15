// src/pages/ProductoDetalle.jsx
import React, { useState, useEffect } from 'react';
// Importamos los Hooks necesarios de React Router
import { useParams } from 'react-router-dom';

const ProductoDetalle = () => {
    // 1. Obtener el ID del producto de la URL (ej: /producto/12)
    const { id } = useParams();
    
    // 2. Estados para manejar el producto y la carga
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    // Estado para manejar la talla seleccionada
    const [selectedSize, setSelectedSize] = useState('');

    // 3. useEffect: Buscar el producto por ID cuando el componente carga
    useEffect(() => {
        setLoading(true);
        // En una aplicación real, harías un fetch a una API: fetch(`/api/products/${id}`)
        // Aquí simulamos la búsqueda cargando todo el JSON y filtrando por ID:
        
        fetch('/data/products.json') 
            .then(res => res.json())
            .then(data => {
                // Buscamos el producto cuyo ID coincida (lo convertimos a número para comparar)
                const foundProduct = data.find(p => p.id === parseInt(id));
                
                if (foundProduct) {
                    setProduct(foundProduct);
                    // Seteamos la primera talla como seleccionada por defecto
                    if (foundProduct.sizes && foundProduct.sizes.length > 0) {
                        setSelectedSize(foundProduct.sizes[0]);
                    }
                } else {
                    setError(true);
                }
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]); // Dependencia: Se ejecuta de nuevo si el ID de la URL cambia

    // Manejadores de eventos (reemplazan los addEventListener)
    const handleAddToCart = () => {
        alert(`Producto "${product.name}" (Talla: ${selectedSize}) agregado al carrito`);
        // Lógica real: Redux/Context para agregar al estado global del carrito
    };

    const handleBuyNow = () => {
        alert(`Proceder a compra del producto "${product.name}" (Talla: ${selectedSize})`);
        // Lógica real: Redirección al checkout
    };
    
    // Renderizado condicional
    if (loading) return <main className="producto-detalle"><p>Cargando detalles del producto...</p></main>;
    if (error || !product) return <main className="producto-detalle"><p>No se encontró el producto con ID: {id}.</p></main>;

    // Si el producto fue encontrado, renderizamos su detalle (JSX)
    return (
        <main className="producto-detalle">
            
            {/* 1. SECCIÓN DE IMÁGENES */}
            <div className="producto-imagenes">
                {product.images.map((img, index) => {
                    // Aseguramos la ruta absoluta de la imagen
                    const imagePath = img;
                    const finalImagePath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
                    
                    return (
                        <img 
                            key={index} 
                            src={finalImagePath} 
                            alt={`${product.name} ${index + 1}`}
                        />
                    );
                })}
            </div>

            {/* 2. SECCIÓN DE INFORMACIÓN Y BOTONES */}
            <div className="producto-info">
                <h1>{product.name}</h1>
                <p className="price">${product.price.toLocaleString("es-AR")}</p>

                {/* Notas/Características: Renderizado condicional */}
                {product.notes && product.notes.length > 0 && (
                    <ul>
                        {product.notes.map((note, index) => <li key={index}>{note}</li>)}
                    </ul>
                )}

                {/* Selector de Talla */}
                <label htmlFor="size">Elegir tamaño:</label>
                <select 
                    id="size" 
                    value={selectedSize} 
                    onChange={(e) => setSelectedSize(e.target.value)}
                >
                    {product.sizes && product.sizes.map(size => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>

                {/* Botones de acción */}
                <div className="producto-botones">
                    <button id="addToCart" onClick={handleAddToCart}>Agregar al carrito</button>
                    <button id="buyNow" onClick={handleBuyNow}>Comprar</button>
                </div>
            </div>
        </main>
    );
};

export default ProductoDetalle;