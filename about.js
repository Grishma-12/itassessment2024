

document.addEventListener('DOMContentLoaded', function() {


    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        aboutContent.addEventListener('mouseover', function(event) {
            if (event.target.tagName === 'H2') {
                event.target.style.color = '#e44d26';
                event.target.style.transition = 'color 0.3s ease';
            }
        });

        aboutContent.addEventListener('mouseout', function(event) {
            if (event.target.tagName === 'H2') {
                event.target.style.color = '#666';
            }
        });
    }

   
});