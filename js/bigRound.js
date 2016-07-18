$(function(){
	$('.j-round').animate({
		"transform": "rotate(7200deg)"
	}, 1500)

	var cvn = document.getElementById('bigRound')
	var ctx = cvn.getContext('2d');

	// ctx.beginPath();
	ctx.beginPath();
	ctx.moveTo(200,200);
	ctx.arc(200,200,199,0,2*Math.PI/6);
	//ctx.stroke();
	ctx.fillStyle="green";
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(200,200);
	ctx.arc(200,200,199,2*Math.PI/6,2*Math.PI/3);
	//ctx.stroke();
	ctx.fillStyle="yellow";
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(200,200);
	ctx.arc(200,200,199,2*Math.PI/3,Math.PI);
	//ctx.stroke();
	ctx.fillStyle="red";
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(200,200);
	ctx.arc(200,200,199,Math.PI,4*Math.PI/3);
	//ctx.stroke();
	ctx.fillStyle="orange";
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(200,200);
	ctx.arc(200,200,199,4*Math.PI/3,5*Math.PI/3);
	//ctx.stroke();
	ctx.fillStyle="blue";
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(200,200);
	ctx.arc(200,200,199,5*Math.PI/3,6*Math.PI/3);
	//ctx.stroke();
	ctx.fillStyle="#5588ee";
	ctx.fill();
	ctx.closePath();

	function drawSan(x,y,r,startDeg,endDeg){
		ctx.beginPath();
		ctx.moveTo(200,200);
		ctx.arc(x,y,r,startDeg,endDeg);
		//ctx.stroke();
		ctx.fillStyle="#5588ee";
		ctx.fill();
		ctx.closePath();
	}
});