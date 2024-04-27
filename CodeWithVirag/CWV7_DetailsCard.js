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

