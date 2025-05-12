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

// Chuyển động slider trong chi tiết sản phẩm
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

//size giày
const sizeButtons = document.querySelectorAll('.size-button');
const selectedSizeText = document.querySelector('.selected-size');

sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        sizeButtons.forEach(btn => btn.classList.remove('selected')); // Xóa highlight trước đó
        button.classList.add('selected'); // Highlight size được chọn
        selectedSizeText.textContent = `Bạn đã chọn size: ${button.textContent}`;
    });
});


//----------------
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("#nav-mobile");
    const overlay = document.querySelector(".overlay");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("open");
        overlay.classList.toggle("show");
    });

    overlay.addEventListener("click", function() {
        menu.classList.remove("open");
        overlay.classList.remove("show");
    });

    // Xử lý dropdown
    document.querySelectorAll(".menu-collapse").forEach(dropdownToggle => {
        dropdownToggle.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.classList.toggle("show");
        });
    });
});




