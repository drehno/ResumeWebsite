// ===========================
// CYBERPUNK PORTFOLIO
// Creative Futuristic Interactions
// ===========================

// Page Loading
window.addEventListener('load', () => {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
    createMatrixRain();
});

// ===========================
// Mobile Navigation
// ===========================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');

        // Glitch effect on toggle
        document.querySelectorAll('.nav-link').forEach((link, index) => {
            link.style.animation = `glitchIn 0.3s ease forwards ${index * 0.1}s`;
        });
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ===========================
// Navbar Effects
// ===========================

let lastScroll = 0;
const navbar = document.getElementById('navbar');
let ticking = false;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (currentScroll > lastScroll && currentScroll > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            lastScroll = currentScroll;
            ticking = false;
        });
        ticking = true;
    }
});

// ===========================
// Active Navigation
// ===========================

const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

let tickingNav = false;
window.addEventListener('scroll', () => {
    if (!tickingNav) {
        window.requestAnimationFrame(() => {
            highlightNavigation();
            tickingNav = false;
        });
        tickingNav = true;
    }
});

// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Matrix Rain Effect
// ===========================

function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    canvas.style.opacity = '0.15';

    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00f3ff';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;

            ctx.fillText(text, x, y);

            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 50);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ===========================
// Scroll Reveal Animations
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const revealCallback = (entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) rotateX(0)';
            }, index * 100);
        }
    });
};

const revealObserver = new IntersectionObserver(revealCallback, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll(
        '.project-card, .skill-category, .highlight-item, .contact-item, .about-text p'
    );

    reveals.forEach((element) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px) rotateX(15deg)';
        element.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        revealObserver.observe(element);
    });
});

// ===========================
// Contact Form
// ===========================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        const mailtoLink = `mailto:maximilian.krupa@rwth-aachen.de?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nE-Mail: ${formData.email}\n\nNachricht:\n${formData.message}`
        )}`;

        window.location.href = mailtoLink;

        setTimeout(() => {
            alert('✓ Nachricht wird gesendet...');
        }, 100);

        contactForm.reset();
    });

    // Add glitch effect to inputs
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.animation = 'inputGlow 0.3s ease';
        });
    });
}

// ===========================
// Dynamic Year
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.footer p');
    if (footer) {
        footer.textContent = `© ${new Date().getFullYear()} MAXIMILIAN KRUPA // ALL RIGHTS RESERVED`;
    }
});

// ===========================
// Cyber Parallax Effect
// ===========================

let parallaxTicking = false;

window.addEventListener('scroll', () => {
    if (!parallaxTicking) {
        window.requestAnimationFrame(() => {
            const hero = document.querySelector('.hero');
            const scrolled = window.pageYOffset;

            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.4}px)`;
            }

            parallaxTicking = false;
        });
        parallaxTicking = true;
    }
});

// ===========================
// Project Cards - Simple Hover (No Tilt)
// ===========================

// Cards now only use CSS hover effects, no JavaScript tilt

// ===========================
// Holographic Effect on Hover
// ===========================

document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mousemove', (e) => {
        const rect = tag.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        tag.style.background = `
            radial-gradient(circle at ${x}% ${y}%,
                rgba(0, 243, 255, 0.3),
                rgba(139, 92, 246, 0.1),
                rgba(0, 243, 255, 0.05)
            )
        `;
    });

    tag.addEventListener('mouseleave', () => {
        tag.style.background = 'rgba(0, 243, 255, 0.1)';
    });
});

// ===========================
// Glitch Text Effect
// ===========================

function createGlitchEffect(element) {
    const text = element.textContent;
    const glitchChars = '!<>-_\\/[]{}—=+*^?#________';

    let iteration = 0;
    const interval = setInterval(() => {
        element.textContent = text
            .split('')
            .map((char, index) => {
                if (index < iteration) {
                    return text[index];
                }
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join('');

        if (iteration >= text.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
}

// Apply glitch to titles on scroll
const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.glitched) {
            createGlitchEffect(entry.target);
            entry.target.dataset.glitched = 'true';
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.section-title').forEach(title => {
    titleObserver.observe(title);
});

// ===========================
// Simple Cursor Dot
// ===========================

function createCursorDot() {
    const dot = document.createElement('div');
    dot.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgba(255, 0, 110, 0.6);
        border: 2px solid rgba(0, 243, 255, 0.8);
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%, -50%);
        transition: all 0.15s ease;
    `;
    document.body.appendChild(dot);

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
        requestAnimationFrame(animate);
    }

    animate();

    // Grow on click
    document.addEventListener('mousedown', () => {
        dot.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });

    document.addEventListener('mouseup', () => {
        dot.style.transform = 'translate(-50%, -50%) scale(1)';
    });
}

// Only create cursor dot on desktop
if (window.innerWidth > 768) {
    createCursorDot();
}

// ===========================
// Button Ripple Effect
// ===========================

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @keyframes inputGlow {
        0%, 100% { filter: drop-shadow(0 0 5px rgba(0, 243, 255, 0.5)); }
        50% { filter: drop-shadow(0 0 15px rgba(0, 243, 255, 0.8)); }
    }
`;
document.head.appendChild(rippleStyle);

// ===========================
// Typewriter Effect for Hero
// ===========================

function typeWriter(element, speed = 50) {
    const text = element.textContent;
    element.textContent = '';
    element.style.opacity = '1';
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ===========================
// Performance: Resize Handler
// ===========================

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        highlightNavigation();
    }, 250);
});

// ===========================
// Easter Egg Console
// ===========================

const styles = {
    banner: 'background: linear-gradient(135deg, #00f3ff, #ff006e); color: #fff; font-size: 20px; font-weight: bold; padding: 10px 20px;',
    info: 'color: #00f3ff; font-size: 14px;',
    muted: 'color: #6060a0; font-size: 12px;'
};

console.log('%c╔═══════════════════════════════════════╗', styles.banner);
console.log('%c║   MAXIMILIAN KRUPA // PORTFOLIO    ║', styles.banner);
console.log('%c╚═══════════════════════════════════════╝', styles.banner);
console.log('%c>> INFORMATIKSTUDENT @ RWTH AACHEN', styles.info);
console.log('%c>> LOOKING FOR: Werkstudent / Praktikum', styles.info);
console.log('%c>> CONTACT: maximilian.krupa@rwth-aachen.de', styles.muted);
console.log('%c>> SYSTEM: Cyberpunk Portfolio v2.0', styles.muted);

// ===========================
// Random Glitch Effects
// ===========================

setInterval(() => {
    const elements = document.querySelectorAll('.nav-brand, h2');
    const randomElement = elements[Math.floor(Math.random() * elements.length)];

    if (randomElement && Math.random() > 0.95) {
        randomElement.style.animation = 'glitch 0.3s ease';
        setTimeout(() => {
            randomElement.style.animation = '';
        }, 300);
    }
}, 5000);

// Add final glitch animation
const glitchAnim = document.createElement('style');
glitchAnim.textContent = `
    @keyframes glitch {
        0%, 100% {
            transform: translate(0);
            text-shadow: none;
        }
        25% {
            transform: translate(-2px, 2px);
            text-shadow: 2px -2px 0 #ff006e;
        }
        50% {
            transform: translate(2px, -2px);
            text-shadow: -2px 2px 0 #00f3ff;
        }
        75% {
            transform: translate(-2px, -2px);
            text-shadow: 2px 2px 0 #8b5cf6;
        }
    }
`;
document.head.appendChild(glitchAnim);
