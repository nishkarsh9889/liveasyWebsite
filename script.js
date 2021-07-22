// const nav= document.querySelector('header'),
//       productsBtn = document.querySelector('#products-btns')

// productsBtn.addEventListener('click', (e) => {
//     const target = e.target;
//     if(target.classList.contains('transporter')) {
        
//     }
// })

// document.addEventListener('scroll', changeNavColor)

// function changeNavColor() {
//     if (nav.classList.contains('bg-dark')) {
//       nav.classList.remove('bg-dark')
//     }
//     if(window.scrollY >= 64) {
//      nav.classList.add('bg-dark')
//     } 
// }

document.getElementById("t-desc").style.display = "none";

$(document).ready(function(){
  $("#shipper").click(function(){
    $("#t-desc").hide();
    $("#s-desc").show();

    document.getElementById("shipper").style.cssText = "background-color: transparent; border: none; text-decoration: none; border-bottom: 2px solid var(--blue); color: var(--blue);  padding: 0.4rem 2rem";
    document.getElementById("transporter").style.cssText = "background-color: transparent; border: none; text-decoration: none; border-bottom: 2px solid #665D5D; color: #665D5D;  padding: 0.4rem 2rem";
  });

  $("#transporter").click(function(){
    document.getElementById("transporter").style.cssText = "background-color: transparent; border: none; text-decoration: none; border-bottom: 2px solid var(--blue); color: var(--blue);  padding: 0.4rem 2rem";
    document.getElementById("shipper").style.cssText = "background-color: transparent; border: none; text-decoration: none; border-bottom: 2px solid #665D5D; color: #665D5D; padding: 0.4rem 2rem";

    $("#s-desc").hide();
    $("#t-desc").show();
  });
});

