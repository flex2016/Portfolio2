import barba from '@barba/core';
import Swiper, { Pagination, Navigation, EffectCoverflow , Mousewheel} from "swiper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";


import "swiper/swiper-bundle.css";
//import barbaCss from '@barba/css';
import "../scss/style.scss";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
Swiper.use([Pagination, Navigation, EffectCoverflow, Mousewheel]);
// tell Barba to use the css plugin
// barba.use(barbaCss);

// const body = document.querySelector('body');

// barba.hooks.enter(() => {
//           scrollReveal()
//             swiper()
//             swipertwo()
// });

const animationEnter = (container) => {
	// console.log(container);
	return gsap.from(container, {
		duration: .7,
    autoAlpha: 0,
    clearProps:"all",
    ease:'none'
	});
}
const animationLeave = (container, done) => {
  // console.log(container);

	return gsap.to(container, {
				duration: .7,
    autoAlpha: 0,
    clearProps:"all",
    ease:'none',
     onComplete: () => done()
	});
}

barba.init({
  transitions: [
     {

      // before(){
      //   console.log("before")
      //       scrollReveal()
      //       swiper()
      //       swipertwo()
      // },
      // after(){
      //   console.log("after")
      // },
      // beforeOnce(data) {
      //   console.log("before once")
      //       scrollReveal()
      //       swiper()
      //       swipertwo()
      //       data.next.container.style.backgroundColor = 'white';
      // },
      once({next}) {
        scrollReveal()
        swiper()
        swipertwo()
        console.log("once")
        animationEnter(next.container)
      },
      leave({current}) {
        console.log("leave")
        const done = this.async()
        animationLeave(current.container, done)
      },
      enter({next}) {
        scrollReveal()
        swiper()
        swipertwo()
        console.log("enter")
        animationEnter(next.container)
      },
      // beforeLeave() {
      // console.log("before leave")
      // },
      // leave() {},
      // beforeEnter() {

      //       scrollReveal()
      //       swiper()
      //       swipertwo()
      //       // data.next.container.style.backgroundColor = 'white';
      // },
      // enter() {},
    },

  ],
});


function swipertwo() {
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
  return swipertwo

}
function swiper() {
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
  return swiper
}

//Case Study page on scroll animations
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
  // console.log(`hide ${elem}`)
  gsap.set(elem, {autoAlpha: 0});
}

function scrollReveal() {
   gsap.registerPlugin(ScrollTrigger);
  gsap.to(window, {duration: 0, scrollTo: 0});
  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    console.log(elem)
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: 'elem',
      onEnter: function() { animateFrom(elem) },
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
}


// document.addEventListener("DOMContentLoaded", function() {
//   scrollReveal()
//   swiper()
//   swipertwo()
// });

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
