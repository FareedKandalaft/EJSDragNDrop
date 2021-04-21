const fill = document.querySelector('.fill');
const boxes = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

boxes.forEach((box) => {
  box.addEventListener('dragover', dragOver);
  box.addEventListener('dragenter', dragEnter);
  box.addEventListener('dragleave', dragLeave);
  box.addEventListener('drop', dragDrop);
});

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}
function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  // prevent default to allow drop
  e.preventDefault();
}
function dragEnter(e) {
  this.className += ' hovered';
}
function dragLeave() {
  this.className = 'empty';
}
function dragDrop(e) {
  // prevent default action (open as link for some elements)
  e.preventDefault();
  this.className = 'empty';
  this.append(fill);
}
