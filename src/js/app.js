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
// import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

import "../scss/style.scss";



gsap.registerPlugin(ScrollTrigger);




barba.hooks.once(({next}) => {
  scrollReveal(next.container);
  scrollHeader()
  textTransform()




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
        scrollTo()
        introSlide()
        animationEnterHome(next.container)
        Splitting();
      },
      leave: ({current}) => animationLeave(current.container),
        // const done =this.async()
        // animationLeave(current.container, done)
      enter:({next})=> {
        animationEnterHome(next.container)
        introSlide()
        swiperProjects()
        Splitting();


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
