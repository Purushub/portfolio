// Simple header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});
let slideIndex = 0;
showSlide(slideIndex);

// Next/Previous controls
function changeSlide(n) {
  showSlide(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");

  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

// Optional: Auto-slide every 5 seconds
setInterval(() => {
  changeSlide(1);
}, 5000);
// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
      const hash = this.hash;
      document.querySelector(hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});