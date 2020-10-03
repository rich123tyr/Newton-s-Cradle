
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob,bob1,bob2,bob3,bob4;
var roof;
var constraintchain;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob = new Bob(300,550);
	bob1 = new Bob(330,550);
	bob2 = new Bob(360,550);
	bob3 = new Bob(390,550)
	bob4 = new Bob(420,550);

	 
	 constraintchain = new Chain(bob.body, {x:250,y:300});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  Engine.update(engine);



  bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();

  constraintchain.display();
  
  drawSprites();
 
}

function keyPressed(){

	if (keyCode == UP_ARROW){
		Body.applyForce(bob.body,bob.body.position,{x:-50,y:-50});
	}
}



