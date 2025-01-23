document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar-collapse');
    var toggler = document.querySelector('.navbar-toggler');

    // Close navbar when clicking outside
    document.addEventListener('click', function (event) {
        if (navbar.classList.contains('show') && !navbar.contains(event.target) && !toggler.contains(event.target)) {
            new bootstrap.Collapse(navbar).hide();
        }
    });

    // Toggle navbar when clicking the toggler button
    toggler.addEventListener('click', function () {
        if (navbar.classList.contains('show')) {
            new bootstrap.Collapse(navbar).hide();
        } else {
            new bootstrap.Collapse(navbar).show();
        }
    });
});


function sendMail(e) {
    e.preventDefault();  // Prevent the form from submitting normally
    console.log("called");

    const email = "vkpatel93@gmail.com";
    const templateParams = {
        to_email: email,
        subject: "New Contact Request from...",
        message: `Name: ${document.getElementById('firstName').value} ${document.getElementById('lastName').value}\nEmail: ${document.getElementById('email').value}\nPhone: ${document.getElementById('phone').value}\nMessage: ${document.getElementById('message').value}`,
    };

    console.log("Form Data Collected:", templateParams);
    console.log("Sending email...");

    // Send email using EmailJS
    emailjs.send("service_z3kkqtd", "template_715wyrd", templateParams)
        .then((response) => {
            console.log(`Email sent successfully to ${email}`, response);
        })
        .catch((error) => {
            console.error(`Error sending email to ${email}`, error);
        });
}

document.querySelector('form').addEventListener('submit', sendMail);
