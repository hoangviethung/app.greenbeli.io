class Tab {
    constructor(selector) {
        this.selector = document.querySelector(selector);
        if (this.selector) {
            this.navigationItems = Array.from(
                this.selector.querySelectorAll("[toggle-for]"),
            );
            this.contentList = Array.from(
                this.selector.querySelectorAll("[toggle-id]"),
            );
            this.init();
        }
    }

    changeTabWhenClicked() {
        this.navigationItems.forEach((element, index) => {
            element.addEventListener("click", (e) => {
                e.preventDefault();
                const tabTarget = element.attributes["toggle-for"].value;
                const targetDOM = Array.from(
                    this.selector.querySelectorAll(
                        `[toggle-id='${tabTarget}']`,
                    ),
                );
                this.navigationItems.forEach((eleClicked, eleClickedIndex) => {
                    if (eleClickedIndex != index) {
                        eleClicked.classList.remove("active");
                    }
                });
                this.contentList.forEach((tabContentElement) => {
                    if (
                        tabContentElement.attributes["toggle-id"].value !=
                        tabTarget
                    ) {
                        tabContentElement.style.display = "none";
                        tabContentElement.classList.remove("show");
                    }
                });
                element.classList.add("active");
                targetDOM.forEach((item) => {
                    item.style.display = "block";
                });
                setTimeout(() => {
                    targetDOM.forEach((item) => {
                        item.classList.add("show");
                    });
                }, 50);
            });
        });
    }

    activeFirstTab() {
        if (this.navigationItems.length > 0) {
            this.navigationItems[0].click();
        }
    }

    init() {
        this.changeTabWhenClicked();
        this.activeFirstTab();
    }
}

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

function fancyboxBuyCharacter() {
    $.each($("[popup-to='buy_character_popup']"), function (index, item) {
        $(item).on("click", function (e) {
            e.preventDefault();
            $.fancybox.open({
                src: "#buy_character_popup",
                type: "inline",
                touch: false,
                hash: false,
                closeExisting: true,
            });
        });
    });
}

function fancyboxBuyCharacterSuccess() {
    $.each(
        $("[popup-to='buy_character_success_popup']"),
        function (index, item) {
            $(item).on("click", function (e) {
                e.preventDefault();
                $.fancybox.open({
                    src: "#buy_character_success_popup",
                    type: "inline",
                    touch: false,
                    hash: false,
                    closeExisting: true,
                });
            });
        },
    );
}

$(function () {
    fancyboxCharacterDetail();
    fancyboxBuyCharacter();
    fancyboxBuyCharacterSuccess();
    const TabFilter = new Tab(".shop__wrapper .tab_container");
});
