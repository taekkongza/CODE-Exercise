// close the section

const closeBtn = document.querySelector('.icon-tabler-letter-x');
const mainContainer = document.querySelector('.main-container');


closeBtn.addEventListener('click', () => {
  mainContainer.style.transform = "scale(0)";
});

// Add checkmark when collection is clicked

const collections = [...document.querySelectorAll('.collection')];

// ... 는 전개 연산자 입니다.
// 이 연산자는 배열이나 이터러블 객체를 전개하여 해당 요소를 분리하거나 합칠때 사용합니다.

collections.forEach(collection => {
  collection.addEventListener('click', () => {
    const checkmark = document.createElement('div');
    checkmark.innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>';

    collection.appendChild(checkmark);
  })
})


