const titleMenuPhoneItems = document.getElementById('title-menu-phone-items');
titleMenuPhoneItems.style.display = 'none';

const menu = document.getElementById('menu');
const close = document.getElementById('close');

menu.addEventListener('click', () => {
    titleMenuPhoneItems.style.display = 'block';
    menu.style.display = 'none';
});

close.addEventListener('click', () => {
    titleMenuPhoneItems.style.display = 'none';
    menu.style.display = 'block';
});

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