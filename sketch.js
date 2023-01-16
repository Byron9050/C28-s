var balas = [];
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
  bala = new Bomba(cannon.x,cannon.y);
  

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  
  Engine.update(engine);
  for (var i = 0; i < balas.length; i++)
  ground.display();
  
 
  cannon.display();
  tower.display();
  
  bala.display();

}

function keyReleased(){

  if (keyCode == DOWN_ARROW){

    bala.shoot();
    
    }

}

function keyPressed(){
if (keyCode == DOWN_ARROW){

  var bala = new Bomba(cannon.x,cannon.y);
  balas.push(bala);

}



}



