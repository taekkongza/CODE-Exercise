
document.addEventListener("DOMContentLoaded", function(){
  let observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll('.box').forEach(function(box){
    observer.observe(box);
  });
});

document.addEventListener('scroll',function(){
  const scrollContent = document.querySelector('.scroll-content');
  const triggerHeight = window.innerHeight / 1.3;

  if (window.scrollY > triggerHeight){
    scrollContent.classList.add('visible');
  } else {
    scrollContent.classList.remove('visible');
  }
});

