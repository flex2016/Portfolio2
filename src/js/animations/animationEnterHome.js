import { gsap } from "gsap";
import { textSlideUpAnimation, scrollReveal } from "./gsap"





const animationEnterHome = ( container) => {

  const heroImage = container.querySelector('.hero__image-container img');

  textSlideUpAnimation(".hero__content-title h1, .hero__content-message span, .header__nav li")

  const tl = gsap.timeline({
		onStart: () => console.log('starting animationLeave'),
		onComplete: () => console.log('completed animationLeave'),
		defaults: {
			duration: 0.8, ease: 'power1.in'
		}
  });
  tl
    .from(container, {duration: 1,autoAlpha: 0,clearProps:"all",ease:'none'})
		.fromTo(heroImage, {height:"100vh", width:"100%",},
        {duration: 1, height:"50vh", width:"50%", delay: 1.2});
	return tl;



	// return gsap.from(container, {
	// 	duration: .7,
  //   autoAlpha: 0,
  //   clearProps:"all",
  //   ease:'none'
	// });
}



export default animationEnterHome;
