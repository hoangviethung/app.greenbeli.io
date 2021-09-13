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
    $.each($("[popup-to='stake_your_rgbe_popup']"), function (index, item) {
        $(item).on("click", function (e) {
            e.preventDefault();
            $.fancybox.open({
                src: "#stake_your_rgbe_popup",
                type: "inline",
                touch: false,
                hash: false,
                closeExisting: true,
            });
        });
    });
}

function checkedStakeYourRGBE() {
    $(".your_rgbe__list .your_rgbe__item").on("click", function () {
        $(".your_rgbe__list .your_rgbe__item")
            .not($(this))
            .removeClass("checked");
        $(this).addClass("checked");
    });
}

$(function () {
    showFarmingItemDetail();
    fancyboxStakeYourRGBE();
    checkedStakeYourRGBE();
});
