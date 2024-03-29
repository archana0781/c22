
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var top_wall,ball,btn1;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
 var ball_options={
   restituition:0.95,
 }
  btn1=createImg('up.png')
  btn1.position(20,30);
  btn1.size(50,50);
  btn1.mouseClicked(vForce);
  ground =new Ground(200,390,400,20);
 
 top_wall = new Ground(50,200,30,20);
  top_wall1 = new Ground(150,200,30,20);
  top_wall2 = new Ground(250,200,30,20);
  top_wall3 = new Ground(350,200,30,20);
   ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  
ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  top_wall.show();
  top_wall1.show();
  top_wall2.show();
  top_wall3.show();
}
  function vForce() { 
    Matter.Body.applyForce(ball,{x:10,y:10},{x:0,y:-0.05});
   }

