const child = document.querySelector(".child");
const cd = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("inview");
      entry.target.classList.add("inview");
        observer.unobserve(entry.target);
        console.log(entry.target);
    } else {
      console.log("out view");
      entry.target.classList.remove("inview");
    }
  });
  //   alert('intersecting');
};
const options = {
  root: null,
  rootMargin: "-300px 0px 0px 0px",
  threshold: [0, 0.5, 1],
};
const io = new IntersectionObserver(cd, options);
io.observe(child);
// io.observe(child1);
// io.observe(child2);
