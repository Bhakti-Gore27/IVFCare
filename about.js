document.addEventListener('DOMContentLoaded', function () {

    // SCROLL TO TOP BUTTON LOGIC
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});

// ========================================================
// HEADER & FOOTER FETCH LOGIC
// ========================================================
// IMPORTANT: You MUST open this file using a Local Web Server (e.g., VS Code Live Server) for fetch() to work!
window.onload = function() {
    
    // Fetch Header
    fetch('header.html')
        .then(response => {
            if(!response.ok) throw new Error("Header file not found");
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => console.error("Error loading header. Run via Live Server:", error));

    // Fetch Footer
    fetch('footer.html')
        .then(response => {
            if(!response.ok) throw new Error("Footer file not found");
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error("Error loading footer. Run via Live Server:", error));
};