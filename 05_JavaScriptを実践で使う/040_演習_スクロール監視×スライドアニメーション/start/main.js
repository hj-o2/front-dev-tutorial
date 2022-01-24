document.addEventListener("DOMContentLoaded", () => {
  const cb = (el, isIntersecting) => {
    if (isIntersecting) {
      el.classList.add("inview");
    }
  };
  const so = new ScrollObserver(".cover-slide", cb);
});
