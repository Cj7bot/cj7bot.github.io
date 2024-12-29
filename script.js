//Scripts de la web

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar elementos del DOM
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Manejar el clic en el botón hamburguesa
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Cerrar el menú cuando se hace clic en un enlace
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Cerrar el menú cuando se hace clic fuera
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Manejar el botón de descarga
    const downloadBtn = document.querySelector('.downloads');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            // Aquí puedes añadir la lógica para la descarga
            console.log('Descargando brochure...');
        });
    }
});
