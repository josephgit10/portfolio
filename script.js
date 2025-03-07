document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
  });

  // Fade-in effect on scroll using IntersectionObserver
  const sections = document.querySelectorAll('section.hidden');
  const options = { threshold: 0.1 };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });

  // Modal functionality
  const resumeModalTrigger = document.querySelector('.resume-modal-trigger');
  const resumeModal = document.getElementById('resume-modal');
  const closeModalBtn = document.querySelector('.close-modal');

  // Open modal
  resumeModalTrigger.addEventListener('click', () => {
    resumeModal.style.display = 'block';
  });

  // Close modal
  closeModalBtn.addEventListener('click', () => {
    resumeModal.style.display = 'none';
  });

  // Close modal when clicking outside modal content
  window.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
      resumeModal.style.display = 'none';
    }
  });
});
