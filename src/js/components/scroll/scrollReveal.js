import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

const animateFrom = (elem, direction) =>{
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
    overwrite: "auto"
  });
}

const hide = (elem) => {
  // console.log(`hide ${elem}`)
  gsap.set(elem, {autoAlpha: 0});
}

const scrollReveal = (container)=>{
  const reveal = container.querySelectorAll('.gs_reveal');

  gsap.utils.toArray(reveal).forEach(function(elem) {

    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() {animateFrom(elem) },
      onEnterBack: function() { animateFrom(elem, -1)},
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
		});

  });

}


export default scrollReveal;
