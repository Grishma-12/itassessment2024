

document.addEventListener('DOMContentLoaded', function() {
   
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

 
    const buyNowButtons = document.querySelectorAll('.buy-now-btn');
    buyNowButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentNode.querySelector('h3').textContent;
            const productPrice = this.parentNode.querySelector('p').textContent;
            alert(`"${productName}" (${productPrice}) added to your virtual cart! (Simulated)`);
   
        });
    });

  
    const keywordInput = document.querySelector('.filter-box input[type="text"]');
    if (keywordInput) {
        keywordInput.addEventListener('input', function() {
            const keyword = this.value.toLowerCase();
            console.log('Filtering by keyword:', keyword);

        });
    }

   
    const rangeInputs = document.querySelectorAll('.slider-container input[type="range"]');
    const numberInputs = document.querySelectorAll('.price-inputs input[type="number"]');
    const priceLabel = document.querySelector('.price-range label');

    if (rangeInputs.length === 2 && numberInputs.length === 2 && priceLabel) {
        rangeInputs.forEach((slider, index) => {
            slider.addEventListener('input', function() {
                numberInputs[index].value = this.value;
                updatePriceLabel();
            });
        });

        numberInputs.forEach((input, index) => {
            input.addEventListener('input', function() {
                rangeInputs[index].value = this.value;
                updatePriceLabel();
            });
        });

        function updatePriceLabel() {
            priceLabel.textContent = `Rs. ${numberInputs[0].value} - Rs. ${numberInputs[1].value}`;
           
        }
    }

    const categorySelect = document.querySelector('.filter-box select');
    if (categorySelect) {
        categorySelect.addEventListener('change', function() {
            const selectedCategory = this.value;
            console.log('Filtering by category:', selectedCategory);
           
        });
    }
});