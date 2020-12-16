import { gsap } from "gsap";

function introSlide() {
  let stl = gsap.timeline({
        scrollTrigger: {
            trigger: '.intro',
            scrub: 1,
            start: "top bottom", // position of trigger meets the scroller position
            end: "bottom top",
            markers: true
        }
    });

    stl.to('.intro__title-designer', {
        x: "120%",
        ease: 'power4.in',
        duration: 8,

    })
    .to('.intro__description', {
        x: 100,
        ease: 'power4.in',
        duration: 3,


    }, 0);

}


export default introSlide;
