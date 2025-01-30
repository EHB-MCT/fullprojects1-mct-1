document.addEventListener("DOMContentLoaded", function () {
	let burgerMenu = document.querySelector(".burger-menu");
	let menu = document.querySelector(".menu");
	let menuItems = document.querySelectorAll(".menu-item:not(.logo)");

	let sections = {};
	menuItems.forEach((item) => {
		let href = item.getAttribute("href");
		if (href.startsWith("#")) {
			let sectionId = href.substring(1);
			let section = document.getElementById(sectionId);
			if (section) {
				sections[sectionId] = section;
			}
		}
	});

	function getCurrentSection() {
		let scrollPosition = window.scrollY + window.innerHeight / 3;

		for (let [id, section] of Object.entries(sections)) {
			let sectionTop = section.offsetTop;
			let sectionBottom = sectionTop + section.offsetHeight;

			if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
				return id;
			}
		}
	}

	function updateActiveMenuItem() {
		let currentSection = getCurrentSection();
		menuItems.forEach((item) => {
			item.classList.remove("active");
			if (item.getAttribute("href") === `#${currentSection}`) {
				item.classList.add("active");
			}
		});
	}

	function setInitialActiveState() {
		let hash = window.location.hash || "#Home";
		menuItems.forEach((item) => {
			if (item.getAttribute("href") === hash) {
				item.classList.add("active");
			}
		});
	}

	// item clicks
	menuItems.forEach((item) => {
		item.addEventListener("click", function (e) {
			menuItems.forEach((menuItem) => {
				menuItem.classList.remove("active");
			});

			this.classList.add("active");

			//  burger menu
			burgerMenu.classList.remove("active");
			menu.classList.remove("active");
		});
	});

	setInitialActiveState();

	// scroll event
	window.addEventListener("scroll", updateActiveMenuItem);

	// burger menu click
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
