function showFarmingItemDetail() {
	$(".farming__item .collapse_header").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(".farming__item .collapse_header")
			.not(this)
			.parents(".farming__item")
			.removeClass("active");
		$(this).parents(".farming__item").toggleClass("active");
	});
}

function fancyboxStakeYourRGBE() {
	$.each(
		$("[popup-to='stake_your_rgbe_popup']"),
		function (indexInArray, valueOfElement) {
			$(valueOfElement).click(function (e) {
				e.preventDefault();
				$.fancybox.open({
					src: "#stake_your_rgbe_popup",
					type: "inline",
					touch: false,
					hash: false,
					closeExisting: true,
				});
			});
		},
	);
}

$(document).ready(function () {
	showFarmingItemDetail();
	fancyboxStakeYourRGBE();
});
