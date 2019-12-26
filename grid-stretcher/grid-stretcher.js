//Variables--------------------------------------
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
var circleArray = [];
var mouse = {
  x: innerWidth / 2, 
  y: innerHeight / 2
};



//Establish object structure-----------------------
function Circle(x, y, dx, dy, radius, color) {
  //Ojbect variables
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;

  //Draw object
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
    c.closePath();
  }

  //Check parameters
  this.update = function() {
    //Contain grid lines in the screen
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = 0;
      this.dy = 0;
    }
    if(this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = 0;
      this.dx = 0;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}



//Create objects-----------------------------------
function init() {
  circleArray = [];
  for(var i = 0; i < 140; i++) {
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 3;
    var dy = (Math.random() - 0.5) * 3;
    var radius = 7;
    var color = 'rgba(255, 0, 0, 0.9)';
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

//Animate objects----------------------------------
function animate() {
  requestAnimationFrame(animate);
  for(var i=0; i<circleArray.length; i++){
    circleArray[i].update();
  }
}



//Outputs random number between a certain range--
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max-min + 1) + min);
}

//Outputs random color from the color array------
function randomColor(colorArray) {
  return colorArray[Math.floor(Math.random() * colorArray.length)];
}




//Track mouse movement---------------------------
addEventListener('mousemove', function(event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

//Resize canvas on page resize, restart animation
addEventListener('resize', function() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});

//On page click, restart animation---------------
addEventListener('click', function() {
  c.clearRect(0, 0, innerWidth, innerHeight);
  init();
})



//Calls creation and animation functions---------
init();
animate();