var mario;
var platformGroup; 
var marioAnimation; var groundAnimation; var wallAnimation; var obstacleAnimation; 
var gameState = PLAY
var PLAY=1;
var WIN =2;
var LOSE=0;

function preload() {
marioAnimation=loadAnimation("image/Capture1.png","image/Capture3.png","image/Capture4.png");
groundAnimation=loadAnimation("image/ground.png");
wallAnimation=loadAnimation("image/wall.png");
obstacleAnimation=loadAnimation("image/obstacle1.png");
flagAnimation=loadAnimation("image/Flag.png");
}

function setup() {
  createCanvas(displayWidth,688);
  var distanceX = 0; 
 var gap = 60 ; 
  
  mario= new player();
  platformGroup = createGroup();

  for (var i=0; i<6; i++ ){
    platform1 = new platform(distanceX);
    platformGroup.add(platform1.spt);
   distanceX = distanceX + platform1.width+gap ; 
  } 
flag=createSprite(distanceX,height-300);
flag.addAnimation("flag",flagAnimation);
flag.scale=0.3;


}

function draw() {

  background('skyblue');  
  translate(-mario.spt.x+width/2,0);

  if(gameState == PLAY){
    mario.applygravity(); 
  mario.spt.collide(platformGroup);
  if(keyDown("Left"))
  {
    mario.moveLeft();
  }

  if(keyDown("Right"))
  {
    mario.moveRight();
  }
  if(keyDown("Up"))
  {
    mario.jump();
  }
  }
  if(gameState == LOSE) {
  
  }
  if(gameState == WIN) {

  }
  
  
  drawSprites();

}

