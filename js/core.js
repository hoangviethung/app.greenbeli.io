
const collapseAsideMenu = () => {
	document.querySelectorAll(".js-collapse-aside-menu").forEach((button) => {
		button.addEventListener("click", (e) => {
			document.querySelectorAll(".sidebar__group").forEach((item) => {
				item.classList.remove("active");
			});
			document.querySelector(".page").classList.toggle("sidebar--sm");
		});
	});
};

const collapseAsideMenuMobile = () => {
	document
		.querySelectorAll(".js-collapse-aside-menu-mobile")
		.forEach((button) => {
			button.addEventListener("click", (e) => {
				document.querySelectorAll(".sidebar__group").forEach((item) => {
					item.classList.remove("active");
				});
				document
					.querySelector(".page")
					.classList.toggle("sidebar-mobile--open");
				document.querySelector(".overlay").classList.toggle("active");
			});
		});
	document.querySelector(".overlay").addEventListener("click", (e) => {
		document
			.querySelector(".page")
			.classList.remove("sidebar-mobile--open");
		document.querySelector(".overlay").classList.remove("active");
	});
};

const collapseSlidebarGroup = () => {
	document
		.querySelectorAll(".js-collapse-slidebar-group")
		.forEach((button) => {
			button.addEventListener("click", (e) => {
				button.parentElement.classList.toggle("active");
				button.nextElementSibling.setAttribute(
					"style",
					"animation: slide-down 0.5s ease-out",
				);
			});
		});
};

const fancyboxWalletConnect = () => {
	document
		.querySelectorAll("[popup-to='wallet_connect_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#wallet_connect_popup",
					type: "inline",
					touch: false,
					hash: false,
					closeExisting: true,
				});
			});
		});
};

const fancyboxYourWallet = () => {
	document
		.querySelectorAll("[popup-to='your_wallet_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#your_wallet_popup",
					type: "inline",
					touch: false,
					hash: false,
					closeExisting: true,
				});
			});
		});
};

const fancyboxSelectToken = () => {
	document
		.querySelectorAll("[popup-to='select_token_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#select_token_popup",
					type: "inline",
					touch: false,
					hash: false,
					closeExisting: true,
				});
			});
		});
};

const fancyboxStakeLPTokens = () => {
	document
		.querySelectorAll("[popup-to='stake_lp_tokens_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#stake_lp_tokens_popup",
					type: "inline",
					touch: false,
					hash: false,
					closeExisting: true,
				});
			});
		});
};

const fancyboxUnstakeLPTokens = () => {
	document
		.querySelectorAll("[popup-to='unstake_lp_tokens_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#unstake_lp_tokens_popup",
					type: "inline",
					touch: false,
					hash: false,
					closeExisting: true,
				});
			});
		});
};

const fancyboxSelectLiquidity = () => {
	document
		.querySelectorAll("[popup-to='select_liquidity_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#select_liquidity_popup",
					type: "inline",
					touch: false,
					hash: false,
					closeExisting: true,
				});
			});
		});
};

const fancyboxConfirmLiquidityLoading = () => {
	document
		.querySelectorAll("[popup-to='confirm_liquidity_loading_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#confirm_liquidity_loading_popup",
					type: "inline",
					touch: false,
					hash: false,
					closeExisting: true,
				});
			});
		});
};

const fancyboxConfirmLiquidityReject = () => {
	document
		.querySelectorAll("[popup-to='confirm_liquidity_reject_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#confirm_liquidity_reject_popup",
					type: "inline",
					touch: false,
					hash: false,
					closeExisting: true,
				});
			});
		});
};

const fancyboxConfirmSwap = () => {
	document
		.querySelectorAll("[popup-to='confirm_swap_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#confirm_swap_popup",
					type: "inline",
					touch: false,
					hash: false,
					closeExisting: true,
				});
			});
		});
};

const fancyboxConfirmSwapLoading = () => {
	document
		.querySelectorAll("[popup-to='confirm_swap_loading_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#confirm_swap_loading_popup",
					type: "inline",
					touch: false,
					hash: false,
					closeExisting: true,
				});
			});
		});
};

const fancyboxConfirmSwapReject = () => {
	document
		.querySelectorAll("[popup-to='confirm_swap_reject_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#confirm_swap_reject_popup",
					type: "inline",
					touch: false,
					hash: false,
					closeExisting: true,
				});
			});
		});
};

const fancyboxConfirmBuyGem = () => {
	document
		.querySelectorAll("[popup-to='confirm_buy_gem_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#confirm_buy_gem_popup",
					type: "inline",
					touch: false,
					hash: false,
					closeExisting: true,
				});
			});
		});
};

const fancyboxConfirmBuyWarrior = () => {
	document
		.querySelectorAll("[popup-to='confirm_buy_warrior_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#confirm_buy_warrior_popup",
					type: "inline",
					touch: false,
					hash: false,
					closeExisting: true,
				});
			});
		});
};

const fancyboxConfirmBuyWarriorLoading = () => {
	document
		.querySelectorAll("[popup-to='confirm_buy_warrior_loading_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#confirm_buy_warrior_loading_popup",
					type: "inline",
					touch: false,
					hash: false,
					closeExisting: true,
				});
			});
		});
};

const fancyboxConfirmBuyWarriorAccept = () => {
	document
		.querySelectorAll("[popup-to='confirm_buy_warrior_accept_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#confirm_buy_warrior_accept_popup",
					type: "inline",
					touch: false,
					hash: false,
					closeExisting: true,
				});
			});
		});
};

const fancyboxConfirmBuyWarriorReject = () => {
	document
		.querySelectorAll("[popup-to='confirm_buy_warrior_reject_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#confirm_buy_warrior_reject_popup",
					type: "inline",
					touch: false,
					hash: false,
					closeExisting: true,
				});
			});
		});
};

const fancyboxConfirmLiquidity = () => {
	document
		.querySelectorAll("[popup-to='confirm_liquidity_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#confirm_liquidity_popup",
					type: "inline",
					touch: false,
					hash: false,
					closeExisting: true,
				});
			});
		});
};

const fancyboxSettings = () => {
	document.querySelectorAll("[popup-to='settings_popup']").forEach((item) => {
		item.addEventListener("click", (e) => {
			$.fancybox.open({
				src: "#settings_popup",
				type: "inline",
				touch: false,
				hash: false,
				closeExisting: true,
			});
		});
	});
};

const fancyboxRecentTransactions = () => {
	document
		.querySelectorAll("[popup-to='recent_transactions_popup']")
		.forEach((item) => {
			item.addEventListener("click", (e) => {
				$.fancybox.open({
					src: "#recent_transactions_popup",
					type: "inline",
					touch: false,
					hash: false,
					closeExisting: true,
				});
			});
		});
};

window.addEventListener("load", (e) => {
	collapseAsideMenu();
	collapseAsideMenuMobile();
	collapseSlidebarGroup();
	fancyboxWalletConnect();
	fancyboxYourWallet();
	fancyboxSelectToken();
	fancyboxStakeLPTokens();
	fancyboxUnstakeLPTokens();
	fancyboxSelectLiquidity();
	fancyboxConfirmLiquidity();
	fancyboxConfirmLiquidityLoading();
	fancyboxConfirmLiquidityReject();
	fancyboxConfirmSwap();
	fancyboxConfirmSwapLoading();
	fancyboxConfirmSwapReject();
	fancyboxConfirmBuyGem();
	fancyboxConfirmBuyWarrior();
	fancyboxConfirmBuyWarriorLoading();
	fancyboxConfirmBuyWarriorAccept();
	fancyboxConfirmBuyWarriorReject();
	fancyboxSettings();
	fancyboxRecentTransactions();
});
