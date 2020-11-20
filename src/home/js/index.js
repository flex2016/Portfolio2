import Swiper, { Pagination, Navigation, EffectCoverflow , Mousewheel} from "swiper";
import "swiper/swiper-bundle.css";

import "../scss/style.scss";
import barba from '@barba/core';
import barbaCss from '@barba/css';

import "./shared"

// import * as helperModule from "./script";

// const foo = (name) => {
//   console.log(`Hello ${name}`);
// };

// foo("Bob");
// console.log(helperModule.greetings);

// import Swiper JS





// tell Barba to use the css plugin
barba.use(barbaCss);


barba.init({
  transitions: [
    {
      name: 'home',
      sync: true,
      to: { namespace: ['home'] },
      once() {},
      leave() {},
      enter() {},
    }, {
      name: 'fade',

      to: { namespace: ['fade'] },
      leave() {},
      enter() {},
    }, {
      name: 'clip',
      sync: true,
      to: { namespace: ['clip'] },
      leave() {},
      enter() {},
    }, {
      name: 'with-cover',
      sync: true,
      to: { namespace: ['with-cover'] },
      leave() {},
      enter() {},
    },
  ],
});



Swiper.use([Pagination, Navigation, EffectCoverflow, Mousewheel]);

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
