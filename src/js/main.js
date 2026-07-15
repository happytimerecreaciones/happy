// Happy Time Entertainment — interacciones de UI
document.addEventListener('DOMContentLoaded', () => {

    // --- Navbar: transparente -> sólida al hacer scroll ---
    const navbar = document.getElementById('navbar');
    const onScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // --- Menú móvil (hamburguesa) ---
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');

    const closeMenu = () => {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
    };

    toggle.addEventListener('click', () => {
        const open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!open));
        menu.classList.toggle('is-open', !open);
    });

    // Cerrar al hacer clic en un enlace
    menu.querySelectorAll('.navbar__link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Cerrar al redimensionar a escritorio
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 900) closeMenu();
    });

    // --- Modal WhatsApp ---
    const modal = document.getElementById('whatsappModal');
    const closeModalBtn = document.getElementById('closeModal');
    const confirmBtn = modal.querySelector('.whatsapp-modal__content a[href*="wa.me"]');
    let lastFocusedElement = null;

    const openModal = (e) => {
        if (e.target.closest('.whatsapp-modal__content a[href*="wa.me"]')) return;
        lastFocusedElement = e.target;
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        closeModalBtn.focus();
        e.preventDefault();
    };

    const hideModal = () => {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        if (lastFocusedElement) lastFocusedElement.focus();
    };

    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        if (link.closest('.whatsapp-modal__content')) return;
        link.addEventListener('click', openModal);
    });

    closeModalBtn.addEventListener('click', hideModal);
    modal.querySelector('.whatsapp-modal__backdrop').addEventListener('click', hideModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            hideModal();
        }
    });
});
