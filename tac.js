// var player1 = true;
// if (player1){
// 	//place X
// }
// else {
// 	//place O
// }
$(document).on("ready", function(){
	function drawgrid(){
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
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
	drawgrid();






});

