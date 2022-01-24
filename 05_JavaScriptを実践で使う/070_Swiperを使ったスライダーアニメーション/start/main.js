document.addEventListener("DOMContentLoaded", () => {
  const hero = new HeroSlider(".swiper");
  hero.start({ delay: 3000 });

  setTimeout(() => {
    hero.stop();
  }, 10000);
});
