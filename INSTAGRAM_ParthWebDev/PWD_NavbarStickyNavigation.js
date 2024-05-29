// <script defer src=""> 에서 defer안하면 에러가 난다.

// document.addEventListener("DOMContentLoaded", function() {

  const nav = document.querySelector(".tabs-container");
  const offset = nav.offsetTop;

  window.addEventListener("scroll", function(){
    if (window.scrollY >= offset){
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  });
// });