import barba from '@barba/core';
import barbaCss from '@barba/css';

// tell Barba to use the css plugin
barba.use(barbaCss);

barba.init({
  transitions: [
    {
      name: 'home',

      beforeOnce() {
        console.log("before once")
      },
      once() {
        console.log(" once")
      },
      afterOnce() {
        console.log("after once")
      },

    },
    {
      name: 'fader',
      to: { namespace: ['fader'] },
      leave() {
        console.log("leave")
      },
      enter() {
         console.log("enter")
      },
    },

  ],
});
