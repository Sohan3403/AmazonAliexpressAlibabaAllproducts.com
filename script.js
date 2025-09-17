// Wait for the full page to load before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- Live Search Filter ---
    const searchInput = document.getElementById('searchInput');
    const productCards = document.querySelectorAll('.product-card');

    searchInput.addEventListener('keyup', (event) => {
        const searchQuery = event.target.value.toLowerCase();

        productCards.forEach(card => {
            const productTitle = card.querySelector('.product-title').textContent.toLowerCase();
            
            if (productTitle.includes(searchQuery)) {
                card.style.display = 'flex'; // Show the card
            } else {
                card.style.display = 'none'; // Hide the card
            }
        });
    });

    // --- Scroll to Top Button ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show or hide the button based on scroll position
    window.onscroll = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    };

    // Scroll to the top when the button is clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // For a smooth scrolling effect
        });
    });

});
