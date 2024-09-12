document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission
        alert('Thank you for reaching out! I will get back to you soon.');
        form.reset(); // Reset form fields
    });
});
