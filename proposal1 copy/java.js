document.addEventListener("DOMContentLoaded", function () {
	const burgerMenu = document.querySelector(".burger-menu");
	const menu = document.querySelector(".menu");
	const menuItems = document.querySelectorAll(".menu-item:not(.logo)");

	// Get all sections that correspond to menu items
	const sections = {};
	menuItems.forEach((item) => {
		const href = item.getAttribute("href");
		if (href.startsWith("#")) {
			const sectionId = href.substring(1);
			const section = document.getElementById(sectionId);
			if (section) {
				sections[sectionId] = section;
			}
		}
	});

	// Function to determine which section is currently in view
	function getCurrentSection() {
		const scrollPosition = window.scrollY + window.innerHeight / 3;

		for (const [id, section] of Object.entries(sections)) {
			const sectionTop = section.offsetTop;
			const sectionBottom = sectionTop + section.offsetHeight;

			if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
				return id;
			}
		}
		return "Home"; // Default to Home if no section is in view
	}

	// Function to update active menu item
	function updateActiveMenuItem() {
		const currentSection = getCurrentSection();
		menuItems.forEach((item) => {
			item.classList.remove("active");
			if (item.getAttribute("href") === `#${currentSection}`) {
				item.classList.add("active");
			}
		});
	}

	// Set initial active state based on current URL hash
	function setInitialActiveState() {
		const hash = window.location.hash || "#Home";
		menuItems.forEach((item) => {
			if (item.getAttribute("href") === hash) {
				item.classList.add("active");
			}
		});
	}

	// Handle menu item clicks
	menuItems.forEach((item) => {
		item.addEventListener("click", function (e) {
			// Remove active class from all items
			menuItems.forEach((menuItem) => {
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

	// Add scroll event listener to update active menu item
	window.addEventListener("scroll", updateActiveMenuItem);

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
