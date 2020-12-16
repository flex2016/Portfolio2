import Swiper, {  Navigation,  Mousewheel} from "swiper";
import "swiper/swiper-bundle.css";
Swiper.use([ Navigation,  Mousewheel]);
import {moveDownText} from "../../animations/gsap"

const swiperProjects = () => {
    new Swiper(".swiper-container", {
    slidesPerView: 1,
    speed: 1200,
    grabCursor: true,
    mousewheel: true,
    loop: true,
    // parallax: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    runCallbacksOnInit: true,
		on: {
    init: function () {
      moveDownText(this.$el)
    },
    slideNextTransitionStart: function () {
      moveDownText(this.$el)
    },
    slidePrevTransitionStart: function () {
      moveDownText(this.$el)
    }
	}
  });
}


export default swiperProjects;
