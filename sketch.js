
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var wall_1;
var wall_2;
var world;
var engine;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_optons = 
  {
    restitution:0.3 , isStatic:false , density:1.2
  };

	//Create the Bodies Here.
    ball = Bodies.circle(200,100,20,ball_optons);
    World.add(world,ball);

	  ground = new Ground (width/2 , 670 , width , 20);
    World.add(world,ground);

    wall_1 = new Ground (1100 , 600 , 20 , 120);
    World.add(world,wall_1);

    wall_2 = new Ground (1300 , 600 , 20 , 120);
    World.add(world,wall_2);

    ellipseMode(RADIUS); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  wall_1.display();
  wall_2.display();

  ellipse(ball.position.x,ball.position.y,20 ,20);

  if (keyCode===UP_ARROW)
  {
    Matter.Body.applyForce(ball , ball.position , {x:5 , y:-5});
  }

  drawSprites();
 
}



