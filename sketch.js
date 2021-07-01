const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground1;
var Tree;
var boy;
var Stone;
var launchigForce=100;
var Launcher;
var Mango1;
var Mango2;
var Mango3;
var Mango4;
var Mango5;
function preload()
{
boy=loadImage("boy.png");
}
function setup() {
createCanvas(1300, 600);
engine = Engine.create();
world = engine.world;
ground1 = new Ground(width/2,600,width,20);
Tree=new tree(1050,590);
Stone=new stone(235,420,30);
Launcher = new launcher(Stone.body,{x:235, y:420});
Mango1= new mango(870,200,25);
Mango2= new mango(870,140,25);
Mango3= new mango(940,240,25);
Mango4= new mango(1000,100,25);
Mango5= new mango(1200,200,25);
Engine.run(engine); 
}
function draw() {
rectMode(CENTER);
background(255);
image(boy,200,340,200,300);
Tree.display()
Stone.display()
Mango1.display()
Mango2.display()
Mango3.display()
Mango4.display()
Mango5.display()
ground1.display()
Launcher.display()
detectcollision(Stone,Mango1);
detectcollision(Stone,Mango2);
detectcollision(Stone,Mango3);
detectcollision(Stone,Mango4);
detectcollision(Stone,Mango5);
}
function mouseDragged(){
Matter.Body.setPosition(Stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
Launcher.fly();
}
function mouseReleased(){
Launcher.fly();
}
function keyPressed(){
if(keyCode===32){
Launcher.attach(Stone.body);
}
function detectcollision(Lstone,Lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=Lmango.r+Lstone.r)
{
    Matter.Body.setStatic(Lmango.body,false);
}
}
}
