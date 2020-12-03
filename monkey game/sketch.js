
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  

   monkey=createSprite(40,150,20,20);
   monkey.addAnimation("lolololo" ,monkey_running);
    monkey.scale=0.12
  
   ground=createSprite(40,190,1150,10);
 
  
}


function draw() {
createCanvas(600,210)
  background("pink")
 
  text("Survival time: "+ score, 300,50);
  score = score + Math.round(frameCount/70);
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;}
  
  monkey.velocityY = monkey.velocityY + 0.9
  
  monkey.collide(ground)
  
  spawnbananas();
  spawnobstacles();
  
 drawSprites(); 
}

function spawnbananas() {
 
  if (frameCount % 100 === 0) {
     banana = createSprite(600,100,40,10);
   banana.addImage(bananaImage);
    banana.scale = 0.1;
   banana.velocityX = -5;
    
    
    banana.lifetime = 200;
  }
}


function spawnobstacles() {
 
  if (frameCount % 70 === 0) {
     obstacle = createSprite(600,165,40,10);
   obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
   obstacle.velocityX = -5;
    
    
    obstacle.lifetime = 200;
  }
}




