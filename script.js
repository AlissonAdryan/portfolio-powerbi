// Seleciona todos os elementos que queremos animar (header e cards)
const elementsToAnimate = document.querySelectorAll('.hidden');

// Configurações do observador
const observerOptions = {
    root: null, // observa em relação à viewport (tela inteira)
    threshold: 0.1, // A animação ativa quando 10% do item estiver visível
    rootMargin: "0px" 
};

// A função que executa a lógica
const observerCallback = (entries) => {
    entries.forEach(entry => {
        // Se o elemento entrou na tela
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
        // Se o elemento saiu da tela (scroll para cima ou para baixo demais)
        else {
            entry.target.classList.remove('show');
        }
    });
};

// Cria o observador
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Manda o observador vigiar cada um dos nossos elementos
elementsToAnimate.forEach((el) => observer.observe(el));