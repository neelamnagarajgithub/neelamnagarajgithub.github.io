// Example: Smooth scroll (if you want)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

const fadeEls = document.querySelectorAll('.fade-in');

    const appearOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });

    fadeEls.forEach(el => {
      appearOnScroll.observe(el);
    });

  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }

  
  // Scroll Left
  function scrollLeft(containerId) {
    const container = document.getElementById(containerId);
    container.scrollLeft -= 200; // Adjust scroll distance as needed
  }

  // Scroll Right
  function scrollRight(containerId) {
    const container = document.getElementById(containerId);
    container.scrollLeft += 300; // Adjust scroll distance as needed
  }

  // Automatic Scrolling
  function autoScroll(containerId) {
    const container = document.getElementById(containerId);
    let scrollAmount = 0;
    const maxScroll = container.scrollWidth - container.clientWidth;

    setInterval(() => {
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0; // Reset scroll to the beginning
        container.scrollLeft = 0;
      } else {
        scrollAmount += 300; // Adjust scroll distance as needed
        container.scrollLeft += 300;
      }
    }, 10000); // Scroll every 10 seconds
  }

  // Initialize auto-scrolling for the projects container
  autoScroll('projects-container');
  autoScroll('hackathons-container');
