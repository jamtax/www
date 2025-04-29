// Toggle the mobile navigation menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show-menu');

    const menuIcon = document.querySelector('.menu-icon');
    const isExpanded = menuIcon.getAttribute('aria-expanded') === 'true';
    menuIcon.setAttribute('aria-expanded', !isExpanded);
}

// Validate WhatsApp link
(function validateWhatsAppLink() {
    const whatsappLink = document.getElementById('whatsapp-link');
    const phone = '27797656234'; // Replace with dynamic data if needed
    const isValidPhoneNumber = /^27\d{9}$/;

    if (whatsappLink && isValidPhoneNumber.test(phone)) {
        whatsappLink.href = `https://wa.me/${phone}`;
    } else {
        console.error('Invalid phone number format');
    }
})();
