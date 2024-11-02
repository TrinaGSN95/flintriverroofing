document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) { 
        slideIndex = 1;  // Go back to the first slide
    }
    
    slides[slideIndex - 1].style.display = "block";  // Display the current slide
    
    setTimeout(showSlides, 5000);  // Change slide every 5 seconds
}
//before and after
// Get elements from the DOM
const ventana = document.getElementById('ventana');
const anteDespues = document.querySelector('.ante-despues');

// Function to set the position of the 'ventana' based on mouse movement
const setVentanaPosition = (event) => {
    const rect = anteDespues.getBoundingClientRect(); // Get dimensions of the 'ante-despues' element
    let offsetX = event.clientX - rect.left; // Calculate mouse position relative to the element

    // Limit the ventana's movement within the container
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    ventana.style.left = `${offsetX}px`; // Set the left position of 'ventana'
    ventana.style.transform = 'translateX(-50%)'; // Center the ventana
    const despuesWidth = (offsetX / rect.width) * 100; // Calculate the width of the 'despues' section
    document.getElementById('despues').style.width = `${despuesWidth}%`; // Set the width of 'despues'
};

// Event listener to update the slider position when the mouse moves
anteDespues.addEventListener('mousemove', (event) => {
    setVentanaPosition(event); // Update position based on mouse movement
});

// Initialize the position of the ventana at the center when the page loads
window.addEventListener('load', () => {
    const rect = anteDespues.getBoundingClientRect();
    const initialPosition = rect.width / 2; // Center the ventana initially
    ventana.style.left = `${initialPosition}px`;
    ventana.style.transform = 'translateX(-50%)'; // Center the ventana
    const despuesWidth = (initialPosition / rect.width) * 100; // Calculate initial width of the 'despues' section
    document.getElementById('despues').style.width = `${despuesWidth}%`; // Set initial width of 'despues'
});
//Testimonials
// Carousel
const entries = document.querySelectorAll('.entry');
const arrowLeft = document.querySelector('.arrow--left');
const arrowRight = document.querySelector('.arrow--right');

let currentEntry = 0;

const showEntry = (index) => {
  const track = document.querySelector('.track');
  track.style.transform = `translateX(-${index * 100}%)`;
};

arrowRight.addEventListener('click', () => {
  currentEntry = (currentEntry + 1) % entries.length;
  showEntry(currentEntry);
});

arrowLeft.addEventListener('click', () => {
  currentEntry = (currentEntry - 1 + entries.length) % entries.length;
  showEntry(currentEntry);
});
//FAQ section
// Toggle FAQ answer display
document.querySelectorAll('.question').forEach(item => {
  item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      const arrow = item.querySelector('.indicator');
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      arrow.style.transform = answer.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
  });
});

// FAQ Toggle Functionality
document.querySelectorAll('.question').forEach(item => {
  item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      const arrow = item.querySelector('.indicator');
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      arrow.style.transform = answer.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
  });
});

// FAQ Toggle
document.querySelectorAll('.question').forEach(item => {
  item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      const arrow = item.querySelector('.indicator');
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      arrow.style.transform = answer.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
  });
});

// Image Rotation
const images = document.querySelectorAll('.image-series img');
let currentImageIndex = 0;
const displayInterval = 4000;

function showNextImage() {
  images.forEach((img, index) => {
      img.style.opacity = index === currentImageIndex ? '1' : '0';
  });
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

showNextImage();
setInterval(showNextImage, displayInterval);
