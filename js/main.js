document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.main-nav a');
    const contentSections = document.querySelectorAll('.content-section');

    // Function to show a section
    function showSection(targetId) {
        contentSections.forEach(section => {
            section.classList.remove('active-section');
        });
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active-section');
        }
    }

    // Event listeners for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior

            // Remove active class from all links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');

            const targetId = link.getAttribute('data-target');
            showSection(targetId);
        });
    });

    // Show the initial active section (Profile by default)
    // The 'active' class is already set on the 'Profile_Service' link and section in HTML
    // If you wanted to set it dynamically:
    // const initialActiveLink = document.querySelector('.main-nav a.active');
    // if (initialActiveLink) {
    //     showSection(initialActiveLink.getAttribute('data-target'));
    // } else if (navLinks.length > 0) { // Fallback to first link if none are marked active
    //     navLinks[0].classList.add('active');
    //     showSection(navLinks[0].getAttribute('data-target'));
    // }
});