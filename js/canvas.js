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
c.arc();