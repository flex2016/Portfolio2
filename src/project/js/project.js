import Swiper, { Pagination, Navigation, EffectCoverflow, Mousewheel } from "swiper";
import "swiper/swiper-bundle.css";

import "../scss/style.scss";

// import * as helperModule from "./script";

// const foo = (name) => {
//   console.log(`Hello ${name}`);
// };

// foo("Bob");
// console.log(helperModule.greetings);

// import Swiper JS

// configure Swiper to use modules
Swiper.use([Pagination, Navigation, EffectCoverflow, Mousewheel]);

var swipertwo = new Swiper(".swiper-container-two", {
  slidesPerView: 2,

  // loop: true,
  mousewheel: {
    releaseOnEdges: true,
    sensitivity:1,
  },
});
