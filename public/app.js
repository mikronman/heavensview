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

  document.querySelectorAll('.cta-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (typeof gtag === 'function') {
      gtag('event', 'book_now_click', {
        event_category: 'engagement',
        event_label: 'airbnb_booking'
      });
      gtag('event', 'conversion', {
        'send_to': 'AW-726570860/8NVrCMCllrYYEOyuutoC',
        'event_callback': callback
      });
    }
  });
});


let scrollTracked = false;

window.addEventListener('scroll', () => {
  if (scrollTracked) return;

  const scrollPercent =
    (window.scrollY + window.innerHeight) / document.body.scrollHeight;

  if (scrollPercent > 0.75) {
    scrollTracked = true;
    gtag('event', 'scroll_75_percent', {
      event_category: 'engagement'
    });
  }
});
