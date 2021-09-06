function prependTo(node, target) {
    target.prepend(node);
}

function appendTo(node, target) {
    target.append(node);
}

function insertBefore(node, target) {
    target.parentNode.insertBefore(node, target.previousSibling);
}

function insertAfter(node, target) {
    target.parentNode.insertBefore(node, target.nextSibling);
}

function reponsiveMenuHeader(e) {
    if (e.matches) {
        prependTo($(".header_info__items"), $("header.header"));
    } else {
        prependTo($(".header_info__items"), $(".header__info"));
    }
}

function moveButtonPlayNow(e) {
    if (e.matches) {
        appendTo($(".header__info .bt--secondary"), $(".header__menu"));
    } else {
        prependTo($(".header__menu .bt--secondary"), $(".header__info"));
    }
}

function toggleMenuMobile(e) {
    $(".header__wrapper .bt-burger").on("click", function () {
        $(".header__menu").addClass("show");
        $("body").attr("style", "overflow-y: hidden");
    });
    $(".header__wrapper .bt-close").on("click", function () {
        $(".header__menu").removeClass("show");
        $("body").attr("style", "overflow-y: auto");
    });
}

$(function () {
    moveButtonPlayNow(window.matchMedia("(max-width: 575.98px)"));
    reponsiveMenuHeader(window.matchMedia("(max-width: 1440px)"));
    toggleMenuMobile();
    window
        .matchMedia("(max-width: 1440px)")
        .addEventListener("change", reponsiveMenuHeader);
    window
        .matchMedia("(max-width: 575.98px)")
        .addEventListener("change", moveButtonPlayNow);
});
