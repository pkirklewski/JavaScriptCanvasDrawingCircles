var canvas = document.querySelector('canvas');
var c = canvas.getContext("2d");
initialize();

//console.log(c.localName);

function initialize() {
	window.addEventListener('resize', resizeCanvas, false);
	resizeCanvas();
}

function resizeCanvas() {
	var wx = (window.innerWidth-30); //* 1.61
	var wy = (window.innerHeight-30);
	canvas.width = wx;
	canvas.height = wy;
	canvas.x
	redraw(wx, wy);
}
/* 
function redraw(wx, wy) {

}
function rcolor(){
  var r = Math.floor(Math.random() * 255);			// RGB r 
var g = Math.floor(Math.random() * 255);			// RGB g
var b = Math.floor(Math.random() * 255);			// RGB b
var a = Math.random();								// alpha
var rgba = "rgba(" + r + "," + g + "," + b + "," + a + ")    ";
  return rgba;
}

const circle = {
  x: 50,
  y: 50,
  radius: 25,
  velocity: 0,
  acceleration: 0.25,
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
  }
};

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

canvas.addEventListener('mousedown', dragStart);
canvas.addEventListener('mouseup', dragEnd);
canvas.addEventListener('mousemove', drag);

function dragStart(e) {
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  if (e.target === circle) {
    isDragging = true;
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  isDragging = false;
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    circle.x = currentX + circle.radius;
    circle.y = currentY + circle.radius;

    draw();
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circle.draw();
  requestAnimationFrame(draw);
}

draw();

circle.velocity = 0;

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  isDragging = false;

  circle.y = canvas.height - circle.radius;
}
 */