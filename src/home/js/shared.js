// import Swiper, { Pagination, Navigation, EffectCoverflow , Mousewheel} from "swiper";
// import "swiper/swiper-bundle.css";
import barba from '@barba/core';
import barbaCss from '@barba/css';

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


// configure Swiper to use modules
// Swiper.use([Pagination, Navigation, EffectCoverflow, Mousewheel]);

// var swiper = new Swiper(".swiper-container", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });



// var swipertwo = new Swiper(".swiper-container-two", {
//   slidesPerView: 1,
//   // autoHeight: true,
//   // loop: true,
//   mousewheel: {
//     releaseOnEdges: true,
//     sensitivity:1,
//   },
//   breakpoints: {
//                 800: {
//                     slidesPerView: 2
//                 }
//             }
// });
