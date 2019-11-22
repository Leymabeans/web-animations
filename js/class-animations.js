//Variables----------
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var circleArray = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//Establish circle---
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
    c.fill();
  }

  this.update = function() {
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if(this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}


//Create circles-----
for(var i=0; i < 60; i++) {
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 9;
  var dy = (Math.random() - 0.5) * 8;
  var radius = 30;
  var color = 'rgba(255, 0, 0, 0.9)';
  circleArray.push(new Circle(x, y, dx, dy, radius));
}


//Animation----------
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for(var i=0; i<circleArray.length; i++){
    circleArray[i].update();
  }
}
animate();