document.addEventListener('DOMContentLoaded', () => {

    // ===== Reveal on Scroll Animation =====
    const revealOnScroll = () => {
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05 }); // Start revealing a bit earlier

        reveals.forEach(reveal => {
            observer.observe(reveal);
        });
    };
    
    revealOnScroll();

    // ===== Dynamic & Automatic Slideshow Logic =====
    const slideshowContainer = document.querySelector('.slideshow-container');
    const dotContainer = document.querySelector('.dot-container');

    if (slideshowContainer && dotContainer) {
        const totalSlides = 29; // Total number of work images
        let slideIndex = 1;
        let slideInterval;

        // Dynamically create slides and dots
        for (let i = 1; i <= totalSlides; i++) {
            // Create slide
            const slide = document.createElement('div');
            slide.className = 'mySlides fade';
            slide.innerHTML = `
                <img src="images/work${i}.jpg" style="width:100%">
                <div class="text">Project Work #${i}</div>
            `;
            slideshowContainer.appendChild(slide);

            // Create dot
            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.onclick = () => {
                currentSlide(i);
                resetSlideInterval(); // Reset timer on manual click
            };
            dotContainer.appendChild(dot);
        }

        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");

        function showSlides(n) {
            slideIndex = n; // Update the global index
            if (n > slides.length) { slideIndex = 1 }    
            if (n < 1) { slideIndex = slides.length }
            
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            
            slides[slideIndex - 1].style.display = "block";  
            dots[slideIndex - 1].className += " active";
        }

        // Make manual navigation functions global
        window.plusSlides = function(n) {
            showSlides(slideIndex += n);
            resetSlideInterval(); // Reset timer on manual click
        }
        window.currentSlide = function(n) {
            showSlides(n); // No need to increment, just set
            resetSlideInterval();
        }
        
        // Automatic slideshow function
        function autoSlide() {
            plusSlides(1); // Go to the next slide
        }

        // Start and reset the interval
        function startSlideInterval() {
             // Change image every 5 seconds
            slideInterval = setInterval(autoSlide, 5000);
        }
        
        function resetSlideInterval() {
            clearInterval(slideInterval);
            startSlideInterval();
        }

        // Initial setup
        showSlides(slideIndex);
        startSlideInterval();
    }
});