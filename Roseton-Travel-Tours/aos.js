AOS.init();

// above-the-fold custom animations on content loaf
const h1 = document.querySelector("h1");
const heroLogo = document.querySelector(".hero-top");

window.addEventListener("load", () => {
  h1.classList.toggle("fade-in");
  heroLogo.classList.toggle("fade-in");
});
