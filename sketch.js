
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var base,side1,side2

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	base=createSprite(width/2,650,200,10)
	base.shapeColor="red"

	side1=createSprite(300,600,10,110)
	side1.shapeColor="red"

	side2=createSprite(500,600,10,110)
	side2.shapeColor="red"

	
	var packageBody_options={
		isStatic: true,
		restitution:0.5
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 ,packageBody_options )
	World.add(world, packageBody);
	
	//Create a Ground

	var ground_options={
		isStatic:true
	} 
	ground = Bodies.rectangle(width/2, 650, width, 10 ,ground_options );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  packageSprite.collide(base);
  packageSprite.collide(side1);
  packageSprite.collide(side2);
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false)

	
  }
}




