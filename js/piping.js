$(function(){
	var cvn = document.getElementById('piping')
	var ctx = cvn.getContext('2d');
	var bgc='#d6dde7'
	//画布背景
	function drawBackground(){
		ctx.beginPath();
		ctx.fillStyle = bgc;
		ctx.fillRect(0,0,600,400);
		ctx.fill();
		ctx.closePath();
	}
	//定义小球
	var dline=ball();
	function ball(){
		return {
			x:200,
			y:200,
			vx:250,
			vy:200,
			a:225,
			g:175,
			type:'ball',
			color:'#efefef',
			actColor:'#ccc',
			tcolor:'#339977',
			actTColor:'#997733',
			r:4,
			weight:1,
			act:true
		}
	}
	console.log(dline);
	//小球集合
	var arr=[],n=1
	 for(var i=0;i<n;i++){
	 	var dline=ball();
	 	dline.x=dline.x-i;
	 	arr.push(dline)
	 }
	console.log(arr);
	//运行
	var deg=0;
	function draw(){
		ctx.clearRect(0,0,600,400)
		drawBackground();

		console.log(deg++)
	}
	draw();
	var go = setInterval(draw,50);
});