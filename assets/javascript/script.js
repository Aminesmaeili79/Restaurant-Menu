// IMAGE SLIDER
const slides = document.querySelectorAll(".slides svg");
console.log(slides);

let slideIndex = 0;
let intervalId = null;

// initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
	if (slides.length > 0) {
		slides[slideIndex].classList.add("display-slide");

		intervalId = setInterval(nextSlide, 5000);
	}
}

function showSlide(index) {
	if (index >= slides.length) {
		slideIndex = 0;
	} else if (index < 0) {
		slideIndex = slides.length - 1;
	}

	slides.forEach((slide) => {
		slide.classList.remove("display-slide");
	});
	slides[slideIndex].classList.add("display-slide");
}

function nextSlide() {
	slideIndex++;
	showSlide(slideIndex);
}

function prevSlide() {
	clearInterval(intervalId);
	slideIndex--;
	showSlide(slideIndex);
}
