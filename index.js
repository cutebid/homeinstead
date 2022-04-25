window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var text = document.querySelector("#text-white");
  var navText = document.querySelectorAll('nav li .dropdown .dropbtn');
  var input = this.document.querySelector('header input');
  
  if (this.window.scrollY > 0) {
    header.classList.add("sticky");
    text.style.color = 'black'
    text.style.border ='1px solid black'
    input.style.border = '1px solid lightGrey'
    navText.forEach(text => {
      text.style.color = 'black'
    })
  } else {
    header.classList.remove("sticky");
    text.style.color ='white'
    text.style.border = "1px solid white";
      input.style.border = "none";
    navText.forEach((text) => {
      text.style.color = "white";
    });
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

