// Click join button
const joinBtn = document.querySelector('.join');

joinBtn.addEventListener('click', ()=>{
  if (joinBtn.textContent === 'Join'){
    joinBtn.classList.add('joined');
    joinBtn.textContent = 'Joined';
  } else {
    joinBtn.classList.remove('joined');
    joinBtn.textContent = 'Join';
  }   
});

/* ------------------------------------------
textContent

노드의 텍스트 콘텐츠를 가져오거나 설정하는데 사용
노드의 모든 자식 노드를 포함한 텍스트 콘텐츠를 반환
*/

/*
노드란 컴퓨터 과학에서 사용되난 기초 단위
네트워크나 데이터 구조에서
정보를 저장하고 처리하는 지점을 의미
*/

/*
DOM(document object model)에서의 노드는
문서의 기본 구성 단위로 
문서전체, 요소, 속성, 텍스트 등이 
모두 노드이다.
예를 들어 <html> <body> <button>등의 태그들은
모두 노드가 된다.
*/


/* ------------------------------------------
classList

요소의 클래스 속성에 대한 접근
클래스 목록을 추가, 제거, 토글 또는 확인할 수 있음

classList
    .add( ) 하나 이상의 클래스 추가
    .remove( ) 하나 이상의 클래스 제거
    .toggle( ) 클래스가 존재하면 제거하고, 존재하지 않으면 추가
    .contain( ) 요소가 지정된 클래스를 포함하고 있는지 확인
    .item( ) 지정된 인덱스의 클래스를 반환
    .length 클래스 목록의 길이를 반환
*/



// Create post
const createPostBtn = document.querySelector('.create-post');
let postID = 1;

createPostBtn.addEventListener('click', () =>{
  const post = document.createElement('div');
  // createElement 
  // 새로운 div 요소를 생성, post 에 할당
  post.classList.add('post'); 
  // classList.add
  // post 요소에 post 클래스 추가
  post.setAttribute('id', `${postID}`);
  // setAttribute
  // post요소에 id 속성을 설정, 현재 postID 값을 문자열로 변환하여 할당

  post.innerHTML = `
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
    <h6>Post ${postID}</h6>
    <textarea></textarea>
  `;
  // post.innerHTML
  // post요소 내부 HTML 설정
  // 닫기 버튼, 포스트 제목, 텍스트 영역 포함


  
  postID += 1;
  document.body.appendChild(post);
  // post 요소를 body요소의 자식으로 추가
  // ######################################
  // appendChild 메서드를 실행하지 않으면
  // 자바스크립트에서 생성된 요소는 메모리에만 존재하고 
  // 실제 DOM 트리에 추가되지 않습니다.
  // --------------------------------------

  post.querySelector('textarea').focus()
  // post요소 내부의 텍스트 영역에 포커스를 설정
  // .focus() 메서드는 선택된 textarea에 포커스를 맞춥니다.
  // 이 코드가 실행되면 새로 생성된 포스트의 textarea에 자동으로 맞춰집니다.
  // 이렇게 하는 이유는 사용자가 포스트를 생성하면 바로 텍스트를 입력할 수 있도록 하기 위해서 입니다.
  // 포커스가 textarea에 맞춰져 있으면 키보드로 바로 텍스트를 입력할 수 있습니다.


  const posts = [...document.querySelectorAll('.post')];
  // post 클래스를 가진 요소들을 선택, 배열로 변환, posts 상수에 할당

  const exitBtn = [...document.querySelectorAll('.icon-tabler-x')];
  // 모든 icon-tabler-x 클래스를 가진 요소를 선택하고 배열로 변환하여 exitBtn 상수에 할당

  exitBtn.forEach((btn, index) => {
  // exitBtn 배열의 각 요소에 대해 반복하는 
  // forEach 메서드를 호출
  // 각 반복에서 현재 버튼과 해당 버튼의 인덱스가 제공합니다. 
    btn.addEventListener('click', () => {
      document.body.removeChild(posts[index]);
      // posts 배열에서 현재 버튼의 인덱스에 해당하는 포스트 요소를 제거
    })
  })
});



/* -----------------------------------------------
querySelector는 문서에서 지정된 선택자와 일치하는
첫번째 요소를 반환하는 메서드 입니다.

document.querySelector(selectors);

### querySelector는 제공된 선택자와 일치하는 문서내
첫번째 요소를 반환합니다.

document.querySelector("#id"); // id 값을 가진 요소 선택
document.querySelector(".class"); // class 값을 가진 요소 선택

모든 일치 요소의 목록이 필요한 경우 querySelectorALL 을
사용해야함.
*/


/* -----------------------------------------------
addEventListener는 특정 DOM 요소에 이벤트리스너를 
등록하는 메서드입니다.
이벤트가 발생하면 , 지정된 함수가 실행   되어
이벤트에 대한 반응을 처리할 수 있습니다.

element.addEventListener(event, function, options);

  - event
    감지할 이벤트 유형을 나타내는 문자열 입니다.
    + click
    + mouseover
    + keydown

  - function
    이벤트가 발생할 때 실행될 함수
    이벤트 객체가 함수에 전달되어 이벤트 정보에 액세스할 수 있다

  - options
    선택적 객체로, 이벤트 리스너의 동작을 제어하는 옵션을
    지정할 수 있다.

addEventListener
주요 특징
+ 하나의 요소에 여러 개의 동일한 이벤트 유형에 대한 리스너 등록 가능함
+ 이벤트 버블링과 캡처링을 제어할 수 있음
+ 이벤트 리스너를 동적으로 추가 제거 가능함
+ 이벤트 객체를 통해 이벤트 관련 정보에 액세스할 수 있음.

 */


/* -----------------------------------------------
DOM 
document object model
문서 객체 모델

웹페이지의 구조를 표현하는데 사용되는 개념

트리 구조에 대한 개념을 알아야 함
트리 구조는 뿌리(root) 에서 시작하여 가지(branch) 와 잎(leaf)으로 이어지는 구조를 가지고 있다.
이를 웹페이지에 적용하면,
뿌리는 HTML 문서 전체
가지는 element (각요소)
잎은 텍스트나 이미지와 같은 내용

###
DOM 은 웹페이지를 트리구조로 나타내어
각 요소와 그들 간의 관계를 표현한 것
*/


/* -----------------------------------------------
setAttribute

setAttribute는 DOM 요소의 속성 값을 설정하는 메서드

지정된 요소의 속성값을 변경하거나 새 속성을 추가할 수 있다.

js>
element.setAttribute(name, value);

+ name 설정할 속성의 이름을 나타내는 문자열
+ value 속성에 할당할 값을 나타내는 문자열
 
주요특징
1. 속성이 이미 존재하는 경우 값을 업데이트
2. 속성이 존재하지 않으면 지정된 이름과 값으로 새속성 추가
3. 속성 값은 문자열 로 처리
4. 요소의 DOM 트리 상에서의 위치는 변경되지 않습니다.

js>
const img = document.getElementById('myImage');
img.setAttribute('src', 'new-image.jpg');
img.setAttribute('alt', 'New Image');

setAttribute는 요소의 속성을 동적으로 조작하는데
유용하며, 특히 JS 로 HTML 요소를 생성하거나 수정할때 자주 사용한다.

*/

/* ----------------------------------------------
textarea

여러줄의 텍스트를 입력할 수 있는 HTML 폼 요소

html>
<textarea>
텍스트 내용 ~~~
</textarea>

주요 속서
+ cols : 텍스트 영역의 너비를 문자 단위로 지정
+ rows : 텍스트 영역의 높이를 행 단위로 지정
+ name : 폼 데이터를 서버로 전송할 때 사용되는 이름을 지정
+ readonly : 텍스트 영역을 읽기 전용으로 지정
+ disabled : 텍스트 영역 비활성화
+ maxlength: 허용된 문자의 최대 수를 지정
+ placeholder : 텍스트 영역의 예상값을 설명하는 짧은 힌트를 제공하며, 영역이 비어 있을때 나타나고, 영역에 포커스가 가면 사라집니다.
+ autofocus : 페이지가 로드 될때 텍스트 영역에 자동으로 포커스를 맞춥니다.
+ form : <textarea> 요소가 속한 <form> 요소를 지정합니다. 속성값은 <form> 요소의 id속성이 되어야 합니다.

일반적으로 <form> 태그 내부에 배치, 폼 데이터와 함께 서버로 전송됩니다.
*/

/* ----------------------------------------------
focus

포커스 상태는 특정 요소가 현재 선택되어 있거나
활성화 되어 있는 상태를 의미한다.
마우스 위치가 아님....
*/


/** ----------------------------------------------
forEach

forEach() 메서드는 배열의 각 요소에 대해 한 번씩 제공된 함수를 실행하는 메서드 입니다.

js>
array.forEach(callbackFunction);
array.forEach(callbackFunction, thisValue);

- callbackFunction
  배열의 각 요소에 대해 실행될 함수
  이 함수는 최대 3개의 인수를 받습니다.
  + currentValue : 현재 처리중인 요소의 값
  + index : 현재 처리중인 요소의 인덱스(옵션)
  + array : forEach() 가 호출된 배열 자체(옵션)

- thisValue
  콜백 함수 내부에서 사용할 this 값을 지정(옵션)

- 주요 특징
1. 배열의 모든 요소에 대해 한번씩 콜백 함수를 실행
2. 콜백 함수는 현재 처리중인 요소, 인덱스, 전체배열을 인수로 받는다.
3. 콜백 함수 내부에서 배열을 변경하면 변경된 값이 처리됨.
4. 배열의 길이가 변경되어도 처음 스캔할 때의 길이 만큼만 반복함
5. 반환값은 없으며 항상 undefined를 반환함

예시
js>
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => {
  console.log(`Index ${index}: ${number}`);
});

Index 0: 1
Index 1: 2
Index 2: 3
Index 3: 4
Index 4: 5


###
for문에서는 루프를 돌다가 특정 조건이 충족되면
루프를 중단하거나 코드 블록을 넘어갈 수 있음
break, continue 명령어 구현
forEach()는 작동하지 않음.

 */










