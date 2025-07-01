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
var slides = document.getElementsByClassName("mySlides");
showSlides(slideIndex);

//This function is for the left and right arrows.
function plusSlides(n) {
    //Absolute means it's always positive, 
    // modulus means it's within the array.
    slideIndex = Math.abs((slideIndex += n) % slides.length);
    console.log(slideIndex);
    showSlides(slideIndex);
}
//Just jumps to that slide in the array via a method.
function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

function showSlides(n) {
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //Hides the slides.
        //console.log("slide deactivated");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //Deactivates the dots.
    }
    slides[slideIndex -1].style.display = "block";
    dots[slideIndex -1].className += " active";
}

document.addEventListener("click", function (event) {
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") &&
        !event.target.closest(".popUpButton") && !event.target.closest(".contact")) {
        closeForm()
    }
}, false)