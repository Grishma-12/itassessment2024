

document.addEventListener('DOMContentLoaded', function() {
   
    const contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
           
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            
            if (!name) {
                alert('Please enter your name.');
                nameInput.focus();
                return;
            }

            if (!email) {
                alert('Please enter your email address.');
                emailInput.focus();
                return;
            } else if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                emailInput.focus();
                return;
            }

            if (!message) {
                alert('Please enter your message.');
                messageInput.focus();
                return;
            }

            
            console.log('Form submitted!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            alert('Your message has been sent! (This is a simulated action)');

            
            contactForm.reset();
        });
    }

    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop(); 

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === 'contact.html' && linkPage === 'contact.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });


});