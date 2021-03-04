var canvas;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var pathImg;
var players, player1, player2, player3, player4;
var hp1_img, hp2_img, hp3_img, hp4_img;
var cave1, cave2, cave3, cave4;
var quest1,quest1Img;

function preload() {

  hp1_img = loadImage("hp1.png");
  hp2_img = loadImage("hp2.png");
  hp3_img = loadImage("hp3.png");
  hp4_img = loadImage("hp4.png");
  pathImg = loadImage("path.png")

}



function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  cave1 = createSprite(150, displayHeight/y, 100, 100);
  cave2 = createSprite(250, displayHeight/y, 100, 100);
  cave3 = createSprite(350, displayHeight/y, 100, 100);
  cave4 = createSprite(450, displayHeight/y, 100, 100);
  quest1 = createSprite(x,y,w,h);
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }

  if(cave1.isTouching(player1)){
    quest1.visible = true; 
    }
    
  if(gameState === 1){
    clear();
    game.play();
  }
}
