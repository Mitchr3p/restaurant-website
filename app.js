document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle-btn");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  toggleBtn.addEventListener("click", function () {
    dropdownMenu.classList.toggle("open");
  });
});