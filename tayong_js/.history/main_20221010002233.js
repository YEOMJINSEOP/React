
window.addEventListener('wheel', (event) => {
  if(event.deltaY > 10){
    window.scrollTo({top: 700px, behavior:'smooth'});
  };
});