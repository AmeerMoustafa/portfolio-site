const initApp = () => {
    const burgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
    };

    burgerButton.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp);