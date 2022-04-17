window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (this.window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  console.log(this.window.scrollY);
});
