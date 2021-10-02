function fancyboxCharacterDetail() {
    $.each($("[popup-to='character_detail_popup']"), function (index, item) {
        $(item).on("click", function (e) {
            e.preventDefault();
            $.fancybox.open({
                src: "#character_detail_popup",
                type: "inline",
                touch: false,
                hash: false,
                closeExisting: true,
            });
        });
    });
}

function unboxSeed() {
    $(".list_products__item_wrapper").on("click", function () {
        $(this).addClass("opened");
    });
}

$(function () {
    fancyboxCharacterDetail();
    unboxSeed();
});
