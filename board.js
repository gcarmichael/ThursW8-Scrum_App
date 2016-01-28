var board = [];

var prefil = function(board){
  for(var i = 0; i < 65; i++){
    board.push(i);
  }
}

prefil(board);

module.exports = board;