const initSliderHomeLeaderShip = () => {
	const swiper = new Swiper(".leadership-slider .swiper-container", {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 24,
		speed: 1500,
		// autoplay: {
		// 	delay: 3000,
		// },
		loop: true,
		breakpoints: {
			575: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
		},
		navigation: {
			nextEl: ".leadership-slider .swiper-button-next",
			prevEl: ".leadership-slider .swiper-button-prev",
		},
	});
};

const initWowJS = () => {
	var wow = new WOW({
		boxClass: "wow", // animated element css class (default is wow)
		animateClass: "animated", // animation css class (default is animated)
		offset: 0, // distance to the element when triggering the animation (default is 0)
		mobile: true, // trigger animations on mobile devices (default is true)
		live: true, // act on asynchronously loaded content (default is true)
		callback: function (box) {
			// the callback is fired every time an animation is started
			// the argument that is passed in is the DOM node being animated
		},
		scrollContainer: null, // optional scroll container selector, otherwise use window,
		resetAnimation: true, // reset animation on end (default is true)
	});
	wow.init();
};

window.addEventListener("load", (e) => {
	initSliderHomeLeaderShip();
	initWowJS();
	// const HomeRoadmap = new Tab(".home-roadmap .roadmap__wrapper");
});
