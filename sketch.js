
var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,200);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(100,100,50,10);
  car.shapeColor="white";

  wall=createSprite(1000,100,50,height/2);
  wall.shapeColor=color(80,80,80);

  car.velocityX=speed;
}

function draw() {
  background("black");  
 
 if(wall.x-car.x<(car.width+wall.width)/2){

car.velocityX=0;
var deformation=0.5*speed*weight*speed/22500;

if(deformation>180){

car.shapeColor=color(255,0,0);

}
if(deformation<180 && deformation>100){

  car.shapeColor=color(230,230,0);

}
if(deformation<100){

  car.shapeColor=color(0,225,0);

}
 }

  drawSprites();
}