const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine;
var world;

function preload()
{
	
}

function setup(){
createCanvas(1200,800);
engine = Engine.create();
world = engine.world

polygon = new Polygon(200,200);
ground = new Ground(600,780,1200,20);
stand1 = new Ground(500,700,300,10);
stand2 = new Ground(900,500,300,10)
box1 = new Box(400,400);
box2 = new Box(460,400);
box3 = new Box(520,400);
box4 = new Box(580,400);
box5 = new Box(430,300);
box6 = new Box(490,300);
box7 = new Box(550,300);
box8 = new Box(460,200);
box9 = new Box(520,200);
box10 = new Box(490,100);

box1b = new Box(800,400);
box2b = new Box(860,400);
box3b = new Box(920,400);
box4b = new Box(830,300);
box5b = new Box(890,300);
box6b = new Box(860,200);



}

function draw(){
background("grey");
Engine.update(engine)

polygon.display();
ground.display();
stand1.display();
stand2.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box1b.display();
box2b.display();
box3b.display();
box4b.display();
box5b.display();
box6b.display();



}

