import gsap from 'gsap';

const animationLeaveSlideImage = (container) => {

	const projects = container.querySelectorAll('.work__image');
	const images = container.querySelectorAll('.work__img');
	const title = container.querySelectorAll('.work__heading');
	const projectName = container.querySelectorAll('.work__details-heading-link');
	const type = container.querySelectorAll('.work__type');
	const button = container.querySelectorAll('.btn-test');
	const header = container.querySelector('.header .scrolling-active');
	const tl = gsap.timeline({
		onStart: () => console.log('starting animationLeave'),
		onComplete: () => console.log('completed animationLeave'),
		defaults: {
			duration: 0.8, ease: 'power1.in'
		}
	});
	tl

		.to(projects, { xPercent: 101, stagger: 0.05 }, 0)
		.to(images, {
			xPercent: -101,
			stagger: 0.05,
		},0)
		.to( ".work__heading, .work__details-heading-link, .work__type, .btn-test, .header", {
			  autoAlpha: 0,
    duration: .8,
			  // clearProps:"all",

		}, 0);
	return tl;
}

export default animationLeaveSlideImage;;
