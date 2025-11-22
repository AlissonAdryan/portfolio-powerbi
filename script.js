const elementsToAnimate = document.querySelectorAll('.hidden');

const observerOptions = {
    root: null, 
    threshold: 0.1, 
    rootMargin: "0px" 
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
        else {
            entry.target.classList.remove('show');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

elementsToAnimate.forEach((el) => observer.observe(el));