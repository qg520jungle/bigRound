$(function(){
	var cvn = document.getElementById('fire')
	var ctx = cvn.getContext('2d');

	function drawBackground(){
		ctx.beginPath();
		ctx.fillStyle = '#333';
		ctx.fillRect(0,0,600,400);
		ctx.fill();
		ctx.closePath();
	}
	function drawFire(){
		ctx.beginPath();
		ctx.moveTo(200,200);
		ctx.fillStyle = '#b75718';
		ctx.fillRect(0,0,600,400);
		ctx.fill();
		ctx.closePath();
	}
	var deg=0;
	function draw(){
		ctx.clearRect(0,0,600,400)
		drawBackground();
		drawFire()
		console.log(deg++)
	}
	draw();
	//var go = setInterval(draw,50);
});