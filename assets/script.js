let currentIndex = 0;

const slides = document.getElementById('slides');
const totalSlides = document.querySelectorAll('.slide').length;

document.getElementById('next').addEventListener('click', () => {
    moveToNextSlide();
    resetAutoplay();
});

document.getElementById('prev').addEventListener('click', () => {
    moveToPreviousSlide();
    resetAutoplay();
});

function moveToNextSlide() {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlidePosition();
}

function moveToPreviousSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Autoplay functionality
let autoplayInterval = setInterval(moveToNextSlide, 3000);

function resetAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(moveToNextSlide, 3000);
}
