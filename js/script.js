$(document).ready(function(){
    $('.slider').slick({
      infinite:true,
      autoplay:true,
      autoplaySpeed:200,
      speed:2000
      ,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  
    })
  })

  document.querySelectorAll(".product").forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
    });

    item.addEventListener("mouseout", () => {
        item.style.boxShadow = "none";
    });
});