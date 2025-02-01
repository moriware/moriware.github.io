document.addEventListener('DOMContentLoaded', () => {
  const createObserver = (elements, callback, options = { threshold: 0.2 }) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elements.forEach((element) => observer.observe(element));
  };

  window.addEventListener('scroll', function () {
    dataLayer.push({
      event: 'scroll',
      scrollPercent: Math.round(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100,
      ),
    });
  });

  window.addEventListener('gtm.load', function (event) {
    console.log('Container Loaded:', event.detail.containerId);
  });

  const activateElement = (element) => {
    element.classList.add('active');
  };

  const initProjectAnimations = () => {
    const projetos = document.querySelectorAll('.projeto');
    if (projetos.length > 0) {
      createObserver(projetos, activateElement);
    }
  };

  const initTestimonialAnimation = () => {
    const testimonial = document.querySelector('.testimonials blockquote');
    if (testimonial) {
      testimonial.classList.add('hidden');
      createObserver([testimonial], activateElement);
    }
  };

  const scrollToPosition = (position) => {
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  };

  const initLogoScroll = () => {
    const logo = document.getElementById('logo');
    if (logo) {
      logo.addEventListener('click', (event) => {
        event.preventDefault();
        scrollToPosition(0);
      });
    }
  };

  const initGitHubButtons = () => {
    const gitHubButtons = document.querySelectorAll('.button-primary');
    gitHubButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.stopPropagation(); // Previne que o evento clique se propague para elementos pais
      });
    });
  };

  initProjectAnimations();
  initTestimonialAnimation();
  initLogoScroll();
  initGitHubButtons();
});

document.getElementById('currentYear').textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});
