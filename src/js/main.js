// Configuración de animaciones de entrada fluidas al hacer scroll (ScrollReveal)
document.addEventListener('DOMContentLoaded', () => {
    
    // Configuración base
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '40px',
        duration: 1000,
        delay: 200,
        reset: false
    });

    // Animación de la sección Hero
    sr.reveal('.marquee-container', { origin: 'top', duration: 1200 });
    sr.reveal('.ribbon-banner', { scale: 0.9, delay: 400 });
    sr.reveal('.hero-description', { delay: 500 });
    sr.reveal('.feature-item', { interval: 150, delay: 600 });
    sr.reveal('.contact-bar', { origin: 'bottom', delay: 800 });

    // Animación de las tarjetas de espectáculos de manera secuencial
    sr.reveal('.section-title-ribbon', { origin: 'top' });
    sr.reveal('.show-card', { 
        interval: 200, 
        distance: '50px',
        scale: 0.95
    });
    sr.reveal('.shows-footer', { delay: 400 });
});