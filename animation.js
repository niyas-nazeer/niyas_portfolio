new TypeIt("#element", {
    strings: ["NIYAS NAZEER"," ","I'M A FULL STACK DEVELOPER"],
    speed: 75,
    loop: false,
    }).go();

    new TypeIt("#project", {
    strings: ["Coming Soon .....!"],
    speed: 50,
    loop: true,
    }).go();

    
           // For Navbar fading

 // Get all the navigation links
 const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

 // Add click event listener to each navigation link
 navLinks.forEach(link => {
     link.addEventListener('click', () => {
         // Collapse the navbar when a link is clicked
         const navbarCollapse = document.querySelector('.navbar-collapse');
         if (navbarCollapse.classList.contains('show')) {
             navbarCollapse.classList.remove('show');
         }
     });
 });