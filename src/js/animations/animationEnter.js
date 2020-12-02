import { gsap } from "gsap";
import { textSlideUpAnimation, scrollReveal } from "./gsap"





const animationEnter = (container) => {
	gsap.from(container, {
		duration: .7,
    autoAlpha: 0,
    clearProps:"all",
    ease:'none'
  }),
   gsap.fromTo('.hero__image-container img', {height:"100vh", width:"100%",},
        {duration: 1.2, height:"50vh", width:"50%", delay: 1.2}, 0)

  textSlideUpAnimation(".hero__content-title h1, .hero__content-message span")
  scrollReveal(container);

	// return gsap.from(container, {
	// 	duration: .7,
  //   autoAlpha: 0,
  //   clearProps:"all",
  //   ease:'none'
	// });
}



export default animationEnter;
