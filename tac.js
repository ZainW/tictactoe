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
// var player1Spots = [];
// var player2Spots = [];
// var wins = [7, 56, 448, 73, 146, 292, 273, 84]
// var winarr = [1,2,4,8,16,32,64,256];
var board = [[],[],[]]; 

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
	
	// function whichSquare(x,y){
	// 	if (x < 250) {
	// 		if (y < 250){
				
	// 		}
	// 		else if (y < 500){

	// 		}
	// 		else if (y < 750){

	// 		}
	// 	}
	// 	else if (x < 500){

	// 	}
	// 	if (x < 500) {
	// 		if (y < 250){
				
	// 		}
	// 		else if (y < 500){

	// 		}
	// 		else if (y < 750){

	// 		}
	// 	}
	// 	else if (x < 500){
			
	// 	}
	// 	if (x < 750) {
	// 		if (y < 250){
				
	// 		}
	// 		else if (y < 500){

	// 		}
	// 		else if (y < 750){

	// 		}
	// 	}
	// 	else if (x < 500){
			
	// 	}
	// }
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
	function genBoard(){
		for(var i = 0; i < 3; i++){

		}
	}
	function isWinnertest(){
		for (var i = 0; i < wins.length; i += 1) {
        if ((wins[i] & score) === wins[i]) {
            return true;
        }
    }
    return false;
	}
	// function isWinner(){
	// 	for(var i = 0; i<3;i++){

	// 	}
	// }

	// 
	$("#myCanvas").mouseup(function(e){
		mouseX =  e.offsetX;
		mouseY = e.offsetY ;
		var drawsquare = whatSquare(mouseX,mouseY);
		var x = ((drawsquare[0] -1) * 250) + 125;
		var y = ((drawsquare[1]-1) * 250) + 125;
		if (player1){
      console.log(drawsquare);
      console.log(drawsquare[0]);
      console.log(drawsquare[1]);

			board[drawsquare[0]-1][drawsquare[1]-1] = 'X';
			//player1Spots.push(drawsquare);
			drawX(x,y);
		}
		else{
			board[drawsquare[0]-1] [drawsquare[1]-1] = 'O';
			//player2Spots.push(drawsquare);
			drawO(x,y);
		}
		
		// console.log(player1Spots);
		// console.log(player2Spots);
		player1 = !player1;
		console.log(board);
	});
	// functions
	drawgrid();
});

