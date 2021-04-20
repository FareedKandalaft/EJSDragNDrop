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
function dragEnter() {
  console.log('dragEnter');
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}
function dragLeave() {
  this.className = 'empty';
}
function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}
