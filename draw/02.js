const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

context.beginPath();
context.moveTo(100, 100);
context.lineTo(300, 200);
context.closePath();
context.stroke();
// context.fill();
