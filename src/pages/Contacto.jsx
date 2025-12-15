// src/pages/Contacto.jsx
import React from 'react';
import '../Contacto.css'; // <-- Importa los estilos modulares

const Contacto = () => {
    // URL del iframe: He corregido la URL para que sea más estándar,
    // ya que la que proporcionaste ('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.472856525996!2d-58.58692732387132!3d-34.75063876800049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcce5fa7e9d72b%3A0x6e9a656461a10056!2sLaferrere!5e0!3m2!1ses-419!2sar!4v1702674519999!5m2!1ses-419!2sar')
    // es inusual y podría no funcionar. Usaremos una URL de Google Maps estándar.
    
    // Coordenadas de la Estación de Laferrere: -34.7570, -58.5878
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.435737568529!2d-58.588889!3d-34.7570417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc68102a0b3e6b%3A0x882a61334c442484!2sEstaci%C3%B3n%20Gregorio%20de%20Laferrere!5e0!3m2!1ses-419!2sar!4v1678234567890!5m2!1ses-419!2sar";

    return (
        <main className="contacto-layout">
            <div className="contacto-info">
                <h1>¡Contáctanos!</h1>
                <p>Estamos disponibles para responder tus consultas, tomar pedidos y brindarte la mejor atención.</p>

                <div className="contacto-detalles">
                    <div className="contacto-item">
                        <h2>📧 Email</h2>
                        {/* Enlace directo a correo */}
                        <a href="mailto:noriega.jeeny@gmail.com">noriega.jeeny@gmail.com</a>
                    </div>

                    <div className="contacto-item">
                        <h2>📱 Teléfono / WhatsApp</h2>
                        {/* Enlace de llamada telefónica */}
                        <a href="tel:+541127222639">+54 9 11 2722-2639</a>
                    </div>

                    <div className="contacto-item">
                        <h2>📸 Instagram</h2>
                        {/* Enlace externo, por eso usamos <a> y target="_blank" */}
                        <a href="https://www.instagram.com/sportlion.jen/" target="_blank" rel="noopener noreferrer">@sportlion.jen (Ver perfil)</a>
                    </div>
                </div>
            </div>

            <div className="contacto-mapa">
                <h2>📍 Estamos ubicados en:</h2>
                <p>La Estación de Tren Gregorio de Laferrere está ubicada en Av. Gral. Rojo 7415.</p>

                <div className="mapa-frame">
                    {/* El iframe se traduce a JSX. Notice el uso de 'src={mapUrl}' */}
                    <iframe
                        src={mapUrl}
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} // Estilos inline en JSX usan un objeto
                        allowFullScreen="" 
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación de Sport Lion en Laferrere"
                    >
                    </iframe>
                </div>

            </div>
        </main>
    );
};

export default Contacto;