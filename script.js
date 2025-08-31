document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentImageIndex = 0;
    let images = []; // Array to hold all image elements

    // Populate the images array and add click listeners
    const imageCards = document.querySelectorAll('.image-card img');
    imageCards.forEach((img, index) => {
        images.push(img.src); // Store the image source
        img.parentNode.addEventListener('click', () => {
            currentImageIndex = index;
            showLightbox(img.src);
        });
    });

    // Function to show the lightbox
    function showLightbox(src) {
        lightbox.classList.add('active'); // Add the 'active' class
        lightboxImg.src = src; // Set the image source
    }

    // Function to hide the lightbox
    function hideLightbox() {
        lightbox.classList.remove('active'); // Remove the 'active' class
    }

    // Function to navigate to the next image
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        lightboxImg.src = images[currentImageIndex];
    }

    // Function to navigate to the previous image
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentImageIndex];
    }

    // Event listeners for closing the lightbox
    closeBtn.addEventListener('click', hideLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target.id === 'lightbox') {
            hideLightbox();
        }
    });

    // Event listeners for navigation
    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);

    // Keyboard navigation (optional)
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            } else if (e.key === 'Escape') {
                hideLightbox();
            }
        }
    });
});