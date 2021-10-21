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

function fancyboxSellCharacter() {
    $.each($("[popup-to='sell_character_popup']"), function (index, item) {
        $(item).on("click", function (e) {
            e.preventDefault();
            $.fancybox.open({
                src: "#sell_character_popup",
                type: "inline",
                touch: false,
                hash: false,
                closeExisting: true,
            });
        });
    });
}

function fancyboxSellSuccessCharacter() {
    $.each(
        $("[popup-to='sell_character_success_popup']"),
        function (index, item) {
            $(item).on("click", function (e) {
                e.preventDefault();
                $.fancybox.open({
                    src: "#sell_character_success_popup",
                    type: "inline",
                    touch: false,
                    hash: false,
                    closeExisting: true,
                });
            });
        },
    );
}

function fancyboxChooseYourGreenHeroSell() {
    $.each(
        $("[popup-to='choose_character_sell_popup']"),
        function (index, item) {
            $(item).on("click", function (e) {
                e.preventDefault();
                $.fancybox.open({
                    src: "#choose_character_sell_popup",
                    type: "inline",
                    touch: false,
                    hash: false,
                });
            });
        },
    );
}

function checkedYourGreenHeroSell() {
    $(".your_grbe__list .your_grbe__item").on("click", function () {
        $(".your_grbe__list .your_grbe__item")
            .not($(this))
            .removeClass("checked");
        $(this).addClass("checked");
    });
}

$(function () {
    fancyboxCharacterDetail();
    fancyboxSellCharacter();
    fancyboxChooseYourGreenHeroSell();
    checkedYourGreenHeroSell();
    fancyboxSellSuccessCharacter();
});
