const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,300,60,60);
    box2 = new Box(800,300,60,60);

    box3 = new Box(600,200,60,60);
    box4 = new Box(800,200,60,60);

    box5 = new Box(700,100,60,60);

    pig1 = new Pig(700,300);

    pig2 = new Pig(700,200);
    log1 = new Log(700,256,260,PI/2);
    log2 = new Log(700,150,260,PI/2);

    log3  = new Log(650,80,120,PI/7);
    log4  = new Log(730,80,120,-PI/7);
    ground = new Ground(600,height,1200,50)

    bird = new Bird(200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();

 
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
   log4.display();
    ground.display();
    bird.display();
}