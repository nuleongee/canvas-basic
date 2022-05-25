const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
console.log(context);

context.fillRect(50, 50, 100, 100);
context.fillStyle = 'red';
context.fillRect(0, 0, 100, 100);
context.clearRect(50, 50, 50, 50);
context.strokeStyle = 'blue';
context.strokeRect(150, 150, 100, 100);
