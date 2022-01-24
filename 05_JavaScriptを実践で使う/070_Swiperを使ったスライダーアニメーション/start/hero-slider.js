class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      //   direction: "vertical",
      loop: true,
      grabCursor: "coverflow",
      effect: "coverflow",
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      breakpoints: {
        1024: {
          slidesPerView: 2,
        },
      },
    });
  }

  start(options = {}) {
    options = Object.assign(
      {
        delay: 4000,
        disableOnInteraction: false,
      },
      options
    );
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
    // console.log("start:" + this.swiper.autoplay.start());
  }

  stop() {
    this.swiper.autoplay.stop();
    // console.log("end:" + this.swiper.autoplay.stop());
  }
}
