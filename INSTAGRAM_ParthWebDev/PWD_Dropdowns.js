
const dropdownToggle = document.querySelector(".dropdown-toggle");

const dropdownMenu = document.querySelector("#dropdown > .menu");

dropdownToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("open");
  dropdownToggle.classList.toggle("open");
});
