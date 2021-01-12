

var database;
var gameStatefreezer;
var playercountfreezer;


function setup(){
  createCanvas(400,400);
 database = firebase.database();
 aditya=new Game ();
 aditya.upadteGmaeState(1)
aditya.gatGameState()
console.log(gameStatefreezer)
player=new Player()
player.upadtePlayerCount(10);
player.gatPlayercount()
console.log(playercountfreezer)

}


function draw(){


}
