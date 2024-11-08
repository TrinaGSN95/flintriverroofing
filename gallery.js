let currentPage = 1; // Start at the first page
const maxImagesPerPage = 10; // Limit images to 10 per page
const allPhotos = document.querySelectorAll('.photo'); // Get all images
const totalPhotos = allPhotos.length; // Total number of images

// Show images for the current page
function displayPage(page) {
    const start = (page - 1) * maxImagesPerPage;
    const end = page * maxImagesPerPage;

    // Show or hide images depending on the current page
    allPhotos.forEach((photo, index) => {
        if (index >= start && index < end) {
            photo.style.display = 'block'; // Show the photo
        } else {
            photo.style.display = 'none'; // Hide the photo
        }
    });
}

// Change to the next or previous page
function changePage(direction) {
    const newPage = currentPage + direction;

    // Prevent going out of range
    if (newPage < 1 || newPage > Math.ceil(totalPhotos / maxImagesPerPage)) return;

    currentPage = newPage;
    displayPage(currentPage);
}

// Initial display of the first page
displayPage(currentPage);