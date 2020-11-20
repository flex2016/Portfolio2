

import Swiper, { Pagination, Navigation, EffectCoverflow , Mousewheel} from "swiper";
import "../scss/style.scss";
import barba from '@barba/core';
import "swiper/swiper-bundle.css";

import barbaCss from '@barba/css';



import "./shared"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);


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





// configure Swiper to use modules

// On Mouse MOve the background position moves
// var containertwo = document.querySelector(".container-two");
// var projectNav = document.querySelector(".project__nav");
// var projectNavText = document.querySelector(".project__nav-text");
// if('onmousemove' in window == true){
//   containertwo.addEventListener('mousemove', e => {
//     var moveX = (e.pageX * -1 / 25);
//     var moveY = (e.pageY * -1 / 25);
//     projectNav.style.setProperty('background-position', moveX + 'px ' + moveY + 'px');
//     // projectNavText.style.transform = `translate(${moveY}px, ${moveX}px)`;
// })
// }else{
//   console.log("hello")
//   projectNav.style.setProperty('background-position', 'center','top');
// }

// window.addEventListener('touchstart', function(event) {
//   console.log(event)
//     projectNav.style.setProperty('background-position', 'center','top');
// });




///Page Preloader
// const preloader = document.querySelector('.preloader');
// const fadeEffect = setInterval(() => {
//   // if we don't set opacity 1 in CSS, then
//   // it will be equaled to "" -- that's why
//   // we check it, and if so, set opacity to 1
//   if (!preloader.style.opacity) {
//     preloader.style.opacity = 1;
//   }
//   if (preloader.style.opacity > 0) {
//     preloader.style.opacity -= 0.1;
//   } else {
//     preloader.style.visibility = "hidden"
//     clearInterval(fadeEffect);
//   }
// }, 100);

// window.addEventListener('load', fadeEffect);




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
