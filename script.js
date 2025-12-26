// Simple header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

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