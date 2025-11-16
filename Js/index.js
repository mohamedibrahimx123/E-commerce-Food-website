const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const toTopBtn = document.getElementById("toTopBtn");
const footer = document.getElementById("footer");

window.addEventListener("scroll", () => {
  const footerPosition = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerPosition < windowHeight) {
    toTopBtn.classList.add("show");
  } else {
    toTopBtn.classList.remove("show");
  }
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});