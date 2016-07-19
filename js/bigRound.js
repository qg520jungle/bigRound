$(function(){
	$('.j-round').animate({
		"transform": "rotate(7200deg)"
	}, 1500)
	
	var cvn = document.getElementById('bigRound')
	var ctx = cvn.getContext('2d');
	function drawSan(x,y,r,startDeg,endDeg,color){
		ctx.beginPath();
		ctx.moveTo(200,200);
		ctx.arc(x,y,r,startDeg,endDeg);
		//ctx.stroke();
		ctx.fillStyle = color;
		ctx.fill();
		ctx.closePath();
	}
	var deg=0;
	function drawRound(){
		ctx.clearRect(0, 0, 400, 400); 
		drawBtn(0,0)
		drawSan(200,200,199,0+deg,Math.PI/3+deg,"green");
		drawSan(200,200,199,Math.PI/3+deg,2*Math.PI/3+deg,"yellow");
		drawSan(200,200,199,2*Math.PI/3+deg,3*Math.PI/3+deg,"red");
		drawSan(200,200,199,3*Math.PI/3+deg,4*Math.PI/3+deg,"orange");
		drawSan(200,200,199,4*Math.PI/3+deg,5*Math.PI/3+deg,"blue");
		drawSan(200,200,199,5*Math.PI/3+deg,6*Math.PI/3+deg,"#5588ee");
		deg+=0.1
	}
	var te=1;
	var rounding=false;
	cvn.onmousedown = function(e){
		e.preventDefault()
		 
            point = windowToCanvas( e.clientX , e.clientY )
            console.log( point.x , point.y )
            if(btnClick( point.x , point.y )&&!rounding){
            	
            		go=setInterval(drawRound, 10);
            		rounding=true;
            		setTimeout(function(){
            			clearInterval(go);
            			rounding=false
            		},2000)
            	
				
            }
	}
	function drawBtn(x,y){
		ctx.beginPath();
		ctx.fillStyle = '#ccc';
		ctx.fillRect(x,y,50,20);
		//ctx.stroke();
		ctx.fill();

		ctx.closePath();

		ctx.beginPath();
		ctx.fillStyle='#fff';
		ctx.fillText('停',5,13);
		ctx.fill();
		ctx.closePath();
	}
	function btnClick(x,y){
		if(x<50&&y<20){
			return true
		}else{
			return false
		}
		
	}
	
	drawRound();
	function windowToCanvas( x , y ){
        var bbox = cvn.getBoundingClientRect()
        return {x:x-bbox.left , y:y-bbox.top}
    }
	//旋转到指定位置
});