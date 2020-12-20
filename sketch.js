const Engine = Matter.Engine
const World  = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var box1, box2, ground

var engine, world, object

function preload() {
  bg = loadImage("sprites/bg.png")
}
  
function setup() {
  createCanvas(1200,600);
  engine = Engine.create()
  world = engine.world
  box1 = new Box(700,320,70,70, "#cfb997","white",1)
  box2 = new Box(920,320,70,70,"#cfb997","white",1)
  box3 = new Box(700,240,70,70, "#cfb997","white",1)
  box4 = new Box(920,240,70,70,"#cfb997","white",1)
  box5 = new Box(810,100,70,70, "#cfb997","white",1)
  ground = new Ground(600,height,width,20)
  platform = new Ground(150,490,300,200)
  pig1 = new Pig(810,220)
  pig2 = new Pig(810,350)
  log1 = new Log(810,260,PI/2,300, "#91672c","white",1)
  log2 = new Log(810,180,PI/2,300,"#91672c","white",1)
  log3 = new Log(760,110,PI/7,150, "#91672c","white",1)
  log4 = new Log(870,110,-PI/7,150,"#91672c","white",1)
  bird = new Bird(200,200)
  sling = new SlingShot(bird.body,{x:200,y:200})
  
}


function draw() {
  background(bg); 
  Engine.update(engine)

  console.log(box1, box2)

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  ground.display()
  pig1.display()
  pig2.display()
  log1.display()
  log2.display()
  log3.display()
  log4.display()
  bird.display()
  platform.display()
  sling.display()
 
}

function mouseDragged() {
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
  sling.fly()
}