document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu-item');

    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Close menu when clicking a menu item
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            menu.classList.remove('active');
        });
    });
});

let hamburgerMenu = document.querySelector(".hamburger-menu");
let mobileMenu = document.querySelector(".mobile-menu");

hamburgerMenu.addEventListener("click", () => {
	hamburgerMenu.classList.toggle("active");
	mobileMenu.classList.toggle("active");
});
