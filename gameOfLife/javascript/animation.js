var context;
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

var board = init();
animate (board, new Date());

function animate(board, time) {
    //console.log("start animation " + time);
    drawCells(board, context);
    var now = new Date();
    if ((now - time) > 1000){
    	board = nextGeneration (board);
        console.log("draw new board");
    	requestAnimFrame(function () {animate (board, now)});  
    } else {
       requestAnimFrame(function () {animate (board, time)}); 
    }
}

function init() {
    var canvas = document.getElementById('tutorial');
    context = canvas.getContext( '2d' );
    console.log('canvas created');
    var board = [
	[0,1,0,0,0,0,0,0],
	[1,1,0,0,0,0,0,0],
	[0,1,0,0,0,0,0,0],
        [1,0,0,0,1,0,0,0],
        [1,1,1,0,0,0,0,0],
	[0,0,1,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0]
	];
    console.log('board created');
    return board;
}

function drawCells (board, context){
    var length = 50;
    for (var row=0; row<board.length; row++) {
          for (var col=0; col<board[row].length; col++) {
               if (board[row][col]==1){
                   context.fillStyle = "rgb(200,0,0)";
                   context.fillRect(length*col, length*row,length,length);
               }
               else {
                   context.fillStyle = "rgb(255,255,255)";
                   context.fillRect(length*col,length*row,length,length);
               }
          }
     } 
}
