var expect = require('chai').expect;
var Game = require('./game');
var Player = require('./player');
var board = require('./board');
// var counter = require('./counter');


describe('Players', function(){
  it('should have a name, a position and a points tally', function(){
    var player1 = new Player('Stuart');
    expect(player1.name).to.equal('Stuart');
    expect(player1.position).to.equal(0);
    expect(player1.points).to.equal(0);
  });
  it('should be able to roll the dice and retun a result between 1 and 6', function(){
    var player1 = new Player('Stuart');
    player1.dice();
    expect(diceNumber).to.be.within(1,6);
  });
  it('should be able to join an existing instance of a game and be given a token', function(){
    var player1 = new Player('Stuart');
    var game1 = new Game(player1, board);
    var player2 = new Player('Gary');
    game1.addPlayer(player2);
    expect(game1.players.length).to.equal(2);
    expect(player2.counter).to.equal('yellow');
  });
  it('should be able to move along the board relative to their dice roll', function(){
    var player1 = new Player('Stuart');
    var game1 = new Game(player1, board);
    var player2 = new Player('Gary');
    var player3 = new Player('Beth');
    var player4 = new Player('Nick');
    game1.addPlayer(player2);
    game1.addPlayer(player3);
    game1.addPlayer(player4);
    game1.enoughPlayers();
    // player1.dice();
    // console.log("Dice: " + diceNumber);
    player1.move();
  });
});

describe('Game', function(){
  it('should be able to be created', function(){
    var player1 = new Player('Stuart');
    var game1 = new Game(player1, board);
    expect(game1).to.exist;
    expect(player1.counter).to.equal('red');
  });
  it('should check there are at least four players', function(){
    var player1 = new Player('Stuart');
    var game1 = new Game(player1, board);
    var player2 = new Player('Gary');
    var player3 = new Player('Beth');
    var player4 = new Player('Nick');
    game1.addPlayer(player2);
    game1.addPlayer(player3);
    game1.addPlayer(player4);
    game1.enoughPlayers();
    expect(game1.enoughPlayers()).to.be.true;
  })
});