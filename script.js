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

  // Função para abrir o modal
  const openModal = (videoSrc) => {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    modalVideo.src = videoSrc;
    modal.classList.add('active');
  };

  // Função para fechar o modal
  const closeModal = () => {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    modal.classList.remove('active');
    modalVideo.src = '';
  };

  // Adicionar eventos aos botões de play
  const initPlayButtons = () => {
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const videoSrc = button.getAttribute('data-video');
        openModal(videoSrc);
      });
    });
  };

  // Evento para fechar o modal
  const initModalClose = () => {
    const closeBtn = document.getElementById('modalClose');
    closeBtn.addEventListener('click', closeModal);
    const modal = document.getElementById('videoModal');
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  };

  const initGitHubButtons = () => {
    const gitHubButtons = document.querySelectorAll('.button-primary');
    gitHubButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.stopPropagation(); // Previne que o evento clique se propague para elementos pais
      });
    });
  };

  initCurrentYear();
  initProjectAnimations();
  initFeatureAnimations();
  initTestimonialAnimation();
  initLogoScroll();
  initContactButtonScroll();
  initPlayButtons();
  initModalClose();
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
