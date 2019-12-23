//Variables--------------------------------------
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
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



//Establish object structure-----------------------
function Object(x, y, dx, dy, radius, color) {
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
    //Insert shape design here
    c.fill();
    c.stroke();
    c.closePath();
  }

  //Check parameters
  this.update = function() {
    this.draw();
  }
}



//Create objects-----------------------------------
function init() {

}

//Animate objects----------------------------------
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0, canvas.width, canvas.height);
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
  init();
})



//Calls creation and animation functions---------
init();
animate();