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