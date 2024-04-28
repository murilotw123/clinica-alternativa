// Script para tornar o menu responsivo
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
