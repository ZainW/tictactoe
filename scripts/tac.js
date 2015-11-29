
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


var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
$(document).on("ready", function(){
  var clickcount = 0;
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
  var circleDefaults = {
        circlePos: {
            x: 338,
            y: 130
        },
        radius: 120,
        counterClockwise: false,
        startAngle: Math.PI / 2,
        endAngle: Math.PI * 2,
        currentPercent: 0,
        endPercent: 100

    }
	function drawO(x,y, current){
    // //internet
    

    //         ctx.beginPath();
    //         ctx.arc(x, y, circleDefaults.radius, -(circleDefaults.startAngle), ((circleDefaults.endAngle) * current) - circleDefaults.startAngle, circleDefaults.counterClockwise);
    //         ctx.lineWidth = 1.0;

    //         ctx.strokeStyle = "#000"
    //         ctx.stroke();
    //         ctx.closePath();

    //         circleDefaults.currentPercent++;
    //         if (circleDefaults.currentPercent < circleDefaults.endPercent) {
    //             requestAnimationFrame(function () {
    //                 drawO(circleDefaults.currentPercent / 100);
    //             });
    //         }
    //         // else{
    //         //     AnimateLine();
    //         // }


    // //mine
		ctx.beginPath();
		ctx.arc(x,y,50,0,Math.PI * 2)
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
	function isWinnertest(){
		for (var i = 0; i < wins.length; i += 1) {
        if ((wins[i] & score) === wins[i]) {
            return true;
        }
    }
    return false;
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
		// var x = ((drawsquare[0] -1 ) * 250) + 125;
		// var y = ((drawsquare[1] -1 ) * 250) + 125;
    var x = ((drawsquare[0] -1 ) * 250);
    var y = ((drawsquare[1] -1 ) * 250);
    if (clickcount == 9){
      $("#win").fadeIn(3000);
      $("#win h3").text("It's a Draw :s")
    }
		if (player1 == true){
			board[drawsquare[0]-1][drawsquare[1]-1] = 'X';
      
        ctx.drawImage(img1,x,y,250,250);
      
			//drawX(x,y);
			if(isWinnerX() == true){
				$("#win").fadeIn(3000);
      	$("#win h3").text("Vader wins! Refresh to play again.")
			}
		}
		else {
			board[drawsquare[0]-1] [drawsquare[1]-1] = 'O';
			//drawO(x,y);
      ctx.drawImage(img2,x,y,250,250);
			if (isWinnerO() == true) {
        $("#win").fadeIn(3000);
        $("#win h3").text("Luke wins! Refresh to play again.");
			};
		}
    

		player1 = !player1;
	});
	// functions
	drawgrid();
});

