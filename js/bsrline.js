$(function(){
	var cvn = document.getElementById('bsr')
	var ctx = cvn.getContext('2d');
	var bgc='#d6dde7'
	function drawBackground(){
		ctx.beginPath();
		ctx.fillStyle = bgc;
		ctx.fillRect(0,0,600,400);
		ctx.fill();
		ctx.closePath();
	}
	var dline={
		x1:200,
		y1:200,
		x2:250,
		y2:200,
		tx:225,
		ty:175,
		type:'dou',
		color:'#efefef',
		actColor:'#ccc',
		tcolor:'#339977',
		actTColor:'#997733',
		r:4,
		actr:6,
		weight:3,
		lineColor:'#333',
		actLineColor:'#aaa',
		act:false
	}
	function doubsrLine(dline){
		drawline(dline);
		drawAllbtn(dline);
		//ctx.beginPath();
	}
	function drawline(dline){
		if(dline.type=='dou'){
			ctx.beginPath();
			ctx.moveTo(dline.x1,dline.y1);
			console.log(dline)
			ctx.strokeStyle = dline.act?dline.actLineColor:dline.lineColor;
			ctx.lineWidth = dline.weight;
			ctx.quadraticCurveTo(dline.tx,dline.ty,dline.x2,dline.y2);
			ctx.stroke();
			ctx.closePath();
		}
	}
	function drawAllbtn(dline){
		drawbtn(dline.x1,dline.y1,dline.r,dline.lineColor,1,bgc);
		drawbtn(dline.x2,dline.y2,dline.r,dline.lineColor,1,bgc);
		drawbtn(dline.tx,dline.ty,dline.r,dline.tcolor,1,bgc);

	}
	function drawbtn(x,y,r,color,w,bgc){
		ctx.beginPath();
		ctx.strokeStyle = color;
		console.log()
		ctx.fillStyle = bgc;
		ctx.lineWidth = w;
		ctx.arc(x, y, r, 0, 2*Math.PI, true)
		ctx.stroke();
		ctx.fill();
		ctx.moveTo(x,y);
		ctx.arc(x, y, 0.5, 0, 2*Math.PI, true)
		ctx.stroke();
		ctx.closePath();
	}
	
	function btnMove(dline){
		
	}
	function windowToCanvas( x , y ){
        var bbox = cvn.getBoundingClientRect()
        return {x:x-bbox.left , y:y-bbox.top}
    }
    var go,moving=0;
		cvn.onmousedown = function(e){
		e.preventDefault()
		 
            point1 = windowToCanvas( e.clientX , e.clientY )
            console.log( point1.x , point1.y ,dline.x1,dline.y1)
            if(btnClick( point1.x , point1.y ,dline.x1,dline.y1)){
            	dline.act=true;
            	console.log(1)
            	draw();
        		//go=setInterval(draw, 1000);
        		moving = 'x1';
            		
            }else if(btnClick( point1.x , point1.y ,dline.x2,dline.y2)){
            	dline.act=true;
            	console.log(2)
            	draw();
        		//go=setInterval(draw, 1000);
        		moving = 'x2';
            		
            }else if(btnClick( point1.x , point1.y ,dline.tx,dline.ty)){
            	dline.act=true;
            	console.log(3)
            	draw();
        		//go=setInterval(draw, 1000);
        		moving = 't1';
            		
            }
		}
		cvn.onmouseup = function(e){
			e.preventDefault()
			dline.act=false;
			draw();
			//clearInterval(go);
			moving = 0;
		}
		cvn.onmousemove = function(e){
			e.preventDefault()
			if(dline.act&&moving=='x1'){
				point = windowToCanvas( e.clientX , e.clientY )
				dline.x1=point.x;
				dline.y1=point.y;
				draw();
				//clearInterval(go);
				moving = 'x1';
			}else if(dline.act&&moving=='x2'){
				point = windowToCanvas( e.clientX , e.clientY )
				dline.x2=point.x;
				dline.y2=point.y;
				draw();
				//clearInterval(go);
				moving = 'x2';
			}else if(dline.act&&moving=='t1'){
				point = windowToCanvas( e.clientX , e.clientY )
				dline.tx=point.x;
				dline.ty=point.y;
				draw();
				//clearInterval(go);
				moving = 't1';
			}
			
		}
	function btnClick(x,y,mx,my){
		if(x>(mx-3)&&x<(mx+3)&&y<(my+3)&&y>(my-3)){
			return true
		}else{
			return false
		}
		
	}
	function trbsrLine(){
		ctx.beginPath();
		/*ctx.moveTo(200,200);
		ctx.fillStyle = '#b75718';
		ctx.fillRect(0,0,600,400);
		ctx.fill();*/
		ctx.closePath();
	}
	var deg=0;
	function draw(){
		ctx.clearRect(0,0,600,400)
		drawBackground();
		doubsrLine(dline);
		//drawAllbtn(dline)
		//trbsrLine();
		console.log(deg++)
	}
	draw();
	//var go = setInterval(draw,50);
});