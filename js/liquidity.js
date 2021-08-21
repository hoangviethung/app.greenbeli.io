const showPoolTokenHidden = () => {
	document
		.querySelectorAll(".js-show-pool-token-item-hidden")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				item.parentElement.classList.toggle("active");
			});
		});
};

window.addEventListener("load", (e) => {
	showPoolTokenHidden();
});
