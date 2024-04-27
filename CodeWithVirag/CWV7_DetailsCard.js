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

/*
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


/*
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
  post.classList.add('post');
  post.setAttribute('id', `${postID}`);

  post.innerHTML = `
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
    <h6>Post ${postID}</h6>
    <textarea></textarea>
  `;
  
  postID += 1;
  document.body.appendChild(post);

  post.querySelector('textarea').focus()

  const posts = [...document.querySelectorAll('.post')];
  const exitBtn = [...document.querySelectorAll('.icon-tabler-x')];

  exitBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      document.body.removeChild(posts[index]);
    })
  })
});

