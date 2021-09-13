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

$(function () {
    fancyboxCharacterDetail();
});
