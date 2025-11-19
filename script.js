const navButtons = document.querySelectorAll('.nav-btn');
const contentSections = document.querySelectorAll('.content-section');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        navButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');

        // Hide all content sections
        contentSections.forEach(section => section.style.display = 'none');

        // Show the corresponding section if it exists
        if (button.textContent === 'Accueil') {
            const section = document.getElementById('accueil-section');
            section.style.display = 'block';
            section.scrollIntoView({ behavior: 'smooth' });
        } else if (button.textContent === 'Marque') {
            const section = document.getElementById('marque-section');
            section.style.display = 'block';
            section.scrollIntoView({ behavior: 'smooth' });
        } else if (button.textContent === 'Nouveaux') {
            const section = document.getElementById('nouveaux-section');
            section.style.display = 'block';
            section.scrollIntoView({ behavior: 'smooth' });
            // Scroll to the product gallery
            setTimeout(() => {
                const gallery = document.getElementById('product-gallery');
                gallery.scrollIntoView({ behavior: 'smooth' });
            }, 500);
        } else if (button.textContent === 'Contact') {
            const section = document.getElementById('contact-section');
            section.style.display = 'block';
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

function openModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = src;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}


