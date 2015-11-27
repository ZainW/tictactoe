// var player1 = true;
// if (player1){
// 	//place X
// }
// else {
// 	//place O
// }
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var mouseX, mouseY;
// c.addEventListener("mouseUp", mouseUp, false);
$(document).on("ready", function(){
	function drawgrid(){
		ctx.beginPath();
		ctx.moveTo(0,250);
		ctx.lineTo(750,250);
		ctx.moveTo(0,500);
		ctx.lineTo(750,500);
		ctx.moveTo(250,0);
		ctx.lineTo(250,750);
		ctx.moveTo(500,0);
		ctx.lineTo(500,750);
		ctx.stroke();
	}
	function drawX(x,y){
		ctx.beginPath();
    
    ctx.moveTo(x - 50, y - 50);
    ctx.lineTo(x + 50, y + 50);
    ctx.stroke();

    ctx.moveTo(x + 50, y - 50);
    ctx.lineTo(x - 50, y + 50);
    ctx.stroke();

	}
	drawgrid();
	$("#myCanvas").mouseup(function(e){
		 mouseX =  e.offsetX;
		 mouseY = e.offsetY ;
		drawX(mouseX,mouseY);
	});
	// //test
	// drawX(100,100);






});

