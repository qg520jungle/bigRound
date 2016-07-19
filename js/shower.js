$(function(){
	
	var cvn = document.getElementById('shower')
	var ctx = cvn.getContext('2d');
	function drawSky(){
		ctx.beginPath();
		moveTo(0,0);
		var lg=ctx.createLinearGradient(0,0,0,400);
		lg.addColorStop(0,'#040f20');
		lg.addColorStop(0.3,'#0f1a31');
		lg.addColorStop(0.5,'#192643');
		lg.addColorStop(0.6,'#2d3d51');
		lg.addColorStop(0.7,'#445864');
		lg.addColorStop(0.8,'#667271');
		lg.addColorStop(1,'#7e9ca5');
		ctx.fillStyle = lg
		ctx.fillRect(0,0,600,400);
		ctx.fill();
		ctx.closePath();
	}
	//初始化山峰
	var marr=theMountainArr();
	function drawMountain(){
		ctx.beginPath();
		ctx.strokeStyle = '#09f';
		ctx.fillStyle = '#1e140a';
		var x=marr[0].x,y=marr[0].y;
		// console.log(marr)
		// console.log(x);
		// console.log(y);
		var tx,ty;
		ctx.moveTo(x,y);
		
		for(var i=1;i<marr.length;i++){
			tx=marr[i].x;
			ty=marr[i].y;
			x=marr[i-1].x;
			y=marr[i-1].y;
			ctx.quadraticCurveTo(x+(tx-x)*1/3,y+(-ty+y)*2/3,tx,ty);
			
		}
		ctx.lineTo(600,400);
		ctx.lineTo(0,400);
		ctx.fill();
		ctx.closePath();
  		//ctx.stroke();
	}
	function theMountainArr(){
		var arr=[],x=0,y=400*(Math.random()*(0.3)+0.6),t={x:x,y:y},tx,ty;
		
		arr.push(t);

		for(var i=0;x<600;i++){
			tx=xRandomMountain(x);
			//t.x=tx;
			ty=yRandomMountain(y);
			//t.y=ty;

			var t={x:tx,y:ty}
			arr.push(t);
			//console.log(y)
			//ctx.quadraticCurveTo(x+(tx-x)*1/3,y+(-ty+y)*2/3,tx,ty);
			x=tx;
			y=ty;
		}
		return arr
	}
	function xRandomMountain(x){
		var n=0;
		n=Random(1,10);
		if(x>0&&n<=1){
			return x-10
		}else{
			return x+10
		}
	}
	function yRandomMountain(y){
		var n=0;
		n=Random(1,10);
		//console.log(n)
		if(y>(400*0.6)&&n<5){
			return y-5
		}else if(y<(400*0.9)&&n>6){
			return y+5
		}else if(n>=5&&n<=6){
			return y
		}
		else if(y<(400*0.6)){
			return y+5
		}
		else{
			return y-5
		}
	}
	function Random(_from,_to){
		var r=0;
		r=Math.floor(Math.random()*(_to-_from+1)+_from);
		return r
	}
	//画一个星星，位置 x,y，半径 可变 从1到4
	var ar=1,br=3;
	function drawStar(x,y,r){
		if(r==0){
			ctx.beginPath();
			ctx.strokeStyle = '#09f';
			ctx.fillStyle = '#f6fff9';
			if(ar<3&&br==3){
				ar++;
				ctx.arc(x, y, ar, 0, 2*Math.PI, true);
			}else if(br>1&&ar==3){
				br--;
				ctx.arc(x, y, br, 0, 2*Math.PI, true);
			}
			if(br==1&&ar==3){
				ar=1;br=3;
			}
			ctx.fill();
			ctx.closePath();
		}else{
			ctx.beginPath();
			ctx.strokeStyle = '#09f';
			ctx.fillStyle = '#f6fff9';
			ctx.arc(x, y, r, 0, 2*Math.PI, true);
			ctx.fill();
			ctx.closePath();
		}
	}
	//画所有的星星，100个，半径都是1 范围0,0 ,600,400*0.6//90  600,400*0.9
	var stars=100;
	var sarr=starStation(stars);
	var act=[10,20,30,40,50];
	function arrHas(a,arr){
		//console.log(arr)
		for(var i=0;i<arr.length;i++){
			if(arr[i]==a){
				return true
			}
		}
		return false
	}
	function drawAllStar(stars,arr){
		var x,y;
				///console.log(arr)
		for(var i=0;i<stars;i++){
			x=sarr[i].x;
			y=sarr[i].y;
			if(arrHas(i,arr)){
				drawStar(x,y,0)
			}else{
				drawStar(x,y,1)
			}
		}
	}
	//星星位置的数组
	function starStation(n){
		var arr=[],x,y,t={x:x,y:y};
		var main=n*0.9;
		var secondary=n*0.1;
		for(var i=0;i<main;i++){
			x=Random(1,600);
			y=Random(1,400*0.6);
			var t={x:x,y:y};
			arr.push(t)
		}
		for(var i=0;i<secondary;i++){
			x=Random(1,600);
			y=Random(400*0.6,400*0.9);
			var t={x:x,y:y};
			arr.push(t)
		}
		return arr
	}
	var deg=0
	function draw(){
		console.log(deg++);
		ctx.clearRect(0, 0, 600, 400); 
		drawSky();
		//console.log(act);
		drawAllStar(stars,act);
		drawMountain();
		//drawStar(40,40,10)
	}

	drawSky();
	//console.log(act);
	drawAllStar(stars,act);

	drawMountain();
	/*drawStar(40,40,1);
	drawStar(80,40,2);
	drawStar(120,40,3);
	drawStar(40,80,4);*/
	var go = setInterval(draw,150);
});