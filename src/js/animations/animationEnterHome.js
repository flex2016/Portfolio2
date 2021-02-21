import { gsap } from "gsap";
import { textSlideUpAnimation } from "./gsap"
import {tiltImage } from "../components/"


const animationEnterHome = ( container) => {

  const heroImage = container.querySelector('.hero__image-container img');
  const windowWidth = window.innerWidth < 737 ? 70 : 50;

  textSlideUpAnimation(".hero__content-title h1, .hero__content-message span, .header__nav li")

  const tl = gsap.timeline({
		onComplete: () => tiltImage(),
		defaults: {
			duration: 0.8, ease: 'power1.in'
		}
  });
  tl
    .from(container, {duration: 1,autoAlpha: 0,clearProps:"all",ease:'none'})
		.fromTo(heroImage, {height:"100vh", width:"100%",},
        {duration: 1, height:"50vh", width: `${windowWidth}%`, delay: 1.2});
	return tl;
}

export default animationEnterHome;
