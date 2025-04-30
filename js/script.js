$(document).ready(function(){
    $('.slider').slick({
      infinite:true,
      autoplay:true,
      autoplaySpeed:200,
      speed:2000,
      fade: true,
      arrows:true,
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
