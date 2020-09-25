import Swiper, { Pagination, Navigation, EffectCoverflow } from "swiper";

import "swiper/swiper-bundle.css";
// import Swiper JS

// configure Swiper to use modules
Swiper.use([Pagination, Navigation, EffectCoverflow]);

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
