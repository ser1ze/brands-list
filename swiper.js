document.addEventListener("DOMContentLoaded", function () {
  let swiper = null;

  function initOrDestroySwiper() {
    if (window.innerWidth >= 768) {
      if (swiper !== null) {
        swiper.destroy(true, true);
        swiper = null;
      }
    } else {
      if (swiper === null) {
        swiper = new Swiper(".swiper", {
          direction: "horizontal",
          loop: true,
          slidesPerView: "auto",
          spaceBetween: 16,
          pagination: {
            el: ".swiper-pagination",
          },
        });
      }
    }
  }

  initOrDestroySwiper();
  window.addEventListener("resize", initOrDestroySwiper);
});
