import { gsap } from "gsap";

const animationLeave = (container) => {
  // console.log(container);

	return gsap.to(container, {

    autoAlpha: 0,
    duration: .7,
    clearProps:"all",
    ease:'none',


	});
}

export default animationLeave;
