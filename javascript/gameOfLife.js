nextGeneration = function(board) {
	var newBoard = new Array();
        var row = board.length;
        while(row--){
                 newBoard.push(new Array());
        }
	for (var row=0; row<board.length; row++) {
          for (var column=0; column<board[row].length; column++) {
            var neighbors = countNeighbors(row, column, board);
            if (board[row][column]==1 && neighbors == 2){
                 newBoard[row][column] = 1;
            } else if (neighbors == 3){
                 newBoard[row][column] = 1;
            }else{
                newBoard[row][column] = 0;
            } 
          }
        }
	return newBoard;
}

countNeighbors = function (row, column, board){
    var neighbors = 0;
    var count = 0;
    var minRow = Math.max(row - 1, 0);
    var maxRow = Math.min(row + 1, board.length - 1);

    var minColumn = Math.max( column - 1, 0);
    var maxColumn = Math.min( column + 1, board[row].length -1);

    for (var rowNeighbor=minRow; rowNeighbor<=maxRow; rowNeighbor++) {
      for (var columnNeighbor=minColumn; columnNeighbor<=maxColumn; columnNeighbor++) {
    	  
          if (columnNeighbor != column || rowNeighbor != row){ 
          	neighbors = neighbors + board[rowNeighbor][columnNeighbor];
          }
      }
    }
   return neighbors;
}


