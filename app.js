document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle-btn");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  toggleBtn.addEventListener("click", function () {
    dropdownMenu.classList.toggle("open");
  });

  const liItems = document.querySelectorAll('ul li');
  const imgItems = document.querySelectorAll('.product p');

  liItems.forEach(li => {
    li.addEventListener('click', function () {
      // Toggle "active" class
      liItems.forEach(item => item.classList.remove('active'));
      this.classList.add('active');

      // Filter images
      const filterValue = this.textContent.toLowerCase();
      imgItems.forEach(img => {
        const imgFilter = img.getAttribute('data-filter').toLowerCase();
        img.style.display = (filterValue === 'all menu' || imgFilter === filterValue) ? 'block' : 'none';
      });
    });
  });
});