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

