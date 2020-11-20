import Swiper, { Pagination, Navigation, EffectCoverflow , Mousewheel} from "swiper";
import "swiper/swiper-bundle.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

import barba from '@barba/core';
import barbaCss from '@barba/css';

import "../scss/style.scss";

// import "./shared"

// import * as helperModule from "./script";

// const foo = (name) => {
//   console.log(`Hello ${name}`);
// };

// foo("Bob");
// console.log(helperModule.greetings);

// import Swiper JS





// tell Barba to use the css plugin
barba.use(barbaCss);


// barba.init({
//   transitions: [
//     {
//       name: 'home',
//       sync: true,
//       to: { namespace: ['home'] },
//       once() {},
//       leave() {},
//       enter() {},
//     }, {
//       name: 'fade',

//       to: { namespace: ['fade'] },
//       leave() {},
//       enter() {},
//     }, {
//       name: 'clip',
//       sync: true,
//       to: { namespace: ['clip'] },
//       leave() {},
//       enter() {},
//     }, {
//       name: 'with-cover',
//       sync: true,
//       to: { namespace: ['with-cover'] },
//       leave() {},
//       enter() {},
//     },
//   ],
// });



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

var swipertwo = new Swiper(".swiper-container-two", {
  slidesPerView: 1,
  // autoHeight: true,
  // loop: true,
  mousewheel: {
    releaseOnEdges: true,
    sensitivity:1,
  },
  breakpoints: {
                800: {
                    slidesPerView: 2
                }
            }
});

function animateFrom(elem, direction) {
  direction = direction | 1;

  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if(elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) },
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});
