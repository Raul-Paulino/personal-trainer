document.addEventListener('DOMContentLoaded', () => {
    const menuMobileBtn = document.getElementById('menuMobileBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuMobileBtn && navMenu) {
        menuMobileBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("Botão hambúrguer foi clicado!");
            navMenu.classList.toggle('active');
            
            if (navMenu.classList.contains('active')) {
                menuMobileBtn.textContent = '✖';
            } else {
                menuMobileBtn.textContent = '☰';
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuMobileBtn.textContent = '☰';
            });
        });
    } else {
        console.error("Elemento do menu ou botão não encontrado no HTML!");
    }
});