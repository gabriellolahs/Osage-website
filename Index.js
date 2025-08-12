// @ts-nocheck
// Simple navigation toggle for mobile
document.querySelector('.hamburger').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    // @ts-ignoreco
    if (navLinks.style.display == 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '60px';
        navLinks.style.right = '0';
        navLinks.style.backgroundColor = '#1f2937';
        navLinks.style.width = '100%'
        navLinks.style.padding = '1rem';
    }
});

// Smooth scrolling for anchor links//
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// @ts-ignore