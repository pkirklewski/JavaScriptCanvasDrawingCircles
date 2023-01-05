

//Create canvas
// var canvas = document.createElement("canvas");
// canvas.width = 500;
// canvas.height = 500;
// document.body.appendChild(canvas);


function rcolor(){
  var r = Math.floor(Math.random() * 255);			// RGB r 
var g = Math.floor(Math.random() * 255);			// RGB g
var b = Math.floor(Math.random() * 255);			// RGB b
var a = Math.random();								// alpha
var rgba = "rgba(" + r + "," + g + "," + b + "," + a + ")    ";
  return rgba;
}

//Create circle
var context = canvas.getContext("2d");
var circle = {
  x: 300,
  y: 50,
  radius: 50,
  color: rcolor(),
  velocityY: 0
};

//Create gravity
var gravity = 0.2;

//Draw circle
function drawCircle() {
  context.beginPath();
  context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  context.fillStyle = circle.color;
  context.fill();
  context.closePath();
}

//Drag circle
function dragCircle(e) {
  circle.x = e.clientX;
  circle.y = e.clientY;
}

//Update circle
function updateCircle() {
  //Apply gravity
  circle.velocityY += gravity;
  circle.y += circle.velocityY;

  //Stop at bottom
  if (circle.y + circle.radius > canvas.height) {
    circle.velocityY = 0;
    circle.y = canvas.height - circle.radius;
  }

  //Draw circle
  drawCircle();
}

//Add event listeners
canvas.addEventListener("mousemove", dragCircle);

//Animation loop
function loop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  updateCircle();
  requestAnimationFrame(loop);
}
loop();
