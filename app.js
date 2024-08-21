const sections = document.querySelectorAll('.hidden');

window.addEventListener('scroll', function() {
    sections.forEach(section => {
        const position = section.getBoundingClientRect();

        // Si la parte superior del elemento está dentro de la ventana del navegador
        if (position.top < window.innerHeight && position.bottom >= 0) {
            section.style.opacity = 1; // Elemento visible
        } else {
            section.style.opacity = 0; // Elemento invisible
        }
    });
});