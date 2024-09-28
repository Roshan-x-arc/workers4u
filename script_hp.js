// script.js
console.log("Welcome to Domestic Workers Connect!");

document.getElementById('search-btn').addEventListener('click', function() {
    const searchTerm = document.querySelector('input[type="text"]').value;
    if (searchTerm) {
        alert(`Searching for: ${searchTerm}`);
    } else {
        alert("Please enter a service to search.");
    }
});

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => 
        {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

document.getElementById('next').addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.getElementById('prev').addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Auto-slide functionality (optional)
setInterval(function() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000); // Change slide every 5 seconds
