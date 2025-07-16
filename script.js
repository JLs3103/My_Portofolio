// Portfolio website JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Close mobile menu
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Update active navigation link based on scroll position
    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Navbar background on scroll
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-opacity-95');
            navbar.classList.remove('bg-opacity-80');
        } else {
            navbar.classList.remove('bg-opacity-95');
            navbar.classList.add('bg-opacity-80');
        }
    }
    
    // Scroll event listener
    window.addEventListener('scroll', function() {
        updateActiveNav();
        updateNavbar();
        animateOnScroll();
    });
    
    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.project-card, .skill-item, .education-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('fade-in-up');
            }
        });
    }
    
    // Contact button handlers
    const emailBtn = document.getElementById('email-btn');
    const whatsappBtn = document.getElementById('whatsapp-btn');
    
    // Email button functionality
    emailBtn.addEventListener('click', function() {
        const email = 'joanlase@gmail.com';
        const subject = 'Portfolio Contact - Let\'s Work Together';
        const body = 'Hello Joan,\n\nI saw your portfolio and would like to discuss a potential project/collaboration.\n\nBest regards,';
        
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        // Show notification
        showNotification('Opening email client...', 'info');
    });
    
    // WhatsApp button functionality
    whatsappBtn.addEventListener('click', function() {
        const phoneNumber = '6282298039316';
        const message = 'Hello Joan! I saw your portfolio and would like to discuss a potential project/collaboration.';
        
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp web
        window.open(whatsappLink, '_blank');
        
        // Show notification
        showNotification('Opening WhatsApp...', 'success');
    });
    
    // Button click animations
    function addClickAnimation(button) {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
    
    addClickAnimation(emailBtn);
    addClickAnimation(whatsappBtn);
    
    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 ${
            type === 'success' ? 'bg-green-600' : 
            type === 'info' ? 'bg-blue-600' : 'bg-purple-600'
        } text-white`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
            notification.style.opacity = '1';
        }, 100);
        
        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            notification.style.opacity = '0';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    // Typing effect for the main title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Initialize typing effect
    const mainTitle = document.querySelector('#home h1');
    if (mainTitle) {
        const originalText = mainTitle.textContent;
        typeWriter(mainTitle, originalText, 150);
    }
    
    // Particle background effect
    function createParticles() {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particle-bg';
        document.body.appendChild(particleContainer);
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            particleContainer.appendChild(particle);
        }
    }
    
    // Initialize particles
    createParticles();
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all animated elements including education card
    const animatedElements = document.querySelectorAll('.project-card, .skill-item, .education-card');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Smooth reveal animations
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.loading');
        
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const elementTop = reveal.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('loaded');
            }
        });
    }
    
    window.addEventListener('scroll', revealOnScroll);
    
    // Initialize on page load
    updateActiveNav();
    updateNavbar();
    animateOnScroll();
    
    // Add loading class to elements for initial animation
    const loadingElements = document.querySelectorAll('.project-card, .skill-item, .education-card');
    loadingElements.forEach((element, index) => {
        element.classList.add('loading');
        setTimeout(() => {
            element.classList.add('loaded');
        }, index * 200);
    });
    
    // Project image zoom effect
    const projectImages = document.querySelectorAll('.project-image');
    projectImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Enhanced skill bar animations
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-item .bg-gradient-to-r');
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.setProperty('--skill-width', width);
        });
    }
    
    // Initialize skill bar animations when about section is visible
    const aboutSection = document.getElementById('about');
    const aboutObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
            }
        });
    }, { threshold: 0.3 });
    
    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }
    
    // Education section animations
    const educationSection = document.getElementById('education');
    const educationObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const educationCard = entry.target.querySelector('.education-card');
                if (educationCard) {
                    educationCard.classList.add('fade-in-up');
                }
            }
        });
    }, { threshold: 0.3 });
    
    if (educationSection) {
        educationObserver.observe(educationSection);
    }
    
    // Preload images for better performance
    function preloadImages() {
        const images = [
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
        ];
        
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
    
    // Initialize preloading
    preloadImages();
    
    // Easter egg: Konami code
    let konamiCode = [];
    const konamiSequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.code);
        
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join('') === konamiSequence.join('')) {
            showNotification('🎉 Konami Code activated! You found the easter egg!', 'success');
            // Add some fun effect here
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 2000);
        }
    });
    
    // Performance optimization: Throttle scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    // Apply throttling to scroll events
    window.addEventListener('scroll', throttle(function() {
        updateActiveNav();
        updateNavbar();
        animateOnScroll();
        revealOnScroll();
    }, 16)); // ~60fps
    
});