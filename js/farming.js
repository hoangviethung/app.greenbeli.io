const showFarmDetail = () => {
	document.querySelectorAll(".js-show-farm-detail").forEach((item) => {
		item.addEventListener("click", (e) => {
			console.log(item.parentElement);
			item.parentElement.classList.toggle("active");
		});
	});
};

window.addEventListener("load", (e) => {
	showFarmDetail();
});
