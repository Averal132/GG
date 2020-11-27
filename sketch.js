var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3
var body1,body2,body3


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1=createSprite(300,610,20,100);
	box1.shapeColor="red"

	box2=createSprite(400,635,200,20);
	box2.shapeColor="red"
	box3=createSprite(460,610,20,100);
	box3.shapeColor="red"

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	body1=Bodies.rectangle(320,610,20,100,{isStatic:true});
	World.add(world,body1)
4
	body2=Bodies.rectangle(400,660,200,20,{isStatic:true});
	World.add(world,body2)

	body3=Bodies.rectangle(480,610,20,100,{isStatic:true});
	World.add(world,body3)


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) { 
		Matter.Body.setStatic(packageBody,false); 
	}
}



