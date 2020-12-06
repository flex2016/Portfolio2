import { gsap } from "gsap";
import { textSlideUpAnimation, scrollReveal } from "./gsap"





const animationEnterProject = ( container) => {

  const projectImage = container.querySelector('.project__image-container  img');
  const heroText = container.querySelector('.project__nav-text span');

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
		.fromTo(projectImage, {height:"50vh", width:"50%",},
        {duration: 1.2, height:"100vh", width:"100%"},0)
    .from(heroText,  {
              duration: .6,
              yPercent: 100,
              // autoAlpha: 0,
              stagger: .2,
              ease: 'power1.out',
              delay:.5
  })
    .to(".project__nav", {duration: 1.9, backgroundColor:"#000", opacity: .6},0)
  ;
	return tl;


	// return gsap.from(container, {
	// 	duration: .7,
  //   autoAlpha: 0,
  //   clearProps:"all",
  //   ease:'none'
	// });
}



export default animationEnterProject;
