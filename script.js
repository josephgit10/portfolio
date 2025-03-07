document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
  });

  // Fade-in effect on scroll using IntersectionObserver
  const sections = document.querySelectorAll('section');
  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(section => {
    // Start each section hidden
    section.classList.add('hidden');
    observer.observe(section);
  });
});