var canvas = document.getElementById('imgarea'),
	context = canvas.getContext('2d'),
	copyimg = document.getElementById('copyimg'),
	copycontext = copyimg.getContext('2d'),
	zoom = document.getElementById('zoom'),
	zoomdata = {}.
	box = canvas.getBoundingClientRect(),
	image;


var init = function ( ) {
	image = new Image();
	image.src = "1.jpg";
	image.onload = function () {
		context.drawImage(image,0,0,canvas.width,canvas.height);
	}	
}

var copy = function () {
	copycontext.drawImage(
		canvas,
		zoomdata.left - box.left,
		zoomdata.top - box.top,
		90,
		90,
		0,0,copycontext.width,copycontext.height
	);
}

init();

function showZoom(){
	zoom.style.display = 'block';
}

function hideZoom(){
	zoom.style.display = 'none';
}


function createZoom(x,y){	

	x = x - 45 < canvas.offsetLeft ? canvas.offsetLeft:x - 45;
	y = y - 45 < canvas.offsetTop ? canvas.offsetTop:y - 45;
	
	x = x + 90 < box.right ? x:box.right - 90;
	y = y + 90 < box.bottom ? y:box.bottom - 90;
	
	zoomdata.left = x;
	zoomdata.top = y;
	moveZoom(x,y);
}

function moveZoom(x,y){

	zoom.style.left = x + "px";
	zoom.style.top = y + "px";
	showCanvas();
	showSquare();
	copy();
}

function showCanvas(){
	copyimg.style.display = "inline";
}

function hideCanvas(){
	copyimg.style.display = "none";
}

canvas.onmouseover = function(e){
	var x = e.clientX,
		y = e.clientY;
	createZoom(x,y);
}

window.onmousemove = function(e){
	var x = e.clientX,
		y = e.clientY;
	if(x >= canvas.offsetLeft && x <= canvas.offsetLeft + canvas.width && y >= canvas.offsetTop && y <= canvas.offsetTop + canvas.height){
		createZoom(x,y);
	}else{
		hideZoom();
		hideCanvas();
	}
}