window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.classList.add("opaque");
  } else {
    header.classList.remove("opaque");
  }
});
