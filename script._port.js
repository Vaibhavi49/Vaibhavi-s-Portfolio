// script.js
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const body = document.body;

  if(scrollY < window.innerHeight) {
    body.style.background = '#ffffff'; // White
  } else if(scrollY < window.innerHeight * 2) {
    body.style.background = '#fdebe9'; // pastel pink
  } else if(scrollY < window.innerHeight * 3) {
    body.style.background = '#fcd5d9'; // lighter pink
  } else {
    body.style.background = '#fbe7f1'; // even softer
  }
});
