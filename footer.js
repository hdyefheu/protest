// footer.js
async function initFooter() {
    // 1. Fetch only the footer
    const response = await fetch('footer.html');
    const html = await response.text();
    
    // 2. Inject into the placeholder
    const container = document.getElementById('footer-placeholder');
    if (container) {
        container.innerHTML = html;
        
        // 3. Logic specific to footer
        const copyright = document.querySelector('.footer-bottom p');
        if (copyright) {
            copyright.innerHTML = `&copy; ${new Date().getFullYear()} Site Name. All rights reserved.`;
        }
    }
}

// Self-initiate on load
document.addEventListener('DOMContentLoaded', initFooter);