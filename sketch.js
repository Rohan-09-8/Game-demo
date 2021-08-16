function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
 player=createSprite(0,0,50,50)
}

function draw() {
  background("black");
  player.x=mouseX 
  player.y=mouseY
  if(frameCount%10==0){
    objgen()
  }
   
  drawSprites()
}

function objgen(){
  obj=createSprite(100,100,20,20)
  obj.shapeColor=("deepskyblue")
  obj.velocityX=random(-4,4)
  obj.velocityY=random(-4,4)
}