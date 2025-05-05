$(document).ready(function(){
    $('.slider').slick({
      infinite:true,
      autoplay:true,
      autoplaySpeed:200,
      speed:1000,
      //fade: true,
      arrows:true,
      draggable: true, // Cho phép kéo chuột
      swipe: true, // Cho phép vuốt trên thiết bị cảm ứng
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  
    })
})

//-------------------------hiệu ứng khung sản phẩm
  document.querySelectorAll(".product").forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.boxShadow = "0 8px 16px rgba(56, 182, 241, 0.94)";
    });

    item.addEventListener("mouseout", () => {
        item.style.boxShadow = "none";
    });
});

//-----------------------hiệu ứng thu gọn Menu
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  // Kiểm tra nút có tồn tại không
  if (menuToggle && nav) {
      menuToggle.addEventListener("click", () => {
          nav.classList.toggle("active"); // Thêm/xóa class active
      });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
      dropdown.addEventListener("click", (event) => {
          event.stopPropagation(); // Ngăn việc click lan ra ngoài làm đóng menu
          dropdown.classList.toggle("active");
      });
  });

  // Đóng dropdown khi click ra ngoài
  document.addEventListener("click", (event) => {
      dropdowns.forEach(dropdown => {
          if (!dropdown.contains(event.target)) {
              dropdown.classList.remove("active");
          }
      });
  });
});

// script.js
function changeImage(imageSrc) {
    let mainImage = document.getElementById('mainImage');
    mainImage.src = imageSrc;
    mainImage.width = 550;
    mainImage.height = 750;
}
document.getElementById('mainImage').addEventListener('click', function() {
    openLightbox(this.src);
});

function openLightbox(imageSrc) {
    let lightbox = document.getElementById('lightbox');
    document.getElementById('lightboxImage').src = imageSrc;
    lightbox.classList.add("active");
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove("active");
}
