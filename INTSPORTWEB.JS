let currentSlideIndex = 0;
let slideTimer;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    const indicators = document.querySelectorAll('.dot');
    const allSlides = document.querySelectorAll('.slide');

    if (index >= totalSlides) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = totalSlides - 1;
    } else {
        currentSlideIndex = index;
    }

    const offset = -currentSlideIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;

    indicators.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSlideIndex);
    });

    allSlides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === currentSlideIndex);
    });

    resetTimer();
}

function nextSlide(event) {
    showSlide(currentSlideIndex + 1);
}

function prevSlide(event) {
    showSlide(currentSlideIndex - 1);
}

function currentSlide(index) {
    showSlide(index);
}

function autoSlide() {
    slideTimer = setTimeout(() => {
        nextSlide();
        autoSlide();
    }, 9000);
}

function resetTimer() {
    clearTimeout(slideTimer);
    autoSlide();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlideIndex);
    autoSlide();
});

function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
}

function toggleSubmenu(event, submenuId) {
    event.preventDefault();
    const submenu = document.getElementById(submenuId);
    submenu.classList.toggle('show');
}
function toggleFooterSubmenu(event) {
    event.preventDefault();
    const submenu = event.target.nextElementSibling;
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}
