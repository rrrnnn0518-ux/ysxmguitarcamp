document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for hero graphics
    const heroSection = document.querySelector('.hero');
    const heroImages = document.querySelectorAll('.hero-img');

    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            heroImages.forEach((img, index) => {
                const speed = (index + 1) * 15;
                const offsetX = (0.5 - x) * speed;
                const offsetY = (0.5 - y) * speed;
                
                // Add the parallax offset while keeping the original rotation
                const baseTransform = img.classList.contains('img-1') ? 'rotate(5deg)' : 'rotate(-5deg)';
                img.style.transform = `translate(${offsetX}px, ${offsetY}px) ${baseTransform}`;
            });
        });
    }

    // Scroll reveal animation observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    animatedElements.forEach(el => observer.observe(el));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Account for fixed header
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
