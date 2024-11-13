document.addEventListener("DOMContentLoaded", () => {
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');
    const closeBtn = document.getElementById('closeBtn');

    // Ensure modal is hidden initially
    lightboxModal.style.display = 'none';

    // Show modal when an image is clicked
    document.querySelectorAll('.photos img').forEach(photo => {
        photo.addEventListener('click', () => {
            lightboxImage.src = photo.src; // Set the image source
            lightboxModal.style.display = 'flex'; // Show modal only on click
        });
    });

    // Hide modal when close button is clicked
    closeBtn.addEventListener('click', () => {
        lightboxModal.style.display = 'none'; // Hide modal
    });

    // Hide modal when clicking outside the image
    lightboxModal.addEventListener('click', (event) => {
        if (event.target === lightboxModal) {
            lightboxModal.style.display = 'none'; // Hide modal
        }
    });
});