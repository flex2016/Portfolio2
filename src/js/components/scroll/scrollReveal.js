import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector('[data-scroll-container]');
import LocomotiveScroll from 'locomotive-scroll';




const animateFrom = (elem,container, direction) =>{
  direction = direction | 1;
// console.log(elem)
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
    overwrite: "auto",
    //  scroller: container
  });
}

const hide = (elem) => {
  // console.log(`hide ${elem}`)
  gsap.set(elem, {autoAlpha: 0});
}

const scrollReveal = (container)=>{
  const reveal = container.querySelectorAll('.gs_reveal');
  let newContainer =container.parentNode
  gsap.utils.toArray(reveal).forEach(function(elem) {

    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      // scroller: newContainer,
      onEnter: function() {animateFrom(elem, newContainer) },
      onEnterBack: function() { animateFrom(elem,newContainer, -1)},
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
		});

  });

}


export default scrollReveal;
