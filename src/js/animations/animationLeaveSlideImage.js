import gsap from 'gsap';

const animationLeaveSlideImage = (container) => {

	const projects = container.querySelectorAll('.work__image');
	const images = container.querySelectorAll('.work__img');
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
		}, 0);
	return tl;
}

export default animationLeaveSlideImage;;
