const shareBtn = document.querySelector(".share-btn");
const modalDialog = document.querySelector(".copy-link-dialog");
const closeBtn = document.querySelector(".close-btn");
const copyBtn = document.querySelector(".copy-btn");

shareBtn.addEventListener("click",()=>{
  modalDialog.classList.remove("copy-link-dialog--fadeout");
  // fadeout 애니메이션 효과 제어
  modalDialog.showModal();
  // 모달 대화상자 열림. 
});


closeBtn.addEventListener("click", ()=>{
  modalDialog.classList.add("copy-link-dialog--fadeout");
  // fadeout 애니메이션 효과 제어

  modalDialog.close();
  // 모달 대화상자 제거
});


copyBtn.addEventListener("click", ()=>{
  const copyInput = document.getElementById("copy-link-input");

  copyInput.select();
  // copyInput 요소를 선택
  copyInput.setSelectionRange(0,99999);
  // 선택한 텍스트이 범위를 0부터 99999까지로 설정

  navigator.clipboard.writeText(copyInput.value);
  // 선택한 텍스트를 클립보드에 복사

  const copyText = document.getElementById("copy-text"
  );
  copyText.innerHTML = 'Copied';

});


