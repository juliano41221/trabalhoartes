document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.tema, .obra, .detalhe-obra');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // adiciona animação com delay progressivo
                entry.target.style.transitionDelay = `${index * 80}ms`;

                // sorteia um efeito leve (topo, esquerda, direita, zoom)
                const effects = ['fade-up', 'fade-left', 'fade-right', 'zoom-in'];
                const effect = effects[Math.floor(Math.random() * effects.length)];
                entry.target.classList.add('visible', effect);

                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -20% 0px',
        threshold: 0.1
    });

    animatedElements.forEach(element => observer.observe(element));
});
