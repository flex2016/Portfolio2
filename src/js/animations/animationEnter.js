import { gsap } from "gsap";

const animationEnter = (container) => {
	// console.log(container);
	return gsap.from(container, {
		duration: .7,
    autoAlpha: 0,
    clearProps:"all",
    ease:'none'
	});
}

export default animationEnter;
