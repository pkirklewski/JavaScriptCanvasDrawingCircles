
//document.write(window.screen.availHeight);
//document.write(' ');
//document.write(window.screen.availWidth);

var canvas = document.getElementById("canvas_circles");
var c = canvas.getContext("2d");
resizeCanvas();
console.log(c.localName);

for (i = 0; i <= 800; i++) {

	var s = Math.random() * 50;						//size
	var x = (Math.floor(Math.random() * window.innerWidth));		//pos x
	var y = Math.floor(Math.random() * window.innerHeight);		//pos y
	
	var r = Math.floor(Math.random() * 255);			// RGB r 
	var g = Math.floor(Math.random() * 255);			// RGB g
	var b = Math.floor(Math.random() * 255);			// RGB b
	var a = Math.random();								// alpha
	var rgba = "rgba(" + r + "," + g + "," + b + "," + a + ")    ";
	// x = x - s;
	// y = y - s;

/* 	var k = Math.random();
	var nowazmienna = Math.floor(k * 255);
	console.log(k + " " + nowazmienna);

	if (x > window.screen.availWidth) {
		console.log(x);
	} */

	//document.write(rgba);

c.beginPath();
c.arc(x, y, s, 0, Math.PI * 2, false);
	c.strokeStyle = rgba;
	c.stroke();
	c.fillStyle = rgba;
	c.fill();
}

//c.fill();

//c.beginPath();
//c.arc(400, 400, 30, 0, Math.PI * 2, false);
//c.strokeStyle = 'blue';
//c.stroke();
//c.fill();

//// Red rectangle
//ctx.beginPath();
//ctx.lineWidth = "3";
//ctx.strokeStyle = "blue";
//ctx.rect(5, 5, 290, 470);
//ctx.stroke();


n = new circle(300, 300, 30, 0, Math.PI * 2);
n.draw;
function circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function () {
		//c.beginPath();
		//c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
		//c.strokeStyle ='blue';
		//c.stroke();

		c.beginPath();
		c.arc(400, 400, 30, 0, Math.PI * 2, false);
		c.strokeStyle = 'blue';
		c.stroke();
		c.fill();
	}

}

function initialize() {
	// Register an event listener to call the resizeCanvas() function
	// each time the window is resized.
	window.addEventListener('resize', resizeCanvas, false);
	// Draw canvas border for the first time.
	resizeCanvas();
}

// Display custom canvas. In this case it's a blue, 5 pixel
// border that resizes along with the browser window.
function redraw(wx, wy) {

	// myCanvas =====================================================================
	//c.strokeStyle = '#0174DF'
	//c.lineWidth = '5';
	//c.strokeRect((0, 0, window.innerWidth / 2)* 1.61), (window.innerWidth / 2) ;
	// Draw a rectangle
	/*var a = wx / 2*/ // The side of the square
	//c.beginPath();
	//c.lineWidth = "1";
	//c.strokeStyle = "#FF4000";
	//c.strokeRect(10, 10, a, a);
	//c.moveTo(0, 0)
	//c.fillStyle = "red";
	//c.fill();

	//c.fillRect(100, 100, 100, 100);
	// myCanvas =====================================================================
}

function resizeCanvas() {
	var wx = (window.innerWidth); //* 1.61
	var wy = (window.innerHeight);
	canvas.width = wx;
	canvas.height = wy;
	
	canvas.x
	redraw(wx, wy);
}