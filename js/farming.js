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

function activePercent() {
    $(".farming__item .select-percent span").on("click", function () {
        $(this).parents(".farming__item").find("span").removeClass("active");
        $(this).addClass("active");
    });
}

$(function () {
    showFarmingItemDetail();
    fancyboxStakeYourRGBE();
    checkedStakeYourRGBE();
    activePercent();
    const TabLiquidityEx1 = new Tab(".item__liquidity[ex-1] .tabs_container");
    const TabLiquidityEx2 = new Tab(".item__liquidity[ex-2] .tabs_container");
});
