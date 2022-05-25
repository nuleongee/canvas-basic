const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

context.beginPath();
context.arc(300, 200, 50, 0, radian(360), false);
context.fill();
context.beginPath();
context.arc(500, 100, 20, 0, radian(360), false);
context.stroke();

function radian(angle) {
  return (angle * Math.PI) / 180;
}
