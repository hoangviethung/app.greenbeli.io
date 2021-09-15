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
        const input = $(".unbox_popup__input .input-main input");
        if (input.val() <= 0) {
            input.addClass("is-invalid");
            input
                .siblings(".invalid-feedback")
                .addClass("is-invalid")
                .text("Vui lòng nhập số lượng");
            $(".unbox_popup .token-name").removeClass("show");
            $(".unbox_popup .successful-content").removeClass("show");
        } else {
            input.removeClass("is-invalid");
            input.siblings(".invalid-feedback").removeClass("is-invalid");
            $(".unbox_popup .token-name").addClass("show");
            $(".unbox_popup .loading").addClass("show");
            setTimeout(() => {
                $(".unbox_popup .loading").removeClass("show");
                $(".unbox_popup .successful-content").addClass("show");
            }, 3000);
        }
    });
}

$(function () {
    fancyboxUnbox();
    showTokenNameUnbox();
});
