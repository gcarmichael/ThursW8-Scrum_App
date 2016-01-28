var Game = function(player1, board){
  this.players = [player1];
  this.board = board;
  this.counter = ['blue', 'green', 'yellow', 'red'];
  player1.counter = this.counter.pop();
  this.addPlayer = function(player){
    this.players.push(player);
    player.counter = this.counter.pop();
  }
  this.enoughPlayers = function(){
    if(this.players.length >= 4){
      return true;
    } else{
      return false;
    }
  }
}

module.exports = Game;