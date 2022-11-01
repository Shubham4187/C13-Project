var garden,rabbit;
var gardenImage,rabbitImage;
var appleImage,apple;
var orangeLeafImage,orangeLeaf;
var redLeafImage, redLeaf;

function preload(){
  gardenImage = loadImage("garden.png");
  rabbitImage = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  orangeLeafImage = loadImage("orangeLeaf.png");
  redLeafImage = loadImage("redImage.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImage);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImage);
}


function draw() {
  background(0);
  
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  createapple()
  createorangeLeaf()
  createredLeaf()
  drawSprites();
    
  }

  
  function createapple(){
   if (frameCount % 80 == 0){
  apple =createSprite(random(50,350),40,10,10);
  apple.addImage(appleImage);
  apple.scale = 0.05;
  apple.velocityY = 3;
  }
  }
  
 function createorangeLeaf(){
    if (frameCount % 80 == 0){
orangeLeaf=createSprite(random(50,350),40,10,10);
  orangeLeaf.addImage(orangeLeafImage);
  orangeLeaf.scale = 0.06;
  orangeLeaf.velocityY = 3;
    }
 }
  
   function createredLeaf(){
    if (frameCount % 80 == 0){
redLeaf=createSprite(random(50,350),40,10,10);
  redLeaf.addImage(redLeafImage);
  redLeaf.scale = 0.05;
  redLeaf.velocityY = 3;
    }
  
}