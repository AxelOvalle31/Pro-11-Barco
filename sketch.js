var naves 
var naveImg;






function preload(){
naveImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
fondo = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
fondos = createSprite(200,200);
fondos.addImage(fondo);
fondos.scale= 0.3;
naves = createSprite(200,160,30,30);
naves.addAnimation("running",naveImg);
naves.scale = 0.3;
}

function draw() {
  background("blue");
  
 
  
  if(fondos.x < 0){
    fondos.x=fondos.width/2;
  }
  drawSprites();
}

