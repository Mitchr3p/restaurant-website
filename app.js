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

  function scrollToSection(sectionId) {
    const targetDiv = document.getElementById(sectionId);
  
    if (targetDiv) {
      // Calculate the scroll distance
      const offsetTop = targetDiv.offsetTop;
      const duration = 4000; // 3 seconds
  
      // Scroll to the div with a smooth effect
      window.scrollTo({
        top: offsetTop,
        
      });
    }
  }

  const greeting = document.querySelector(".nav-btn");
  const showMan = document.querySelector(".hide-me")


  greeting.addEventListener("click", function() {
    if (showMan) {
      showMan.classList.toggle('present');
      
      // TO SET A TIMEOUR/DURATION
      //when you dont plan to do funky css lol
      setTimeout(function() {
        showMan.classList.remove('present');
      }, 5000);
    }
  
  })

});