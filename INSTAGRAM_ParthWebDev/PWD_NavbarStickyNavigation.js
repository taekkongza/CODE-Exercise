// <script defer src=""> 에서 defer안하면 에러가 난다.

// document.addEventListener("DOMContentLoaded", function() {
// 
// document 현재 웹페이지 문서
// addEventListener 특정 이벤트가 발생할 때 실행할 함수를 지정
// "DOMContentLoaded"  DOM(document Object Model)이 완전히 로드되고
//                     파싱 되었을때 발생하는 이벤트입니다.
//                     즉 페이지의 기본 구조( HTML만 )가 준비되면 즉시 실행
//                     모든 스크립트와 스타일 시트가 로드될 필요 없으므로 
//                     페이지가 준비되면 바로 실행됩니다.

// 'DOMContentLoaded 이벤트는 DOM이 완전히 로드되과 파싱 되었을때 발생합니다.
// 그러나 이 이벤트는 페이지에 포함된 모든 스크립트, 스타일시트, 이미지 등의 
// 리소스가 모두 로드될 필요는 없습니다.
// 즉 이 이벤트는 HTML 문서의 기본 구조가 준비된 직후에 발생, 
// 외부 리소스의 로딩이 끝날때까지 기다리지 않습니다.

// 반면에 load 이벤트는 페이지에 포함된 모든 리소스(이미지, 스타일 시트 등)가 
// 완전히 로드된 후에 발생합니다.

// # DOMContentLoaded
//    - DOM 트리가 완전히 빌드된 후 발생
//    - 외부 리소스 (이미지, 스타일시트 등)의 로딩을 기다리지 않음
//    - HTML 문서의 파싱이 끝난 직후에 발생

// # load
//    - 페이지에 포함된 모든 리소스(이미지, 스타일시트, 스크립트 등)가 
//      모두 로드된 후 발생
//    - DOM 트리와 모든 외부 리소스가 완전히 준비된 후에 발생





  const nav = document.querySelector(".tabs-container");
  // .tab-container 클래스를 가진 첫번째 요소를 선택

  const offset = nav.offsetTop;
  // nav.offsetTop;  내비게이션 바의 상단이 문서의 상단에서 
  // 얼마나 떨어져 있는지 나타내는 값. 이값은 요소의 위치를 나타냅니다.

  window.addEventListener("scroll", function(){
  // window 현재 부라우저 창 또는 탭
  // "scroll" 사용자가 페이지를 스크롤 할때 발생하는 이벤ㅌ,
    if (window.scrollY >= offset){
      // window.scrollY 현재 스크롤 위치.
      //                페이지 상단에서부터의 수직 픽셀값을 반환
      // 현재 스크롤위치(window.scrollY)가 내비게이션 바의 초기 위치(offset) 이상인지 확인
      nav.classList.add("sticky");
      // classList 요소의 클랫 목록에 접근
      // add("sticky") sticky 클래스 추가

    } else {
      nav.classList.remove("sticky");
    }
  });
// });