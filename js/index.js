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

function actionsSubmitUnbox() {
    $(".unbox_popup .popup__footer .bt--primary").on("click", function () {
        if ($(this).hasClass("js-validate-checkout")) {
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
                $(".unbox_popup .successful-content").removeClass("show");
                $(".unbox_popup .loading").addClass("show");
                setTimeout(() => {
                    $(".unbox_popup .loading").removeClass("show");
                    $(".unbox_popup .successful-content").addClass("show");
                    $(this)
                        .text("Go to your tree")
                        .removeClass("js-validate-checkout");
                }, 3000);
            }
        } else {
            location.href = "your-tree.html";
        }
    });
}

function limitBuyCharacter() {
    $(".unbox_popup__input .input-range input").on("change", function () {
        if ($(this).val() > 3) {
            $(this).val("3");
            $(".unbox_popup__input .input-main input").val($(this).val());
            $(this)
                .parents(".input-percent")
                .find(".invalid-feedback")
                .text("You can't buy more")
                .addClass("is-invalid");
            setTimeout(() => {
                $(this)
                    .parents(".input-percent")
                    .find(".invalid-feedback")
                    .text("")
                    .removeClass("is-invalid");
            }, 3000);
        } else {
            $(".unbox_popup__input .input-main input").val($(this).val());
        }
    });
}

$(function () {
    fancyboxUnbox();
    actionsSubmitUnbox();
    limitBuyCharacter();
});
