const input = document.querySelector(".input__field");
const inputIcon = document.querySelector(".input__icon");

inputIcon.addEventListener("click",() => {
  if (inputIcon.classList.contains('icon-eye-off'){
    inputIcon.innerHTML = '';
  }



});