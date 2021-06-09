// Form Validation Script
function validateForm() {
    var nameVal = document.forms["simpleForm"]["name"].value;
    if(nameVal == null || nameVal == "") {
    document.getElementsByClassName( "errorMessage" )[0].style.visibility = "visible";
    document.getElementsByClassName( "errorMessage" )[0].innerHTML = "Please Fill out this field";
    return false;
    } else {
    return true;
    }
    }

// Slideshow Scripts
var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
