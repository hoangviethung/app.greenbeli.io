function fancyboxUnbox() {
    $.each($("[popup-to='unbox_popup']"), function (index, item) {
        $(item).on("click", function (e) {
            e.preventDefault();
            $.fancybox.open({
                src: "#unbox_popup",
                type: "inline",
                touch: false,
                hash: false,
                closeExisting: true,
                buttons: false,
                smallBtn: false,
            });
        });
    });
}

function showTokenNameUnbox() {
    $(".unbox_popup .popup__footer .bt--primary").on("click", function () {
        $(".unbox_popup .token-name").addClass("show");
    });
}

$(function () {
    fancyboxUnbox();
    showTokenNameUnbox();
});
