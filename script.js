document.addEventListener('DOMContentLoaded', () => {

    // --- Product Image Slider Logic ---
    const allProductCards = document.querySelectorAll('.product-card');

    allProductCards.forEach(card => {
        const mainImage = card.querySelector('.main-product-image');
        const dots = card.querySelectorAll('.dot');

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                // Get the image link from the 'data-image' attribute of the clicked dot
                const newImageSrc = dot.getAttribute('data-image');
                
                // Change the main image source
                mainImage.src = newImageSrc;

                // Update the 'active' class on the dots
                // First, remove 'active' from all dots in this card
                dots.forEach(d => d.classList.remove('active'));
                // Then, add 'active' to the clicked dot
                dot.classList.add('active');
            });
        });
    });


    // --- Live Search Filter (No change here) ---
    const searchInput = document.getElementById('searchInput');
    const productCards = document.querySelectorAll('.product-card');

    searchInput.addEventListener('keyup', (event) => {
        const searchQuery = event.target.value.toLowerCase();

        productCards.forEach(card => {
            const productTitle = card.querySelector('.product-title').textContent.toLowerCase();
            
            if (productTitle.includes(searchQuery)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // --- Scroll to Top Button (No change here) ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.onscroll = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    };

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});
