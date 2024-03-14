let slides = Array.from(document.querySelectorAll('.slide'));
let bullets = Array.from(document.querySelectorAll('.bullet'));
let activeIndex = 0;

setInterval(() => {
  slides[activeIndex].classList.remove('active');
  bullets[activeIndex].classList.remove('active');
  activeIndex = (activeIndex + 1) % slides.length;
  slides[activeIndex].classList.add('active');
  bullets[activeIndex].classList.add('active');
}, 3000);