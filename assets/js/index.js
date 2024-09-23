const backToTopBtn = document.getElementById("backToTopBtn");


window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.classList.add("d-flex");
    backToTopBtn.classList.remove("d-none");
  } else {
    backToTopBtn.classList.add("d-none");
    backToTopBtn.classList.remove("d-flex");
  }
};


backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
