const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidePerView: 1,
  effect: "fade",
  loop: true,
  speed: 300,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});