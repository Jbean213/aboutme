
const contactLink = document.querySelector('nav ul li:nth-child(3) a');
    const contactSection = document.querySelector('section');
    const email = 'Jackson.thomas.bean@gmail.com';

    contactLink.addEventListener('click', function(event) {
      event.preventDefault();
      contactSection.innerHTML = '<h3>Contact</h3><p>Email: ' + email + '</p>';
    });
