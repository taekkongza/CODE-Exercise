
document.addEventListener('scroll',function(){
  let element = document.querySelector('.scroll-element');
  let position = element.getBoundingClientRect();

  // checking whether fully visible
  if (position.top < window.innerHeight && position.bottom >=0){
    element.classList.add('visible');
  } else {
    element.classList.remove('visible');
  }
});