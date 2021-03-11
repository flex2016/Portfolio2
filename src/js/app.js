import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

import {   animationEnterHome, animationEnterProject,animationEnterProjectFadeIn,
             animationLeave, animationLeaveSlideImage } from './animations';
import {  introSlide} from "./animations/gsap";
import { swiperProjects, swiperResults } from "./components/swiper";
import { scrollReveal, scrollTo, scrollHeader } from "./components/scroll";
import { textTransform } from "./components";
import "splitting/dist/splitting.css";

import Splitting from "splitting";
import LocomotiveScroll from 'locomotive-scroll';
import "../scss/style.scss";



gsap.registerPlugin(ScrollTrigger);

// const pageContainer = document.querySelector('[data-scroll-container]');
// // init LocomotiveScroll on page load
// let scroll = new LocomotiveScroll({
//   el: pageContainer,
//   smooth: true
// });


// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true
// });

// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("[data-scroll-container]", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
// });

// locoScroll.on("scroll", ScrollTrigger.update);


// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// let scroll;


// function smooth() {
// 	console.log("working")
// 	scroll = new LocomotiveScroll({
// 		el: document.querySelector('[data-scroll-container]'),
// 		smooth: true
// 	});
// }



// update the scroll after entering a page
barba.hooks.after(() => {
  scroll.update();

});

barba.hooks.once(({next}) => {
  scrollReveal(next.container);
  scrollHeader()
  textTransform()
  	// smooth(next.container);
});

barba.hooks.afterLeave(({current}) => {
  current.container.remove();
});

barba.hooks.beforeEnter(() => {
  ScrollTrigger.getAll().forEach(t => t.kill());
});

barba.hooks.enter(({next}) => {
  window.scrollTo(0, 0);
  scrollReveal(next.container);
  // scrollHeader();
  textTransform()
  // smooth(next.container);
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
      // beforeEnter() {
      //    locotest()
      // },
      once({next}) {
        swiperProjects()
        scrollTo()
        introSlide(next.container)
        animationEnterHome(next.container)
        Splitting();
        	// smooth(next.container);

      },
      leave: ({current}) => animationLeave(current.container),
        // const done =this.async()
        // animationLeave(current.container, done)
      enter:({next})=> {
        animationEnterHome(next.container)
        introSlide(next.container)
        swiperProjects()
        Splitting();
        scrollTo()
        	// smooth(next.container);
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
        	// smooth(next.container);
			},
			enter: ({ next }) => {
        swiperResults()
				animationEnterProject(next.container)
        	// smooth(next.container);

			}
		},
     {
			name: 'project-fadeIn',
			to: {
				namespace: ['project-fadeIn']
      },
      leave: ({current}) => animationLeave(current.container),
			once: ({ next }) => {
        swiperResults()
				animationEnterProjectFadeIn(next.container);
			},
			enter: ({ next }) => {
        swiperResults()
				animationEnterProjectFadeIn(next.container)
			}
		},
      {
      name: 'from-project',
      from: {
				namespace: ['project']
			},
			to: {
				namespace: ['project', 'architecture']
			},
      leave: ({current}) => animationLeave(current.container),
      enter:({next})=> {
        swiperResults()
        animationEnterProject(next.container)
      },
    }

  ],
});
