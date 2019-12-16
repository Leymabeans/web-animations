//Variables--------------------------------------
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
var mouse = {
  x: innerWidth, 
  y: innerHeight
};



//Animate pattern, add more patterns to screen---
function animate() {
  requestAnimationFrame(animate);
  c.font = "20px Arial";
  c.fillText("*************", mouse.x, mouse.y);
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



animate();