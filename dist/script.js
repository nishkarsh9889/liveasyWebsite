// Font Awesome Script
const fontAwesomeScript = document.createElement('script');
fontAwesomeScript.src = 'https://kit.fontawesome.com/5b8b6a5d60.js';
fontAwesomeScript.setAttribute('crossorigin', 'anonymous');
document.head.appendChild(fontAwesomeScript);

// Google Analytics Script
const googleAnalyticsScript = document.createElement('script');
googleAnalyticsScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-V3YRN5DG5K';
googleAnalyticsScript.setAttribute('async', '');
document.head.appendChild(googleAnalyticsScript);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-V3YRN5DG5K');

// Facebook Pixel Script (Noscript version)
const facebookPixelImg = document.createElement('img');
facebookPixelImg.setAttribute('height', '1');
facebookPixelImg.setAttribute('width', '1');
facebookPixelImg.style.display = 'none';
facebookPixelImg.src = 'https://www.facebook.com/tr?id=377693377077017&ev=PageView&noscript=1';
document.body.appendChild(facebookPixelImg);

//Meta Pixel Code
!function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
    n.queue = []; t = b.createElement(e); t.async = !0;
    t.src = v; s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window, document, 'script',
    'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '377693377077017');
fbq('track', 'PageView');

document.addEventListener('DOMContentLoaded', function() {
    // Get the dropdown button and content elements
    const dropdownButton = document.querySelector('#dropdownButton');
    const dropdownContent = document.querySelector('#dropdownContent');

    // Add click event listener to the dropdown button
    dropdownButton.addEventListener('click', function() {
        // Toggle the visibility of the dropdown content
        dropdownContent.classList.toggle('hidden');
    });

    // Add click event listener to the document to hide dropdown content when clicking outside of the dropdown
    document.addEventListener('click', function(event) {
        // Check if the click was outside the dropdown button and content
        const isClickOutside = !dropdownButton.contains(event.target) && !dropdownContent.contains(event.target);
        if (isClickOutside) {
            // Hide the dropdown content
            dropdownContent.classList.add('hidden');
        }
    });
});


// Carousel Code - Index.html 
let currentImageIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
const indicators = document.querySelectorAll('.flex button');
const autoplayInterval = 8000; 
let autoplayTimer = null;

function showItem(index) {
    // Hide all items and show the current one
    carouselItems.forEach((item, i) => {
        item.classList.toggle('hidden', i !== index);
    });
    
    // Update indicators
    updateIndicators(index);
    
    // Restart autoplay
    restartAutoplay();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalItems;
    showItem(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + totalItems) % totalItems;
    showItem(currentImageIndex);
}

function goToImage(index) {
    currentImageIndex = index;
    showItem(currentImageIndex);
}

// function updateIndicators(index) {
//     indicators.forEach((indicator, i) => {
//         if (i === index) {
//             indicator.classList.add('bg-blue-500');
//         } else {
//             indicator.classList.remove('bg-blue-500');
//         }
//     });
// }

function startAutoplay() {
    // Start autoplay timer
    autoplayTimer = setInterval(nextImage, autoplayInterval);
}

function stopAutoplay() {
    // Stop autoplay timer
    clearInterval(autoplayTimer);
}

function restartAutoplay() {
    // Restart autoplay timer
    stopAutoplay();
    startAutoplay();
}

// Initialize the carousel and start autoplay
showItem(currentImageIndex);
startAutoplay();

// Add event listeners to stop autoplay on user interaction
document.querySelectorAll('.carousel button').forEach(button => {
    button.addEventListener('click', stopAutoplay);
});

// document.querySelectorAll('.flex button').forEach(button => {
//     button.addEventListener('click', stopAutoplay);
// });

//Blog Carousel 

