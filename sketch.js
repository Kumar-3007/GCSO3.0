var bullet
var wall
var speed
var weight
var thickness
var bulletRightEdge
var wallLeftEdge

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);

 thickness=random(22,83);

  bullet=createSprite(50,200,50,20);
  bullet.shapeColor=color(255,255,255);
  bullet.velocityX= speed;


  wall=createSprite(1200,200, thickness, height/2);
  wall.shapeColor= color(0,255,255);
  
 
}

function draw() {
  background(0,0,0);  
  drawSprites();
  


  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage= 0.5 * weight * speed * speed/(thickness *thickness *thickness);

    if(damage>10)
    {
       wall.shapeColor= color(255,0,0);
    }

    if(damage<10){

      wall.shapeColor= color(0,255,0);
    }
  }
}




function hascollided(lbullet,lwall){ 
 
  bullet.RightEdge= lbullet.x + lbullet.width;
  wall.LeftEdge=lwall;
  if(bullet.RightEdge>=wallLeftEdge)
  {
    return true;
  }
return false;
}