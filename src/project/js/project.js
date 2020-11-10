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

// On Mouse MOve teh backgroubnd position moves

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
