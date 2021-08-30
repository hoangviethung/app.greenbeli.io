const header = document.querySelector("header.header");
const headerInfo = document.querySelector(".header__info");
const priceButtons = document.querySelector(
	".header__info .header_info__items",
);
const buttonPlay = document.querySelector(".header__info .bt--secondary");
const headerMenu = document.querySelector(".header__menu");

const prependTo = (node, target) => {
	target.prepend(node);
};

const appendTo = (node, target) => {
	target.append(node);
};

const insertBefore = (node, target) => {
	target.parentNode.insertBefore(node, target.previousSibling);
};

const insertAfter = (node, target) => {
	target.parentNode.insertBefore(node, target.nextSibling);
};

const reponsiveMenuHeader = (e) => {
	if (e.matches) {
		prependTo(priceButtons, header);
	} else {
		prependTo(priceButtons, headerInfo);
	}
};

const moveButtonPlayNow = (e) => {
	if (e.matches) {
		appendTo(buttonPlay, headerMenu);
	} else {
		prependTo(buttonPlay, headerInfo);
	}
};

const toggleMenuMobile = (e) => {
	document
		.querySelector(".header__wrapper .bt-burger")
		.addEventListener("click", (e) => {
			headerMenu.classList.add("show");
			document
				.querySelector("body")
				.setAttribute("style", "overflow-y: hidden");
		});
	document
		.querySelector(".header__menu .bt-close")
		.addEventListener("click", (e) => {
			headerMenu.classList.remove("show");
			document
				.querySelector("body")
				.setAttribute("style", "overflow-y: auto");
		});
};

window.addEventListener("load", (e) => {
	moveButtonPlayNow(window.matchMedia("(max-width: 575.98px)"));
	reponsiveMenuHeader(window.matchMedia("(max-width: 1440px)"));
	toggleMenuMobile();
});

window
	.matchMedia("(max-width: 1440px)")
	.addEventListener("change", reponsiveMenuHeader);
window
	.matchMedia("(max-width: 575.98px)")
	.addEventListener("change", moveButtonPlayNow);
