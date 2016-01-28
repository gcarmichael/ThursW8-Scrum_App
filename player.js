function Player(name){
  this.name = name;
  this.position = 0;
  this.points = 0;
  this.counter = 'none';
}

Player.prototype = {
  dice: function(){
    diceNumber = Math.floor(Math.random() * 6) + 1;
    console.log('Dice number: ' + diceNumber)
    return diceNumber;
  },
  move: function(){
    this.dice();
    console.log("Dice: " + diceNumber);
    console.log(this.position);
    this.position += diceNumber;
    console.log("Move: " + this.position);
  }
}
module.exports = Player;