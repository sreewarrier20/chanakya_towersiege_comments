const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
// matter.js was not there in the list of files. I have added it here and alse linked in index.


// Moreover, in index, you have written,

/*<script src="libraries/p5.js"></script>
<script src="libraries/p5.dom.min.js"></script>
<script src="libraries/p5.sound.min.js"></script>
<script src="libraries/matter.js"></script>
<script src="libraries/p5.play.js"></script>
*/
 //There is no folder called libraries. so please remove that



 // no ground class created - <script src="Ground.js"></script> --create it
var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var gameState = "onSling"
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(450,380,900,10); // give x,y width, height in ground(inputs to create the ground)
  stand1 = new Ground(390,300,250,10); // stand is basically ground itself
  stand2 = new Ground(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40); // need to define the block class
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //top
  blocks9 = new Block(700,95,30,40);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(ball,{x:100,y:200});// if you are not creating a ball class, you can simply write ball. no need of this. This is used to refer an object in a class.
// please write the slingshot class.
}
function draw() {
  background(color(56,44,44)); // to get the color, we have to write color instruction
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
/*keyPressed()*/ // No need to call the keyPresses function- it is an event- it will be automatically called by the program
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}

function keyPressed(){
  if(keyCode == 32){
      slingShot.attach(ball);// we need to attach the ball object and not the image.
      gameState = "onSling";
  }
}

function mouseDragged(){
  Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});// this is not needed, since you didnt create the ball object using the class.And if you were using the class also, the format of writing is like: ball.body or ball.object(based on the variable name used to store your object in the class)
}
function mouseReleased(){
  slingShot.fly();
  // change the gamestate
  gameState="launch";
}