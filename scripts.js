document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    const contentSections = document.querySelectorAll('.content-section');

    // Function to update active link styling
    function updateActiveLink() {
        navLinks.forEach(link => {
            if (document.getElementById(link.getAttribute('href').substring(1)).classList.contains('active')) {
                link.classList.add('active-nav');
            } else {
                link.classList.remove('active-nav');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');
            updateActiveLink();
        });
    });

    // Initialize the active link on page load
    updateActiveLink();
});
