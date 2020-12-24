import { gsap } from "gsap";


const textSlideUpAnimation = (elem) => {

  return gsap.from(elem,  {
              duration: .6,
              yPercent: 100,
              // autoAlpha: 0,
              clearProps:"all",
              stagger: .2,
              ease: 'power1.out',
  })
}

export default textSlideUpAnimation;
