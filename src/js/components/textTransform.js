

function textTransform(){
  // On Mouse MOve the background position moves
  var containertwo = document.querySelector(".container-two");

  var projectNavText = document.querySelector(".project__hero-text");
  if('onmousemove' in window == true){
    containertwo.addEventListener('mousemove', e => {
      var moveX = (e.pageY * -1 / 25);
      var moveY = (e.pageX * -1 / 25);
      // projectNav.style.setProperty('background-position', moveX + 'px ' + moveY + 'px');
      projectNavText.style.transform = `translate(${moveY}px, ${moveX}px)`;
    })
  }
}

export default textTransform;
