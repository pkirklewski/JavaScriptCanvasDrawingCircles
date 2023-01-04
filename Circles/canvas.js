// document.write(window.screen.availHeight);
// document.write(' ');
// document.write(window.screen.availWidth);
var canvas = document.querySelector('canvas');
var c = canvas.getContext("2d");
initialize();

//console.log(c.localName);

function initialize() {
	window.addEventListener('resize', resizeCanvas, false);
	resizeCanvas();
}

function redraw(wx, wy) {

}

function resizeCanvas() {
	var wx = (window.innerWidth-30); //* 1.61
	var wy = (window.innerHeight-30);
	canvas.width = wx;
	canvas.height = wy;
	canvas.x
	redraw(wx, wy);
}

function rcolor(){
    var r = Math.floor(Math.random() * 255);			// RGB r 
	var g = Math.floor(Math.random() * 255);			// RGB g
	var b = Math.floor(Math.random() * 255);			// RGB b
	var a = Math.random();								// alpha
	var rgba = "rgba(" + r + "," + g + "," + b + "," + a + ")    ";
    return rgba;
}

var circleArray = [];

for (var i = 0; i <= 300; i++){
    var x = Math.random() * (canvas.width - radius * 2) ;
    var y = Math.random() * (canvas.height - radius * 2) ;
    var dx = (Math.random() - 0.5) * 6;
    var dy = (Math.random() - 0.5) * 6;
    var radius = Math.floor(Math.random() * (60 - 30 + 1)) + 30;
    var scolor = rcolor();
    var fcolor = rcolor();
    circleArray.push(new Circle(x,y,dx,dy,radius,scolor,fcolor));
}

function Circle(x, y, dx, dy, radius,scolor,fcolor) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
    this.scolor = scolor;
    this.fcolor = scolor;

	this.draw = function () {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = scolor;
        c.fillStyle = fcolor;
		c.stroke();
		c.fill();
        }

        this.update = function(){
       
            if( this.x + this.radius > canvas.width){this.dx = -this.dx;}
            if( this.x - this.radius < 0){this.dx = 5;}
            if( this.y + this.radius > canvas.height){this.dy = -this.dy;}
            if( this.y - this.radius < 0){this.dy = 5;}
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
            //console.log("x: " + this.x + " dx: " + this.dx + " dy: " + this.dy);

        }
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}
animate();


