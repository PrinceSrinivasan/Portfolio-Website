function toggleMenu() {
    const menu = document.querySelector('.menu-link');
    const icon = document.querySelector('.burger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}