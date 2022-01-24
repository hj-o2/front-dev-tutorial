document.addEventListener("DOMContentLoaded", function () {
  const cb = (el, isIntersecting) => {
    if (isIntersecting) {
      const ta = new TextAnimation(el);
      ta.animate();
    }
  };

  const so = new ScrollObserver(".animate-title", cb);
  so.destory();
});


