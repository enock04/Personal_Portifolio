// Responsive Navbar Toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link (for better UX on mobile)
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Contact Form Validation
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Clear previous message
        formMessage.textContent = '';
        formMessage.style.color = '';

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (name.length < 2) {
            formMessage.textContent = 'Please enter a valid name (at least 2 characters).';
            formMessage.style.color = 'red';
            form.name.focus();
            return;
        }

        if (!validateEmail(email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.style.color = 'red';
            form.email.focus();
            return;
        }

        if (message.length < 10) {
            formMessage.textContent = 'Please enter a message of at least 10 characters.';
            formMessage.style.color = 'red';
            form.message.focus();
            return;
        }

        // Simulate form submission success
        formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        formMessage.style.color = 'green';

        form.reset();
        // Explicitly clear input fields to avoid residual characters
        form.name.value = '';
        form.email.value = '';
        form.message.value = '';
    });

    function validateEmail(email) {
        // Simple email regex for validation
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }
});
