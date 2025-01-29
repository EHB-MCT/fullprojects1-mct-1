document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menu-item:not(.logo)");

    // Set initial active state based on current URL hash
    function setInitialActiveState() {
        const hash = window.location.hash || "#Home";
        menuItems.forEach(item => {
            if (item.getAttribute("href") === hash) {
                item.classList.add("active");
            }
        });
    }

    // Handle menu item clicks
    menuItems.forEach(item => {
        item.addEventListener("click", function(e) {
            // Remove active class from all items
            menuItems.forEach(menuItem => {
                menuItem.classList.remove("active");
            });
            // Add active class to clicked item
            this.classList.add("active");
            
            // Handle burger menu
            burgerMenu.classList.remove("active");
            menu.classList.remove("active");
        });
    });

    // Set initial active state when page loads
    setInitialActiveState();

    // Handle burger menu click
    burgerMenu.addEventListener("click", function () {
        burgerMenu.classList.toggle("active");
        menu.classList.toggle("active");
    });
});

let hamburgerMenu = document.querySelector(".hamburger-menu");
let mobileMenu = document.querySelector(".mobile-menu");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});
