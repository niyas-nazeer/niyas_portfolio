new TypeIt("#element", {
    strings: ["NIYAS NAZEER"," ","I'M A FULL STACK DEVELOPER"],
    speed: 110,
    loop: false,
    }).go();

    new TypeIt("#project", {
    strings: ["Coming Soon .....!"],
    speed: 120,
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

//  Contact Message box

const form = document.querySelector("form");
const nm = document.getElementById("name");
const em = document.getElementById("email");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Name: ${nm.value}<br> Email: ${em.value}<br> Message: ${mess.value}`;
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "niyasnazeer.in@gmail.com",
        Password : "9F00F8A92E57A51B14714ACA45A84FB0287A",
        To : 'niyasnazeer.in@gmail.com',
        From : "niyasnazeer.in@gmail.com",
        Subject : nm.value,
        Body : bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
} 

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})