document.addEventListener('DOMContentLoaded', () => {
    // 1. ANIMAÇÃO DE FADE-IN PARA TODOS OS ELEMENTOS COM CLASSES DE ANIMAÇÃO
    // O JavaScript é usado para garantir que a animação só comece após o carregamento da página.

    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');

    animatedElements.forEach(element => {
        // A classe é adicionada imediatamente. O CSS fará o resto do trabalho.
        element.style.opacity = 0; // Garante que a opacidade inicial seja 0 para o CSS animar
        
        // Timeout pequeno para garantir que o navegador "veja" a opacidade 0 antes de aplicar a animação
        setTimeout(() => {
            element.style.opacity = 1; 
            // O CSS já contém a definição da animação (tempo, curva, etc.)
            // Poderíamos usar Intersection Observer para animar APENAS quando o elemento entra na tela,
            // mas para um efeito de carregamento simples, esta abordagem é mais direta.
        }, 50);
    });

    // 2. Animação adicional para a página de Download
    if (document.body.classList.contains('download')) {
        const mockup = document.querySelector('.phone-mockup');
        if (mockup) {
            mockup.style.animation = 'fadeInUp 1s ease-out forwards';
        }
    }
});