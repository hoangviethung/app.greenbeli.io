const fancyboxCharacterDetail = () => {
	document
		.querySelectorAll("[popup-to='character_detail_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#character_detail_popup",
					type: "inline",
					touch: false,
					hash: false,
					closeExisting: true,
				});
			});
		});
};

window.addEventListener("load", (e) => {
	fancyboxCharacterDetail();
});
