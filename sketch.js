const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var hexImg,polygon;

function preload() {
    hexImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
    var options={
        density:0.8
    }

    polygon= Bodies.circle(50,200,20,options);
    World.add(world,polygon);


    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(400, 300, 300, 50);
    block8 = new Box(330,235,30,40);
   
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12= new Box(450,235,30,40);
    block13 = new Box(360,195,30,40);
    block14 =new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);
    block16 = new Box(390,155,30,40);
   
    var pointB={
        x:100,
        y:100
    }

   sling = new SlingShot(this.polygon,pointB);

}

function draw(){
    background(220);
    rectMode(CENTER);
   
    Engine.update(engine);
   
    
    ground.display();
    sling.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    imageMode(CENTER);
    image(hexImg,polygon.position.x,polygon.position.y,40,40);
    
    platform1.display();
    
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    sling.fly();
}