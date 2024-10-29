document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.navbar-nav .nav-link');
    let currentIndex = 0;

    navItems[currentIndex].focus();

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % navItems.length; 
            navItems[currentIndex].focus();
        } else if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + navItems.length) % navItems.length;
            navItems[currentIndex].focus(); 
        }
    });
});
