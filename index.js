window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (this.window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

});
window.addEventListener("scroll", function () {
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  var bottomLink = document.querySelector(".bottom-link");
  console.log(bottomLink)
  if (mediaQuery.matches){
      if (this.window.scrollY < 350) {
        bottomLink.style.display = "none";
      } else {
        bottomLink.style.display = "block";
      }
  }
  

});

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   setTimeout(showSlides, 5000); // Change image every 2 seconds
// }
