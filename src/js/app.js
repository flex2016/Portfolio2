import barba from '@barba/core';
import Swiper, { Pagination, Navigation, EffectCoverflow , Mousewheel} from "swiper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";

import {  animationEnter, animationLeave } from './animations';

import "swiper/swiper-bundle.css";
import "../scss/style.scss";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
Swiper.use([Pagination, Navigation, EffectCoverflow, Mousewheel]);

// let test = document.querySelector(".header a.header__contact i")
// console.log(test)
// const resetActiveLink = () => gsap.set('.test ', {
//   xPercent:-100,
//   transformOrigin: "left"
// })


barba.init({

  transitions: [
     {
        once({next}) {

        // resetActiveLink()
        // gsap.from('.header__nav li, .hero__content-title h1,.hero__content-message span, .project__nav-text span, .header__big test span', {
        //     duration: .6,
        //     yPercent: 100,
        //     // autoAlpha: 0,
        //     stagger: .2,
        //     ease: 'power1.out',
        //     onComplete: () =>animationEnter(next.container)
        // }),
        // gsap.fromTo('.hero__image-container img', {height:"100vh", width:"100%",},
        // {duration: 1.2, height:"50vh", width:"50%", delay: 1.2}, 0)



        // scrollReveal(next.container)


        swiper()
        swipertwo()
        // console.log(data)
        animationEnter(next.container)
      },
       leave(data) {
        console.log(data)
        console.log("leave")
        animationLeave(data.current.container)
       data.current.container.remove();
          console.log(data)
        // ScrollTrigger.getAll().forEach(t => t.kill());

      },
      //  afterLeave(data){
      //   console.log(data)
      //     console.log("afterleave")
      //   data.current.container.remove();
      //   console.log(data)
      // },
      beforeEnter() {
         ScrollTrigger.getAll().forEach(t => t.kill());
        gsap.to(window, {duration: 0, scrollTo: 0});


			},
       enter({next}) {
        // scrollReveal(next.container)



          swiper()
          swipertwo()
        animationEnter(next.container)
      },

    },

  ],
});
// function resize(){
//   var tl;


// function buildAnimation() {
//   var time = tl ? tl.time() : 0;
//   if (tl) {
//     tl.kill();
//   }

//      tl = gsap.timeline({
// 		onStart: () => console.log('starting animationEnter'),
// 		onComplete: () => console.log('completed animationEnter'),
// 		defaults: {
// 			duration: 0.9, ease: 'power4.out'
// 		}
// 	});
// 	tl
// 		.from('.header__nav li, .hero__content-title h1,.hero__content-message span, .project__nav-text span, .header__big test span', {

//         yPercent: 100,
//         // autoAlpha: 0,
//         stagger: .2,
//         ease: 'power1.out',
//           clearProps:"all",
//         // onComplete: () =>animationEnter(next.container)
//     })
//     .fromTo('.hero__image-container img', {height:"100vh", width:"100%",},
//     { height:"50vh", width:"50%"}, 0);
//     tl.time(time);
// }
// // console.log(tl)

// window.addEventListener("resize", buildAnimation);

// }


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
