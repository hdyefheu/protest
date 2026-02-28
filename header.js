document.addEventListener('DOMContentLoaded', async () => {
    // 1. Fetch Header
    const headerResponse = await fetch('header.html');
    document.getElementById('header-placeholder').innerHTML = await headerResponse.text();
    
    // 2. Fetch Footer
    const footerResponse = await fetch('footer.html');
    document.getElementById('footer-placeholder').innerHTML = await footerResponse.text();
    
    // 3. Set Active Link (Existing logic)
    const page = window.location.pathname.split("/").pop();
    const links = { 'index.html': 'nav-home', 'about.html': 'nav-about', 'archive.html': 'nav-archive', 'contact.html': 'nav-contact', 'test.html':'nav-test' };
    if (links[page]) document.getElementById(links[page]).classList.add('active');

    // 4. Mobile Toggle Logic
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
    });
});