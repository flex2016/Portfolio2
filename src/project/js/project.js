import Swiper, { Pagination, Navigation, EffectCoverflow, Mousewheel } from "swiper";
import "swiper/swiper-bundle.css";

import "../scss/style.scss";

// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init({
//   easing: 'ease-in-cubic'

// });

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

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
Swiper.use([Pagination, Navigation, EffectCoverflow, Mousewheel]);

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

// On Mouse MOve the background position moves

if('ontouchstart' in window == false){
  var containertwo = document.querySelector(".container-two");
  var projectNav = document.querySelector(".project__nav");
  var projectNavText = document.querySelector(".project__nav-text");
  containertwo.addEventListener('mousemove', e => {
    var moveX = (e.pageX * -1 / 25);
    var moveY = (e.pageY * -1 / 25);
    projectNav.style.setProperty('background-position', moveX + 'px ' + moveY + 'px');
    // projectNavText.style.transform = `translate(${moveY}px, ${moveX}px)`;
})
}
