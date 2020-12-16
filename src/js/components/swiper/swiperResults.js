import Swiper, { Pagination, Navigation, EffectCoverflow , Mousewheel} from "swiper";
Swiper.use([Pagination, Navigation, EffectCoverflow, Mousewheel]);

const swiperResults = () => {
    new Swiper(".swiper-container-two", {
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
}


export default swiperResults;
