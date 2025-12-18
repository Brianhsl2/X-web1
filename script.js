
(function(){
  const here = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('[data-navlink]').forEach(a=>{
    if(a.getAttribute('href') === here) a.classList.add('active');
  });
})();
