import { gsap } from "gsap";

const animationLeave = (container) => {
  // console.log(container);

	return gsap.to(container, {
				duration: .7,
    autoAlpha: 0,
    clearProps:"all",
    ease:'none',

	});
}

export default animationLeave;
