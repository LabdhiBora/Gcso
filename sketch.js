var car , wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  line=createSprite(50,280,4000,10);
  line.shapeColor="white";
  car =createSprite(50,350,50,30);
  car.shapeColor="red";
  speed=random(180,280);
  weight=random(400,1500);
  
  car.velocityX=speed;

  car2=createSprite(50,220,50,30);
  line=createSprite(50,150,4000,10);
  line.shapeColor="white";
  car2.shapeColor="green";
  speed2=random(100,150);
  car2.velocityX=speed2;

  car3=createSprite(50,70,50,30);
  car3.shapeColor="yellow";
  speed3=random(10,100);
  car3.velocityX=speed3;

  wall=createSprite(1500,200,60,height);
}

function draw() {
  background(0);  
 

  drawSprites();
  car.collide(wall);
  car2.collide(wall);
  car3.collide(wall);

}