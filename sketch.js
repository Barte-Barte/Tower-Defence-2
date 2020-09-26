const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
 
}

function setup() {
  engine  = Engine.create();
  world = engine.world;

  createCanvas(900,400);
  ground = new Ground();
  stand1 = new Stand(380,300,270,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(280,275,30,40);  
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  block8 = new Block(490,275,30,40);
  //level two
  block9 = new Block(310,235,30,40);
  block10 = new Block(340,235,30,40);
  block11 = new Block(370,235,30,40);
  block12 = new Block(400,235,30,40);
  block13 = new Block(430,235,30,40);
  block14 = new Block(460,235,30,40);
  //level three
  block15 = new Block(340,195,30,40);
  block16 = new Block(370,195,30,40);
  block17 = new Block(400,195,30,40);
  block18 = new Block(430,195,30,40);
  //level four
  block19 = new Block(370,155,30,40);
  block20 = new Block(400,155,30,40);
  //level five
  block21 = new Block(385,115,30,40);

  //set two 
  //level one
  blocksa = new Block(640,175,30,40);
  blocksb = new Block(670,175,30,40);
  blocksc = new Block(700,175,30,40);
  blocksd = new Block(730,175,30,40);
  blockse = new Block(760,175,30,40);
  //level two
  blocksf = new Block(670,135,30,40);
  blocksg = new Block(700,135,30,40);
  blocksh = new Block(730,135,30,40);
  //level three
  blocksi = new Block(700,95,30,40);

  //ball  with slings
  ball = Bodies.circle(200,200,20,{'density':1.5});
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:200,y:200});

}

function draw() {
  background(50);  
  Engine.update(engine);
  createEdgeSprites();
  strokeWeight(2)
  stroke("white")
  textSize(25);
  fill("black");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",40,340);

  
 // ground.display();
  strokeWeight(2);
  stroke(15);
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(0);
  fill("Black");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  fill("green");
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  fill("white");  
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  fill("blue");  
  block19.display();
  block20.display();
  fill(73,207,193);
  block21.display();

  fill("grey");
  blocksa.display();
  blocksb.display();
  blocksc.display();
  blocksd.display();
  blockse.display();
  fill("purple");
  blocksf.display();
  blocksg.display();
  blocksh.display();
  fill("white")
  blocksi.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x-50,ball.position.y-80,40,40);

  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}


function keyPressed()

{
if(keyCode===32)
{
  Matter.Body.setPosition(this.ball,{x:300,y:300});
  slingShot.attach(this.ball);
  

}


}

