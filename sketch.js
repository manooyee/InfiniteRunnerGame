var PLAY = 1;
var END = 0;
var gameState = PLAY;

var player;
var ground;
var obstacle1, obstacle2, obstacle3, obstacle4;
var obstacle1Group, obstacle2Group, obstacle3Group, obstacle4Group;

var score;

function preload(){

}

function setup() {
createCanvas(600,300);
 player = createSprite(100,250,12,12);

 ground = createSprite(300,259,600,7);

 obstacle1Group = createGroup();
 obstacle2Group = createGroup();
 obstacle3Group = createGroup();
 obstacle4Group = createGroup();

 score = 0;
}

function draw() {
 background("blue");
 fill(20);
 text("Score: "+ score, 500,50);

 if (gameState === PLAY){
 
 score = score + Math.round(getFrameRate()/60);
   
 var selectObstacles = Math.round(random(1,4));

 if (World.frameCount %80 === 0){
     if (selectObstacles == 1){
         Obstacle1();
     } else if (selectObstacles == 2){
         Obstacle2();
     } else if (selectObstacles == 3){
         Obstacle3();
     } else if (selectObstacles == 4){
         Obstacle4();
     }
 }

 player.collide(ground);

 if (keyDown("space") && player.y >= 100){
     player.velocityY = -12;
 }

 player.velocityY = player.velocityY + 1
 
}

 if (player.collide(obstacle1Group) || player.collide(obstacle2Group) || player.collide(obstacle3Group) || player.collide(obstacle4Group)){
    player.destroy();
    obstacle1Group.destroyEach();
    obstacle2Group.destroyEach();
    obstacle3Group.destroyEach();
    obstacle4Group.destroyEach();
    ground.destroy();

    gameState = END;
 }

 if (gameState === END){
    fill(40);
    text("YOU LOSE",250,150);
 }


 drawSprites();
}

function Obstacle1(){
 obstacle1 = createSprite(600,246,12,20);
 obstacle1.velocityX = -4;
 obstacle1Group.add(obstacle1);
}

function Obstacle2(){
 obstacle2 = createSprite(600,231,12,50);
 obstacle2.velocityX = -4;
 obstacle2Group.add(obstacle2);
}

function Obstacle3(){
 obstacle3 = createSprite(600,236,12,40);
 obstacle3.velocityX = -4; 
 obstacle3Group.add(obstacle3);
}

function Obstacle4(){
 obstacle4 = createSprite(600,241,12,30);
 obstacle4.velocityX = -4;
 obstacle4Group.add(obstacle4);
}
