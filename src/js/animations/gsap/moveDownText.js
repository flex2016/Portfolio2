import { gsap } from "gsap";

function moveDownText(sliderDOM) {
  const slideActive = sliderDOM.find('.swiper-slide-active');
  const slideCaption = slideActive.find('.slide-inner--info');

  const oldActive = sliderDOM.find('.swiper-slide-prev, .swiper-slide-prev');
  const oldCaption = oldActive.find('.slide-inner--info');

  // out
  gsap.to(oldCaption,  {
    duration:.3,
    ease: "power2.easeOut",
    startAt: {
      autoAlpha: 1 },

    autoAlpha: 0 });
  // in
  gsap.set(slideCaption, { autoAlpha: 0 });
  gsap.to(slideCaption,  {
    ease: "power4.easeOut",
    duration:2,
    startAt: {
      autoAlpha: 0,
      y: "-150%",
      x: "100%"

    },

    autoAlpha: 1,
    y: "50%",
    x: "35%",

    display: "block" });

}


export default moveDownText;
