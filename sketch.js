
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(100,250,200,40);
    ground = new Ground(600,height,1200,30); 
    stone = new Stone(810,300,90,90,PI/2);
	rubber = new Rubber(710,240,70,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  hammer.display();
  ground.display();
  stone.display();
  rubber.display();

  drawSprites();
 
}



