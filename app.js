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
  let greetingTypes = ["my friend", "padi mi", "commerade"]

  

  greeting.addEventListener("click", function() {
    if (showMan) {
      showMan.classList.toggle('present');
    }

    // I TRIED TO SIFT/FILTER THROUGH AN ARRANY RANDOMLY : 
    // for (let i = 0; i < greetingTypes.length; i++) {
    // showMan.innerHTML = `
    // <p> Hello ${greetingTypes[i]} </p>
    // `
    // }

    // CORRECT WAY
    let randomIndex = Math.floor(Math.random() * 3)
    showMan.innerHTML = `
    <p class = "pad1"> HELLO </p>
    <p class = "pad2"> ${greetingTypes[randomIndex]} </p>
    `

    //  TO SET A TIMEOUR/DURATION
    // when you dont plan to do funky css lol
    setTimeout(function() {
      showMan.classList.remove('present');
    }, 2200);
  })

  const toHide1 = document.getElementById("hidden-1")
  const toHide2 = document.getElementById("hidden-2")
  const toHide3 = document.getElementById("hidden-3")

  toHide1.addEventListener('mouseover',function() {
    toHide2.style.opacity = 0;
    toHide3.style.opacity = 0;
  });

  toHide1.addEventListener('mouseout', function() {
    toHide2.style.opacity = 1;
    toHide3.style.opacity = 1;
  });
});