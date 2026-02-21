document.addEventListener("DOMContentLoaded", function () {
    
    // 1. SERVICES TABS LOGIC
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Remove active class from all content areas
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');
            
            // Show corresponding content
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // 2. TESTIMONIAL SWIPER (Requires Swiper CDN in HTML)
    const testimonialSwiper = new Swiper('.testimonialSwiper', {
        loop: true,
        autoplay: {
            delay: 5000, // 5 seconds
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        grabCursor: true,
    });

    // 3. SCROLL TO TOP BUTTON
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
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

window.onload = function() {
    
    // Fetch Header
    fetch('header.html')
        .then(response => {
            if(!response.ok) throw new Error("Header file not found");
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            // Load header.js after inserting header
            let script = document.createElement('script');
            script.src = 'header.js';
            document.body.appendChild(script);
            
            // Add scroll listener for navbar background change
            let scrollTimeout;
            window.addEventListener('scroll', () => {
                if (!scrollTimeout) {
                    scrollTimeout = setTimeout(() => {
                        const header = document.querySelector('.site-header');
                        if (header) {
                            if (window.scrollY > 100) {
                                header.classList.add('scrolled');
                            } else {
                                header.classList.remove('scrolled');
                            }
                        }
                        scrollTimeout = null;
                    }, 10); // Throttle to 100fps
                }
            });
        })
        .catch(error => console.error("Error loading header:", error));

    // Fetch Footer
    fetch('footer.html')
        .then(response => {
            if(!response.ok) throw new Error("Footer file not found");
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
};