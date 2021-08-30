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

$(document).ready(function () {
	showFarmingItemDetail();
});
