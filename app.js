const menuBtn = document.querySelector(".toggle-menu"),
  navigation = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
  navigation.classList.toggle("show-nav-links");
});
