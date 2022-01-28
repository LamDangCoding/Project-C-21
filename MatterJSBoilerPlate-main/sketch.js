
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball
var groundObj
var leftSide
var rightSide
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(200,300,10,ball_options)
	World.add(world,ball)

	groundObj = new ground(width/2, 670, width,20)
	leftSide = new ground(1100,600,20,120)
	rightSide = new ground(800,600,20,120)

	rectMode(CENTER);
	ellipseMode(RADIUS)
	Engine.run(Engine);
}


function draw() {
  Engine.update(engine);
  background(0);

  if(keyDown("up")) {
		Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.1, y: 0.1})
  }
  
	ellipse(ball.position.x,ball.position.y,20)
	groundObj.show()
	leftSide.show()
	rightSide.show()
	console.log(ball.y)
  drawSprites();
 
}





