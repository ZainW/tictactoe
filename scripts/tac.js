var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var mouseX, mouseY;
var player1 = true;
var board = [[],[],[]];
//images 
var img1 = new Image();
var img2 = new Image();
img1.src = 'icons/vader.png'
img2.src = 'icons/luke.png'

$(document).on("ready", function(){
  var clickcount = 0;
	function drawgrid(){
		ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";
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
	function isWinnerX(){
		for(var i = 0;i < 3; i++){
			if(board[i][0] == 'X' && board[i][1] == 'X' &&  board[i][2] == 'X'){
				return true;
			}
			if(board[0][i] == 'X' && board[1][i] == 'X' &&  board[2][i] == 'X'){
				return true;
			}
		}
		if (board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X'){
			return true;
		}
		if (board[2][0] == 'X' && board[1][1] == 'X' && board[0][2] == "X"){
			return true;
		}
		return false;
  }
	function isWinnerO(){
		for(var i = 0;i < 3; i++){
			if(board[i][0] == 'O' && board[i][1] == 'O' &&  board[i][2] == "O"){
				return true;
			}
			if(board[0][i] == 'O' && board[1][i] == 'O' &&  board[2][i] == "O"){
				return true;
			}
		}
		if (board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O'){
			return true;
		}
		if (board[2][0] == 'O' && board[1][1] == 'O' && board[0][2] == 'O'){
			return true;
		}
		return false;
	}
	$("#myCanvas").mouseup(function(e){
		mouseX =  e.offsetX;
		mouseY = e.offsetY ;
    
		var drawsquare = whatSquare(mouseX,mouseY);
    var x = ((drawsquare[0] -1 ) * 250);
    var y = ((drawsquare[1] -1 ) * 250);

		if (player1 == true){
			board[drawsquare[0]-1][drawsquare[1]-1] = 'X';
      
        ctx.drawImage(img1,x,y,249,249);
      
			if(isWinnerX() == true){
        alertify.alert("Vader defeated his own son :(, refresh to play again!");
			}
		}
		else {
			board[drawsquare[0]-1] [drawsquare[1]-1] = 'O';
      ctx.drawImage(img2,x,y,249,249);
			if (isWinnerO() == true) {
        alertify.alert("Luke has killed his father :(, refresh to play again");
			};
		}
    clickcount++;
    if (clickcount == 9 && isWinnerX() == false && isWinnerO() == false){
      alertify.alert("Luke and Vader are equally matched, refresh to try again!");
      
    }

		player1 = !player1;
	});
	// functions
	drawgrid();
});

