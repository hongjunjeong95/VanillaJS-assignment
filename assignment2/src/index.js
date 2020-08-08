const colors = ['#1abc9c', '#3498db', '#9b59b6', '#f39c12', '#e74c3c'];

const body = document.querySelector('body');
const h2 = document.querySelector('h2');

const handleResize = () => {
  let winWidth = window.outerWidth;
  h2.style.color = 'white';
  if (winWidth < 550) {
    body.style.backgroundColor = colors[0];
  } else if (winWidth < 728) {
    body.style.backgroundColor = colors[1];
  } else if (winWidth < 960) {
    body.style.backgroundColor = colors[2];
  } else if (winWidth < 1280) {
    body.style.backgroundColor = colors[3];
  } else {
    body.style.backgroundColor = colors[4];
  }
};
window.addEventListener('resize', handleResize);
