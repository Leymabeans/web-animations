//Variables--------------------------------------
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
var ball;
var gravity = 1;
var friction = 0.93;
var colorArray = [
  '#C9DAE',
  '#03F7EE', 
  '#00B295', 
  '#191516', 
  '#AB2346'
];
var mouse = {
  x: innerWidth / 2, 
  y: innerHeight / 2
};



//Establish ball structure-----------------------
function Ball(x, y, dy, dx, radius, color) {
  //Ball variables
  this.x = x;
  this.y = y;
  this.dy = dy;
  this.dx = dx;
  this.radius = radius;
  this.color = color;

  //Draw balls
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  //Check parameters
  this.update = function() {
    if(this.y + this.radius > canvas.height) {
      this.dy = -this.dy * friction;
    }
    else {
      this.dy += gravity;
    }
    this.y += this.dy;
    this.draw();
  }
}


//Create balls-----------------------------------
function init() {
  ball = new Ball(canvas.width / 2, canvas.height / 2, 2, 2, 30, 'red');
  console.log(ball);
}


//Animate balls----------------------------------
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0, canvas.width, canvas.height);
  ball.update();
}



//Outputs random number between a certain range--
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max-min + 1) + min);
}

//Outputs random color from the color array------
function randomColor(colorArray) {
  return colors[Math.floor(Math.random() * colors.length)];
}



//Track mouse movement---------------------------
addEventListener('mousemove', function(event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

//Change canvas width when on page resize--------
addEventListener('resize', function() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});


//Calls creation and animation functions---------
init();
animate();