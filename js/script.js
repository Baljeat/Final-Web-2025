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


//----------------------- hiển thị sản phẩm
// Chuyển hướng đến trang sản phẩm
function loadProduct(productId) {
    window.location.href = `product.html?product=${productId}`;
}

// Lightbox (Xem ảnh lớn)
function openLightbox(imageSrc) {
    document.getElementById("lightbox-img").src = imageSrc;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

let img = [
    "img/Yonex/Racquet/100zz-1.png",
    "img/Yonex/Racquet/100zz-2.png",
    "img/Yonex/Racquet/100zz-3.png"
];


function nextSlide() {
    index = (index + 1) % img.length;
    document.getElementById("slide-img").src = img[index];
    console.log("Ảnh hiện tại:", img[index]); // Kiểm tra URL
}

function prevSlide() {
    index = (index - 1 + img.length) % img.length;
    document.getElementById("slide-img").src = img[index];
    console.log("Ảnh hiện tại:", img[index]); // Kiểm tra URL
}
