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
			x:300,
			y:0,
			vx:0,
			vy:0,
			m:5,
			a:0,
			g:2,
			type:'ball',
			color:'#ba5616',
			actColor:'#ccc',
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
	 	switch(i){
	 		case 0:
	 		dline.vx=0;
	 		dline.vy=-20;
	 		break;
	 		
	 	}
	 	arr.push(dline)
	 }
	//console.log(arr);
	//画小球
	function drawBall(arr,t){
		for(var i=0;i<arr.length;i++){
			var b=arr[i]
			//console.log(b)
			if(b.act){
				ctx.beginPath();
				ctx.moveTo(b.x,b.y);
				ctx.fillStyle = b.color;
				ctx.strokeStyle = b.actColor;
				ctx.lineWidth = b.weight;
				ctx.arc(b.x, b.y, b.r, 0, 2*Math.PI, true);
				ctx.arc(350, 139.6, b.r, 0, 2*Math.PI, true);
				ctx.stroke();
				ctx.fill();
				ctx.closePath();
			}
			runBall(b,t);
			
		}
	}
	var xg=0;
	//小球运动
	function runBall(b,t){
		
		var temp=b.vy
		b.x=b.x+b.vx+b.a/2;
		b.y=b.y+b.vy+b.g/2;
		b.vx=b.vx+b.a;
		b.vy=b.vy+b.g;
		if(b.y>=370){
			b.vy=b.vy*(-1)*0.5;
			b.y=370;
		}
		if((temp*b.vy<=0)){
			
			// if(b.y>=370){
			// 	b.vy=0;
			// }
			xg++
			if(xg==4){
				console.log('x:'+b.x+'; y:'+b.y+'; deg:'+deg);
			}
			 
		}

		if(b.vy==0){
			console.log(true)
		}
			
	}
	//运行
	var deg=0;
	function draw(){
		ctx.clearRect(0,0,600,400)
		drawBackground();
		drawBall(arr,deg);
		//console.log(deg)
		deg++
	}
	draw();
	var go = setInterval(draw,50);
});