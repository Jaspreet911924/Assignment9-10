const canvas = document.getElementById('main');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let brushSize = 5;
let brushColor = 'black';

canvas.width = window.innerWidth - 50;
canvas.height = 500;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = brushSize;

function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = brushColor;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

function changeColor(color) {
  brushColor = color;
}

function useEraser() {
  brushColor = 'white';
}

function changeBrushSize() {
  brushSize = document.getElementById('slider').value;
  ctx.lineWidth = brushSize;
  document.getElementById('brushSize').textContent = brushSize;
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
