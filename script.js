document.addEventListener('DOMContentLoaded', () => {
  const initCurrentYear = () => {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  };

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

  const activateElement = (element) => {
    element.classList.add('active');
  };

  const initProjectAnimations = () => {
    const projetos = document.querySelectorAll('.projeto');
    if (projetos.length > 0) {
      createObserver(projetos, activateElement);
    }
  };

  const initFeatureAnimations = () => {
    const features = document.querySelectorAll('.parallax-features .feature');
    if (features.length > 0) {
      features.forEach((feature) => feature.classList.add('hidden'));
      createObserver(features, activateElement);
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

  const initContactButtonScroll = () => {
    const contactButton = document.getElementById('contactButton');
    if (contactButton) {
      contactButton.addEventListener('click', (event) => {
        event.preventDefault();
        scrollToPosition(document.body.scrollHeight);
      });
    }
  };

  initCurrentYear();
  initProjectAnimations();
  initFeatureAnimations();
  initTestimonialAnimation();
  initLogoScroll();
  initContactButtonScroll();
});
