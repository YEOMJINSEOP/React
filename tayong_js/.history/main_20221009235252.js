
window.addEventListener('scroll', (event) => {
  console.log(event.clientX);
})

// document.addEventListener('scroll', (event) => {
//   console.log('scroll?');
// })


const scrollBtn = document.querySelector('.scrollBtn');
scrollBtn.addEventListener('scroll', () => {
  console.log('you scrolled!!');
})