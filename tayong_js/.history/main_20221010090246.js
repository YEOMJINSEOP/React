
const scrolldown = true
window.addEventListener('wheel', (event) => {
  if(event.deltaY > 20 && scrolldown){
    window.scrollTo(0, 700,{behavior:'smooth'});
    scrolldown = false;
  };
});

