import VanillaTilt from 'vanilla-tilt';

function tiltImage(){
 VanillaTilt.init(document.querySelector(".hero__image"), {
		max: 10,
    speed: 400,
    perspective:1200,


	});
}

export default tiltImage;
