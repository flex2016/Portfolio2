import { gsap } from "gsap";
import { textSlideUpAnimation } from "./gsap"

const animationEnterProjectFadeIn = ( container) => {

  const heroText = container.querySelector('.project__hero-text span');
  textSlideUpAnimation(".hero__content-title h1, .hero__content-message span, .header__nav li")
  const tl = gsap.timeline({
		defaults: {
			duration: 0.8, ease: 'power1.in'
		}
  });
  tl
    .from(container, {duration: 1,autoAlpha: 0,clearProps:"all",ease:'none'})
    .from(heroText,  {
              duration: .6,
              yPercent: 100,
              stagger: .2,
              ease: 'power1.out',
              delay:.5
  });
	return tl;

}

export default animationEnterProjectFadeIn;
