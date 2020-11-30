import { gsap } from "gsap";

const animationEnter = (container) => {
	// const activeLink = container.querySelector('a.is-active span');
	// const projects = container.querySelectorAll('.project');
	// const images = container.querySelectorAll('.image');
	// const img = container.querySelector('.header__chase-image');
	// const tl = gsap.timeline({
	// 	onStart: () => console.log('starting animationEnter'),
	// 	onComplete: () => console.log('completed animationEnter'),
	// 	defaults: {
	// 		duration: 0.9, ease: 'power4.out'
	// 	}
	// });
	// tl
	// 	// .set(projects, {autoAlpha: 1})
	// 	// .fromTo(activeLink, {xPercent: -101}, {duration: 0.9, xPercent: 0, transformOrigin: 'left'}, 0)
	// 	// .from(images, { xPercent: -101, stagger: 0.1 }, 0)
	// 	.from(img, {
	// 		xPercent: 101,

	// 	}, 0);
	// return tl;

	// console.log(container);
	return gsap.from(container, {
		duration: .7,
    autoAlpha: 0,
    clearProps:"all",
    ease:'none'
	});
}

export default animationEnter;
