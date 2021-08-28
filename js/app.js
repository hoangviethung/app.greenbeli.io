const breakpoint = window.matchMedia("(max-width: 1440px)");
const header = document.querySelector("header.header");
const headerInfo = document.querySelector(".header__info");
const priceButtons = document.querySelector(
	".header__info .header_info__items",
);
const headerMenu = document.querySelector(".header__menu");

const fancyboxWalletConnect = () => {
	document
		.querySelectorAll("[popup-to='wallet_connect_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#wallet_connect_popup",
					type: "inline",
					touch: false,
					hash: false,
					closeExisting: true,
				});
			});
		});
};

const prependTo = (node, target) => {
	target.prepend(node);
};

const breakpointHandler = (e) => {
	if (e.matches) {
		prependTo(priceButtons, header);
	} else {
		prependTo(priceButtons, headerInfo);
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
	fancyboxWalletConnect();
	breakpointHandler(breakpoint);
	toggleMenuMobile();
	breakpoint.addEventListener("change", breakpointHandler);
});
