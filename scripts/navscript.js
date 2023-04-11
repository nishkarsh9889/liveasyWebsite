//Nav items toggle
const navItems = document.querySelector('.nav-items');
const mobileNavBtn = document.querySelector('.mobile-navbar-btn');
const mobileNavIcon = document.querySelector('.mobile-nav-icon');
mobileNavBtn.addEventListener('click', () => {
    navItems.classList.toggle('active');
    mobileNavIcon.classList.toggle('active');
});

const facebook = document.getElementsByClassName('facebook');
const twitter = document.getElementsByClassName('twitter');
const instagram = document.getElementsByClassName('instagram');
const linkedin = document.getElementsByClassName('linkedin');

for (let i = 0; i < facebook.length; i++) {
    facebook[i].addEventListener('click', () => {
        window.open('https://www.facebook.com/profile.php?id=100072049426568', '_blank');
    })
}
for (let i = 0; i < twitter.length; i++) {
    twitter[i].addEventListener('click', () => {
        window.open('https://twitter.com/LiveasyIndia', '_blank');
    })
}
for (let i = 0; i < instagram.length; i++) {
    instagram[i].addEventListener('click', () => {
        window.open('https://www.instagram.com/job_ka_adda/', '_blank');
    })
}
for (let i = 0; i < linkedin.length; i++) {
    linkedin[i].addEventListener('click', () => {
        window.open('https://www.linkedin.com/company/liveasytransport', '_blank');
    })
}
const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
const answer = document.querySelectorAll('.answer');

for (let i = 0; i < answer.length; i++) {

    answer[i].style.display = 'none';
}
for (let i = 0; i < minus.length; i++) {
    minus[i].style.display = 'none';
}
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', () => {
        answer[i].style.display = 'flex';
        plus[i].style.display = 'none';
        minus[i].style.display = 'flex';
    })
}

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', () => {
        answer[i].style.display = 'none';
        plus[i].style.display = 'flex';
        minus[i].style.display = 'none';
    })
}


//loading

const loading = document.querySelector('#loading');
function loaded() {
    loading.style.display = 'none';
}
