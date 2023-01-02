const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let current = 0;

prev.addEventListener("click", function() {
  current--;
  if (current < 0) {
    current = slides.length - 1;
  }
  updateSlides();
});

next.addEventListener("click", function() {
  current++;
  if (current >= slides.length) {
    current = 0;
  }
  updateSlides();
});

function updateSlides() {
  slides.forEach(function(slide) {
    slide.style.display = "none";
  });
  slides[current].style.display = "block";
}

updateSlides();
