var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//Rectangles
c.fillStyle = "rgba(255, 0, 0, 0.6)";
c.fillRect(100, 100, 100, 100);
c.fillRect(500, 100, 100, 100);


//Lines
c.strokeStyle = "rgba(255, 0, 0, 0.3)";
c.beginPath();
c.moveTo(200, 100);
c.lineTo(350, 50);
c.lineTo(500, 100);
c.stroke();

c.beginPath();
c.moveTo(200, 200);
c.lineTo(350,250);
c.lineTo(500, 200);
c.stroke();


//Arcs and Circles
c.beginPath();
c.arc(350, 300, 40, 0, Math.PI * 2, false);
c.stroke();


//Printing multiple rectangles
for(var i=0; i<40; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.fillStyle = "rbga(255, 0, 0, 0.3)";
  c.fillRect(x, y, 50, 50);
}

//Printing multiple lines
for(var i=0; i<160; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.strokeStyle = "rgba(255, 0, 0, 0.3)";
  c.beginPath();
  c.moveTo(400, 400);
  c.lineTo(x, y);
  c.stroke();
}

//Printing multiple circles
for(var i=0; i<40; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.strokeStyle = "rgba(255, 0, 0, 0.3)";
  c.beginPath();
  c.arc(x, y, 40, 0, Math.PI * 2, false);
  c.stroke();
}