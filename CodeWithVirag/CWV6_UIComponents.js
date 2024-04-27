// Close the locations section
const exitBtn = document.querySelector('.icon-tabler-x');

exitBtn.addEventListener('click',()=>{
  document.querySelector('.location-container').style.display = 'none';
});

// select a location
const locations = [...document.querySelectorAll('.location')];

// document.querySelectorAll('.location')은 CSS selector '.location'과
// 일치하는 모든 요소를 선택합니다.

// [...선택자] 는 선택된 요소들을 배열로 변환
// 이를 통해 배열의 메서드를 사용할 수 있습니다.


locations.forEach(l => {
  l.addEventListener('click',()=>{
    locations.forEach(lo => {
      lo.classList.remove('selected');
    })
    l.classList.add('selected');
  })
})


// locations.forEach() 
// location 배열의 각 요소에 대해 콜백 함수를 실행합니다.

// l 은 현재 처리중인 요소   를 나타내는 변수

// l.addEventListener( )
// 선택된 요소 l 에 이벤트 리스너 등록

// click 은 이벤트 유형으로 사용자가 요소를 클릭할 때 발생

// locations.forEach() 는 locations 배열의 각 요소에 대하여 콜백 함수를 실행
// lo는 현재 처리중인 요소

// lo.classList 는 선택된 요소의 CSS 클래스 목록에 접근
// lo.classList.remove('selected')   ==> selected 클래스를 제거

// l 은 클릭된 요소를 나타냄
// l.classList.add('selected')   ==> selected 클래스를 클릭된 요소에 추가


//-------------------------------------------------------------------------

// classList 란??

// classList는 HTML 요소의 클래스 속성을 조작하기 위한 
// javascript의 속성입니다.
// 이를 통해 요소의 클래스를 추가, 제거, 토글(켜기/끄기) 및 확인할 수 있습니다.

// classList 제공하는 메서드
// * add(class1, class2, ...)   클래스 목록 추가
// * remove(class1, class2, ...)  제거
// * toggle(class, force)   클래스가 있으면 제거하고 없으면 추가 합니다.
//                          force 매개변수가 제공되면 이 값에 따라 클래스를 
//                          추가할지 제거할지 결정합니다.
// * replace(oldClass, newClass)   요소의 클래스 목록에서 oldClass를 newClass로 교체

// classList는 DOMTokenList 객체를 반환하며, 이 객체는 요소의 클래스 속성을 나타냅니다.


/*
// ----------------------------------------------
// toggle 은 multiple check
locations.forEach( l => {
  l.addEventListener('click', ()=> {
    l.classList.toggle('selected');
  })
})
*/



