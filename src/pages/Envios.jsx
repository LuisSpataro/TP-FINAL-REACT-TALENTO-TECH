// src/pages/Envios.jsx
import React, { useState, useEffect } from 'react';
import '../Envios.css'; // <-- Importa los estilos modulares

const Envios = () => {
    const [logos, setLogos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect reemplaza la lógica de envios.js (fetch)
    useEffect(() => {
        // La ruta debe ser absoluta, asumiendo que envios.json está en public/data/
        fetch('/data/envios.json') 
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Error HTTP: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setLogos(data);
                setError(null);
            })
            .catch(err => {
                setError(`No se pudieron cargar los logos de envío. ${err.message}`);
                console.error("Error al cargar envíos:", err);
            })
            .finally(() => setLoading(false));
    }, []);

    // Renderizado condicional
    if (loading) return <main className="envios-layout"><p>Cargando empresas de envío...</p></main>;
    if (error) return <main className="envios-layout"><p className="error-message">{error}</p></main>;

    return (
        <main className="envios-layout">
            <div id="envios-titulo">
                <h1>Hacemos envíos a todo el país 🚚</h1>
                <p>Puedes recibir tu pedido mediante las siguientes empresas de transporte:</p> 
            </div>
           
            {/* Reemplazamos el forEach de envios.js por el map de React */}
            <div className="envios-logos" id="envios-logos">
                {logos.map((empresa, index) => {
                    // CORRECCIÓN CLAVE DE RUTA: 
                    // Tu JSON tiene "img/logos-envios/..."
                    // Necesitamos la barra inicial '/' para apuntar a la carpeta 'public'.
                    const imagePath = empresa.logo;
                    const finalImagePath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;

                    return (
                        // La key es esencial cuando se usa map
                        <img 
                            key={index}
                            src={finalImagePath} 
                            alt={empresa.name} 
                            className="envio-logo-item"
                        />
                    );
                })}
            </div>
        </main>
    );
};

export default Envios;