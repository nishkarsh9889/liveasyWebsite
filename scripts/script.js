//Nav items toggle
const navItems = document.querySelector('.nav-items');
const mobileNavBtn = document.querySelector('.mobile-navbar-btn');
const mobileNavIcon = document.querySelector('.mobile-nav-icon');
mobileNavBtn.addEventListener('click', () => {
    navItems.classList.toggle('active');
    mobileNavIcon.classList.toggle('active');
});

//products toggle
const transporter = document.getElementById('transporter');
const shipper = document.getElementById('shipper');
const transporterDetails = document.getElementById('transporter-details');
const shipperDetails = document.getElementById('shipper-details');

//default condition
transporter.classList.add('product-btn-active');
shipper.classList.remove('product-btn-active');
transporterDetails.classList.remove('product-inactive');
transporterDetails.classList.add('product-active');
shipperDetails.classList.remove('product-active');
shipperDetails.classList.add('product-inactive');
// leftimg add class active-mobile
const leftimg = document.getElementById('left-img');
const rightimg = document.getElementById('right-img');
leftimg.classList.add('active-mobile');
rightimg.classList.add('inactive-mobile');






transporter.addEventListener('click', () => {
    transporter.classList.add('product-btn-active');
    shipper.classList.remove('product-btn-active');
    transporterDetails.classList.remove('product-inactive');
    transporterDetails.classList.add('product-active');
    shipperDetails.classList.remove('product-active');
    shipperDetails.classList.add('product-inactive');

    rightimg.classList.remove('active-mobile');
    rightimg.classList.add('inactive-mobile');
    leftimg.classList.remove('inactive-mobile');
    leftimg.classList.add('active-mobile');




});

shipper.addEventListener('click', () => {
    shipper.classList.add('product-btn-active');
    transporter.classList.remove('product-btn-active');
    shipperDetails.classList.remove('product-inactive');
    shipperDetails.classList.add('product-active');
    transporterDetails.classList.remove('product-active');
    transporterDetails.classList.add('product-inactive');

    leftimg.classList.remove('active-mobile');
    leftimg.classList.add('inactive-mobile');
    rightimg.classList.remove('inactive-mobile');
    rightimg.classList.add('active-mobile');


});


//feedback slider
let newFeedbacks = document.querySelectorAll('.new-feedback');
let currentNewFeedbackIndex = 0;
let feedbackTimer;
let newFeedbacksLeftBtn = document.querySelector('.new-feedback-left-slider button');
let newFeedbacksRightBtn = document.querySelector('.new-feedback-right-slider button');

function displayNextFeedback() {
    const currentNewFeedback = newFeedbacks[currentNewFeedbackIndex];
    currentNewFeedback.style.display = 'none';
    currentNewFeedbackIndex = (currentNewFeedbackIndex + 1) % newFeedbacks.length;
    const nextFeedback = newFeedbacks[currentNewFeedbackIndex];
    nextFeedback.style.display = 'block';
}

function displayPreviousFeedback() {
    const currentNewFeedback = newFeedbacks[currentNewFeedbackIndex];
    currentNewFeedback.style.display = 'none';
    currentNewFeedbackIndex = (currentNewFeedbackIndex - 1 + newFeedbacks.length) % newFeedbacks.length;
    const previousFeedback = newFeedbacks[currentNewFeedbackIndex];
    previousFeedback.style.display = 'block';
}

function startFeedbackTimer() {
    feedbackTimer = setInterval(displayNextFeedback, 5000);
}

function stopFeedbackTimer() {
    clearInterval(feedbackTimer);
}

function handleLeftButtonClick() {
    stopFeedbackTimer();
    displayPreviousFeedback();
}

function handleRightButtonClick() {
    stopFeedbackTimer();
    displayNextFeedback();
}

newFeedbacks.forEach(newFeedback => newFeedback.style.display = 'none');
newFeedbacks[currentNewFeedbackIndex].style.display = 'block';
newFeedbacksLeftBtn.addEventListener('click', handleLeftButtonClick);
newFeedbacksRightBtn.addEventListener('click', handleRightButtonClick);
startFeedbackTimer();

//faq slider
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

