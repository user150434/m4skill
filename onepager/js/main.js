// Intersection Observer
const sections = document.querySelectorAll('.section');

const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Form handling
const contactForm = document.querySelector('.contact__form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        send_to: formData.get('send_to_mail')
    };

    try {
        const response = await fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Message sent successfully!');
            contactForm.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        alert('Error sending message. Please try again.');
        console.error('Error:', error);
    }
});





function sendMail(e) {

    const formulier = document.querySelector('.contact__form');
    const mailtoValue = formulier.querySelector('input[name="send_to_mail"]').value;
    const mailCCValue = formulier.querySelector('input[name="email"]').value;
    const naam = formulier.querySelector('input[name="name"]').value;
    const bericht = formulier.querySelector('textarea[name="message"]').value;

    const subject = `Bericht van ${encodeURIComponent(naam)}`;
    const body = `Beste: ${encodeURIComponent(naam)} (${encodeURIComponent(mailCCValue)})%0D%0A%0D%0ABericht:%0D%0A${encodeURIComponent(bericht)}`;

    const mailtoLink = `mailto:${mailtoValue}?cc=${mailCCValue}&subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
}