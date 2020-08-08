const colors = ['#1abc9c', '#3498db', '#9b59b6', '#f39c12', '#e74c3c'];

const superEventHandler = {
  handleMouseEnter: function () {
    this.innerHTML = 'The mouse is here!';
    this.style.color = colors[0];
  },
  handleMouseLeave: function () {
    this.innerHTML = 'The mouse is gone!';
    this.style.color = colors[1];
  },
  handleResize: function () {
    const title = document.querySelector('h2');
    title.innerHTML = 'You just resized!';
    title.style.color = colors[2];
  },
  handleRightClick: function () {
    const title = document.querySelector('h2');
    title.innerHTML = 'That was right click!';
    title.style.color = colors[3];
  },
};

function init() {
  const title = document.querySelector('h2');
  title.addEventListener('mouseenter', superEventHandler.handleMouseEnter);
  title.addEventListener('mouseleave', superEventHandler.handleMouseLeave);
  window.addEventListener('resize', superEventHandler.handleResize);
  window.addEventListener('contextmenu', superEventHandler.handleRightClick);
}

init();
