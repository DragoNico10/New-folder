const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball
var ground
var lastBallState
var jump

function preload(){

}

function setup()
{
  frameRate(80);
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(width/2, height, width*4, 5, {isStatic:true, friction:1})
  World.add(world, ground)
  ball = Bodies.circle(200, 200, 20,{friction:1, restitution:0})
  World.add(world, ball)
}

function draw() 
{
  jump-=1
  background(30)
  Engine.update(engine)
  if(keyDown(RIGHT)){
    let position = ball.position
    Body.setPosition(ball, {
      x: position.x+5,
      y: position.y
    })
  }
  if(keyDown(LEFT)){
    let position = ball.position
    Body.setPosition(ball, {
      x: position.x-5,
      y: position.y
    })
  }
  if(keyDown(32)&&ball.velocity.y<0.5&&jump<0){
    Body.applyForce(ball,{
      x:0,
      y:0
    },{
      x:0,
      y:-0.1
    }
    )
  }
  if(keyDown(32)){
    jump=10
  }

  push()
  ellipseMode(CENTER)
  ellipse(ball.position.x, ball.position.y, 20, 20)
  pop()
}