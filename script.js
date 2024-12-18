document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }

    const projetos = document.querySelectorAll('.projeto');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    projetos.forEach(projeto => observer.observe(projeto));

    const features = document.querySelectorAll('.parallax-features .feature');
    const testimonial = document.querySelector('.testimonials blockquote');

    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
                featureObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    features.forEach(feature => {
        feature.classList.add('hidden');
        featureObserver.observe(feature);
    });

    if(testimonial) {
        const testimonialObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('active');
                    testimonialObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        testimonial.classList.add('hidden');
        testimonialObserver.observe(testimonial);
    }
});