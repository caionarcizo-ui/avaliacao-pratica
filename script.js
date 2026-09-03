document.addEventListener('DOMContentLoaded', () => {
    // Rolagem suave ao clicar nos links de navegação
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Destaque simples no console ao carregar a página
    console.log("Módulo de navegação de Marte carregado com sucesso.");
});
