const navSlide = () => {
    
    const nav = document.querySelector('.nav-links');
    const navsidebar = document.querySelector('.side-nav-links')
    if (nav !== null){
        const navLinks =  document.querySelectorAll('.nav-links li');
        const burger = document.querySelector('.burger');
        burger.addEventListener('click', () => {
            //Toggle nav
            nav.classList.toggle('nav-active');

            //Animate links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
                
                }
            });
            //Burger animation
            burger.classList.toggle('toggle');
        });
    } else {
        const burgerdashboard = document.querySelector('.burger-dashboard');
        sideNavLinks = document.querySelectorAll('.side-nav-links-burger');
        burgerdashboard.addEventListener('click', () => {
            //Toggle nav
            navsidebar.classList.toggle('nav-active');

            //Animate links
            sideNavLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
                
                }
            });
            //Burger animation
            burgerdashboard.classList.toggle('toggle');
        });
    }
}
navSlide();