// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Testimonial carousel (Re-purposed for project/review scrolling)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.testimonial-dot');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.opacity = i === index ? '1' : '0';
    });

    dots.forEach((dot, i) => {
        // Updated to new Primary Color: bg-[#06b6d4]
        dot.classList.toggle('bg-[#06b6d4]', i === index); 
        dot.classList.toggle('bg-[#cbd5e1]', i !== index);
    });

    currentTestimonial = index;
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        showTestimonial(parseInt(dot.dataset.index));
    });
});

// Auto-rotate testimonials
// Initialize the first dot state
if (testimonials.length > 0) {
    showTestimonial(0);
}

setInterval(() => {
    if (testimonials.length > 0) {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }
}, 6000);


// Scroll animations
const fadeElements = document.querySelectorAll('.fade-in');

function checkScroll() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Initial check
checkScroll();

// Check on scroll
window.addEventListener('scroll', checkScroll);

// Form submission
const orderForm = document.getElementById('order-form');

orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message, Ashish will contact you shortly to discuss your project.');
    orderForm.reset();
});
// script.js (file ke end me add karein)

const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');

// 1. Cursor movement logic
window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot turant move hoga
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline thoda delay ke saath smooth follow karega (CSS transition handle kar raha hai)
    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;
});

// 2. Hover effect logic
const clickableElements = document.querySelectorAll('a, button, input, textarea, .group');

clickableElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursorDot.classList.add('hover-active');
        cursorOutline.classList.add('hover-active');
    });                
    
    element.addEventListener('mouseleave', () => {
        cursorDot.classList.remove('hover-active');
        cursorOutline.classList.remove('hover-active');
    });                
});