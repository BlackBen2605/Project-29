const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var g1;
var s1,s2;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,
b21,b22,b23,b24,b25;

var chain;
var hex1;
var ball;
var hexImg;

function preload() {

  hexImg = loadImage("hexagon.png");
}



function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
 
  g1 = new Ground(400,399,1750,50);
  s1 = new Ground(355,300,215,10);
  s2 = new Ground(600,200,150,10);
  b1 = new Box(265,255,30,40);
  b2 = new Box(295,255,30,40);
  b3 = new Box(325,255,30,40);
  b4 = new Box(355,255,30,40);
  b5 = new Box(385,255,30,40);
  b6 = new Box(415,255,30,40);
  b7 = new Box(445,255,30,40);
  b8 = new Box(295,215,30,40);
  b9 = new Box(325,215,30,40);
  b10 = new Box(355,215,30,40);
  b11 = new Box(385,215,30,40);
  b12 = new Box(415,215,30,40);
  b13 = new Box(325,165,30,40);
  b14 = new Box(355,165,30,40);
  b15 = new Box(385,165,30,40);
  b16 = new Box(355,125,30,40);
  b17 = new Box(540,160,30,40);
  b18 = new Box(570,160,30,40);
  b19 = new Box(600,160,30,40);
  b20 = new Box(630,160,30,40);
  b21 = new Box(660,160,30,40);
  b22 = new Box(570,120,30,40);
  b23 = new Box(600,120,30,40);
  b24 = new Box(630,120,30,40);
  b25 = new Box(600,80,30,40);

  hex = new Hex(55, 190, 30, 30);

  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  chain = new SlingShot(this.ball,{x:100, y:200});

}

function draw() {

  background("black"); 
  Engine.update(engine); 
  
  push();
  stroke("blue");
  strokeWeight(2);
  fill("red")
  textSize(20);
  text("Drag the hexagonal stone and release it to launch it towards the tower blocks and destroy them", 30, 50);
  pop();

  push();
  stroke("blue");
  strokeWeight(2.5);
  fill("red");
  textSize(25);
  text("All the best", 800, 300);
  pop();

  g1.display();
  s1.display();
  s2.display();

  fill("blue");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();

  fill("yellow");
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();

  fill("orange");
  b13.display();
  b14.display();
  b15.display();

  fill("pink");
  b16.display();

  fill("red");
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();

  fill("green");
  b22.display();
  b23.display();
  b24.display();

  fill("purple")
  b25.display();

  imageMode(CENTER);
  image(hexImg, ball.position.x, ball.position.y, 50, 45);

  chain.display();

  drawSprites();
}

function mouseDragged() {

  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});

}


function mouseReleased() {

  chain.fly();

}


function keyPressed() {

	if(keyCode === 32) {
		Matter.Body.setPosition(hex.body, {x:100, y:200})
		chain.attach(hex.body);
  }
  
}