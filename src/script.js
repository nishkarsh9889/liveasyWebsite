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

// JavaScript to implement the carousel functionality
document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll(".carousel-item");
    let currentItemIndex = 0;

    function showItem(index) {
        // Hide all items
        carouselItems.forEach(item => item.classList.remove("active"));
        // Show the item at the specified index
        carouselItems[index].classList.add("active");
    }

    function nextItem() {
        currentItemIndex++;
        if (currentItemIndex >= carouselItems.length) {
            currentItemIndex = 0; // Reset index to show the first item again
        }
        showItem(currentItemIndex);
    }

    // Automatically move to the next item every few seconds
    setInterval(nextItem, 5000); // Change 5000 to adjust the interval (in milliseconds)
});
