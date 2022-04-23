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

  if (mediaQuery.matches) {
    if (this.window.scrollY < 350) {
      bottomLink.style.display = "none";
    } else {
      bottomLink.style.display = "block";
    }
  }
});


const hamburger = document.querySelector(".hamburger");
let menuOpen = false;
let menu = document.querySelector(".sidebar");
let closeBtn = document.querySelector(".close-btn")

hamburger.addEventListener("click", () => {
  if (!menuOpen) {
    menuOpen = true;
    menu.classList.toggle('Nav')
   
  } else {
    menuOpen = false;
    menu.classList.remove("Nav");
  }
});

closeBtn.addEventListener("click", () => {

  if (menuOpen) {
    menuOpen = false;
    menu.classList.remove("Nav");
  }
  // else {
  //   menuOpen = false;
  //   menu.classList.remove("Nav");
  // }
});

