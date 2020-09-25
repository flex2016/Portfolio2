import Swiper, { Pagination, Navigation, EffectCoverflow } from "swiper";
import "swiper/swiper-bundle.css";
// import "./swiperSlide";

import "../scss/style.scss";

// import * as helperModule from "./script";

// const foo = (name) => {
//   console.log(`Hello ${name}`);
// };

// foo("Bob");
// console.log(helperModule.greetings);

// import Swiper JS

// configure Swiper to use modules
// Swiper.use([Pagination, Navigation, EffectCoverflow]);

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

// var swiper = new Swiper(".swiper-container", {
//   effect: "flip",
//   grabCursor: true,
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
