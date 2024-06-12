const swiper = new Swiper(".swiper", {
  // Swiper 라이브러리를 사용하여 '.swiper' 클래스를 가진 요소에 대한 
  // 새로운 Swiper 인스턴스를 초기화 합니다.
  direction: "horizontal",
  //  direction : Swiper의 슬라이드 이동 방향 설정
  //  기능 : 슬라이드가 좌우로 이동, 기본값
  slidePerView: 1,
  // 한번에 보이는 슬라이드 수 : 1
  effect: "fade",
  // 슬라이드 전환효과 설정: 페이드
  loop: true,
  // 슬라이드 무한 반복 설정 - 마지막 슬라이드가 끝나면 처음 슬라이드로 다시 돌아감
  speed: 300,
  // 전환 속도 300ms, 슬라이드가 전환할때 걸리는 시간

  pagination: {
    // pagination 설정을 위한 옵션 포함. 객체 형태로 페이지네이션 관련 설정을 정의

    el: ".swiper-pagination",
    // element (el)
    // el : Swiper 인스턴스가 페이지네이션을 렌더링할 HTML 요소를 지정합니다.
    // Swiper요소 내부에 페이지네이션 불릿(슬라이드 인디케이터)을 삽입하고, 
    // 이를 통해 현재 슬라이드의 위치를 시각적으로 나타냅니다.

    clickable: true,
    // 페이지네이션 불릿을 클릭할 수 있다록 설정
    // pagination을 설정하고 클릭 가능하록 한다.
  },
});

