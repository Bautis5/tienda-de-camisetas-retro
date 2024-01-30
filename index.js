let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  
  if (n > slides.length - 1) {
    slideIndex = 0;
  }    
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let slide of slides) {
    slide.style.display = "none";  
  }
  slides[slideIndex].style.display = "block";  
}

