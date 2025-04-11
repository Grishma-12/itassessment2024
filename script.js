

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentNode.querySelector('p').textContent;
            alert(`"${productName}" added to cart! (This is a simulation)`);
            
        });
    });

    
});