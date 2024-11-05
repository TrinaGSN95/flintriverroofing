
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