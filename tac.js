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
var player1 = true;
var player1Spots = [];
var player2Spots = [];
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
	function drawO(x,y){
		ctx.beginPath();
		ctx.arc(x,y,50,0,Math.PI * 2)
		ctx.stroke();
	}
	drawgrid();
	function whichSquare(x,y){
		if (x < 250) {
			if (y < 250){
				
			}
			else if (y < 500){

			}
			else if (y < 750){

			}
		}
		else if (x < 500){

		}
		if (x < 500) {
			if (y < 250){
				
			}
			else if (y < 500){

			}
			else if (y < 750){

			}
		}
		else if (x < 500){
			
		}
		if (x < 750) {
			if (y < 250){
				
			}
			else if (y < 500){

			}
			else if (y < 750){

			}
		}
		else if (x < 500){
			
		}
	}
	function whatSquare(x,y){
		var square=[];
		for(var xcom = 250; xcom <= 750; xcom += 250){
			for(var ycom = 250; ycom <= 750; ycom += 250){
				if (x < xcom && y < ycom){
					square = [xcom/250, ycom/250]
					return square;
				}
			}
		}
	}
	// 
	$("#myCanvas").mouseup(function(e){
		mouseX =  e.offsetX;
		mouseY = e.offsetY ;
		var drawsquare = whatSquare(mouseX,mouseY);
		var x = ((drawsquare[0] -1) * 250) + 125;
		var y = ((drawsquare[1]-1) * 250) + 125;
		if (player1){
			player1Spots.push(drawsquare);
			drawX(x,y);
		}
		else{
			player2Spots.push(drawsquare);
			drawO(x,y);
		}
		
		// console.log(player1Spots);
		// console.log(player2Spots);
		player1 = !player1;
	});
	// //test
	// drawX(100,100);






});

