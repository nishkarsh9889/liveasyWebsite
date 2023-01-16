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
const leftbtn = document.getElementById('leftbtn');
const rightbtn = document.getElementById('rightbtn');
const feedbacks = document.querySelectorAll('.customerfeedback');

let counter = 0;
feedbacks[counter].classList.add('show');
for (let i = 1; i < feedbacks.length; i++) {
    feedbacks[i].classList.add('hide');
}

leftbtn.addEventListener('click', () => {
    feedbacks[counter].classList.remove('show');
    feedbacks[counter].classList.add('hide');
    counter--;
    if (counter < 0) {
        counter = feedbacks.length - 1;
    }
    feedbacks[counter].classList.remove('hide');
    feedbacks[counter].classList.add('show');
});

rightbtn.addEventListener('click', () => {
    feedbacks[counter].classList.remove('show');
    feedbacks[counter].classList.add('hide');
    counter++;
    if (counter > feedbacks.length - 1) {
        counter = 0;
    }
    feedbacks[counter].classList.remove('hide');
    feedbacks[counter].classList.add('show');
});


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

function slider() {
    let sliders = document.querySelectorAll(".image-slider-img");
    let sliderbtns = document.querySelectorAll(".image-slider-btns button");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].style.display = "none";
    }
    let i = 0;
    setInterval(function () {
        sliders[i].style.display = "none";
        i++;
        if (i == sliders.length) {
            i = 0;
        }
        sliders[i].style.display = "flex";
        for (let j = 0; j < sliderbtns.length; j++) {
            sliderbtns[j].classList.remove("image-slider-btn-active");
        }
        sliderbtns[i].classList.add("image-slider-btn-active");
    }, 3000);

    for (let i = 0; i < sliderbtns.length; i++) {
        sliderbtns[i].addEventListener("click", function () {
            for (let j = 0; j < sliderbtns.length; j++) {
                sliderbtns[j].classList.remove("image-slider-btn-active");
            }
            sliderbtns[i].classList.add("image-slider-btn-active");
            for (let j = 0; j < sliders.length; j++) {
                sliders[j].style.display = "none";
            }
            sliders[i].style.display = "flex";
        });
    }
}
slider();