
document.addEventListener('DOMContentLoaded', function() {
    
    const buyNowButtons = document.querySelectorAll('.buy-now-button');

    buyNowButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentNode.querySelector('h3').textContent;
            const productPrice = this.parentNode.querySelector('.price').textContent;
            alert(`"${productName}" (Price: ${productPrice}) added to your virtual cart! (This is a simulated action)`);
            
        });
    });

    const productFilter = document.querySelector('.product-filter select');
    const productGrid = document.querySelector('.product-grid');
    const productCards = document.querySelectorAll('.product-card'); 
    if (productFilter && productGrid && productCards.length > 0) {
        productFilter.addEventListener('change', function() {
            const selectedCategory = this.value.toLowerCase(); 
            productCards.forEach(card => {
               
                if (selectedCategory === 'all products') {
                    card.style.display = 'block'; 
                } else {
                    
                    card.style.display = 'block'; 
                    console.log("Filtering by:", selectedCategory, "- No actual filtering implemented based on category in this example.");
                }
            });
        });
    }

    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop(); 

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === 'product.html' && linkPage === 'product.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

   
});