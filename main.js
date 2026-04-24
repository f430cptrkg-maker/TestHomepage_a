document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const hero = document.getElementById('hero');

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.8rem 0';
            header.style.background = 'rgba(10, 14, 26, 0.95)';
        } else {
            header.style.padding = '1.5rem 0';
            header.style.background = 'rgba(10, 14, 26, 0.8)';
        }
    });

    // Intersection Observer for fade-in elements
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.product-card, .ceo-profile, .section-header').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
