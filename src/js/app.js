import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
// import VanillaTilt from 'vanilla-tilt';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";

import {   animationEnterHome, animationEnterProject,
             animationLeave, animationLeaveSlideImage } from './animations';
import {  introSlide, skewImg} from "./animations/gsap";
import { swiperProjects, swiperResults } from "./components/swiper";
import { scrollReveal, scrollTo } from "./components/scroll";

import "../scss/style.scss";

gsap.registerPlugin(ScrollTrigger);

// function tiltImage(){
//  VanillaTilt.init(document.querySelector(".hero__test"), {
// 		max: 25,
// 		speed: 400
// 	});
// }



barba.hooks.once(({next}) => {
  scrollReveal(next.container);
  introSlide()
  scrollTo()
  skewImg ()

});
barba.hooks.afterLeave(({current}) => {
  current.container.remove();
});
barba.hooks.beforeEnter(() => {
  ScrollTrigger.getAll().forEach(t => t.kill());
});

barba.hooks.enter(({next}) => {
  skewImg()
  scrollTo()
  introSlide()
  window.scrollTo(0, 0);
  scrollReveal(next.container);
});

barba.use(barbaPrefetch)

barba.init({
  // requestError: (trigger, action, url, response) => {
  //   if(response.status == 404)
  //     barba.go('/');
  //   return false;
  // },
  transitions: [
     {
       name: 'home',
      to: {
				namespace: ['home']
			},
      once({next}) {
        swiperProjects()
        animationEnterHome(next.container)
      },
      leave: ({current}) => animationLeave(current.container),
        // const done =this.async()
        // animationLeave(current.container, done)
      enter:({next})=> {
        swiperProjects()
        animationEnterHome(next.container)
      },
    },
      {
      name: 'from-home',
      from: {
				namespace: ['home']
			},
			to: {
				namespace: ['project', 'architecture']
			},
      leave: ({ current }) => animationLeaveSlideImage(current.container),
      enter:({next})=> {
        swiperResults()
        animationEnterProject(next.container)
      },
    },
     {
			name: 'project',
			to: {
				namespace: ['project']
			},
			once: ({ next }) => {
        swiperResults()
				animationEnterProject(next.container);
			},
			enter: ({ next }) => {
        swiperResults()
				animationEnterProject(next.container)
			}
		}

  ],
});



// if ('scrollRestoration' in history) {
//     history.scrollRestoration = 'manual';
//   }

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
