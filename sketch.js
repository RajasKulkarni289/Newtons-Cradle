var roof;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var bobD=40;
	roof=createSprite(400,100,500,60);
	roofbody=Bodies.rectangle(400,100,500,60,{isStatic:true});
	World.add(world,roofbody);
	bob1=new Ball(400,350,bobD);
	bob2=new Ball(450,350,bobD);
	bob3=new Ball(500,350,bobD);
	bob4=new Ball(550,350,bobD);
	bob5=new Ball(600,350,bobD);
	line1=new Line(bob1.body,roofbody,40-bobD*2,300);
	line2=new Line(bob2.body,roofbody,40-bobD*1,300);
	line3=new Line(bob3.body,roofbody,40,300);
	line4=new Line(bob4.body,roofbody,40+bobD*1,300);
	line5=new Line(bob5.body,roofbody,40+bobD*2,300);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  line1.display();
  line2.display();
  line3.display();
  line4.display();
  line5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}

