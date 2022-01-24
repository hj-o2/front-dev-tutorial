document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".animate-title");
  const cb = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        const ta = new TextAnimation(entry.target);
        ta.animate();
        observer.unobserve(entry.target);
      }
    });
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };
  const io = new IntersectionObserver(cb, options);
  els.forEach((el) => io.observe(el));
});
