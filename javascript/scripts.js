//Functions for opening and closing the form.
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//These functions govern the slide show.
//This determines the starting slide.
var slideIndex = 1;
const slides = document.getElementsByClassName("mySlides");
showSlides(slideIndex);

//This function is for the left and right arrows.
function plusSlides(n) {
    //Absolute means it's always positive, 
    // modulus means it's within the array.
    slideIndex = Math.abs((slideIndex += n) % slides.length);
    showSlides(slideIndex);
}
//Just jumps to that slide in the array via a method.
function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

function showSlides(n) {
var dots = document.getElementsByClassName("dot");
}