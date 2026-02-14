// ===== 1. Theme Toggle Logic =====
const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.querySelector('.theme-icon');
const currentTheme = localStorage.getItem('theme');

// Check for saved user preference or default to light mode
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
}

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.textContent = '☀️';
    } else {
        themeIcon.textContent = '🌙';
    }
}

themeBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        updateThemeIcon('light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateThemeIcon('dark');
    }
});

// ===== 2. Time-based Greeting =====
function displayGreeting() {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good morning! ☀️ Ready to start coding?";
    } else if (currentHour < 17) {
        greeting = "Good afternoon! 🌤️ Hope you're having a productive day!";
    } else {
        greeting = "Good evening! 🌙 Perfect time for some late-night coding!";
    }

    greetingElement.textContent = greeting;

    // Auto-hide greeting after 5 seconds
    setTimeout(() => {
        greetingElement.style.display = 'none';
    }, 5000);
}

// Display greeting when page loads
document.addEventListener('DOMContentLoaded', displayGreeting);

// ===== 3. Smooth Scrolling for Navigation =====
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links and smooth scroll links
    const navLinks = document.querySelectorAll('.nav-link, .smooth-scroll');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if it's an internal link (starts with #)
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();

                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// ===== 4. Contact Form Handling =====
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !message) {
        showFormMessage("Please fill in all fields.", "error");
        return;
    }

    if (!isValidEmail(email)) {
        showFormMessage("Please enter a valid email address.", "error");
        return;
    }

    // Simulate form submission
    showFormMessage("Sending message...", "info");

    setTimeout(() => {
        showFormMessage(`Thank you, ${name}! Your message has been sent. I'll get back to you soon! 🚀`, "success");
        contactForm.reset();
    }, 1500);
});

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-feedback ${type}`;
    formMessage.style.display = 'block';

    if (type === 'success') {
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== 5. Dynamic Navigation Highlighting =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== 6. Loading Animation =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== 7. Project Card Interactions =====
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

console.log("🚀 Portfolio loaded successfully! Theme system, smooth scrolling, and form validation are active.");
