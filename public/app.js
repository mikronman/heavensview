const navbar = document.getElementById("navbar");
const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Navbar toggle
  if (scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Parallax effect
  if (heroBg) {
    heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
  }
});

document.getElementById("footer-year").textContent =
  new Date().getFullYear();
