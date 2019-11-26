//Variables----------
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 9;
var dy = (Math.random() - 0.5) * 8;
var radius = 30;
var color = 'rgba(255, 0, 0, 0.9)';


//Animation----------
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.strokeStyle = color;
  c.stroke();

  if(x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }

  if(y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }
  x += dx;
  y += dy;
}

animate();