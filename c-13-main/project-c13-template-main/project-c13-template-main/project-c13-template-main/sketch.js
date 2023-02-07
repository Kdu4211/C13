var garden,rabbit,apple,folha,laranja;
var gardenImg,rabbitImg,appleImg,redImg,orangeImg;
var select_sprites
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
  // mover o fundo
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //criar sprite do coelho
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  
  gerar()
  

  rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}
function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
}
function createOrange(){
  laranja = createSprite(random(50,350),40,10,10);
  laranja.addImage(orangeImg);
  laranja.scale = 0.08;
  laranja.velocityY =3;
  laranja.lifetime =150;
}
function createRed(){
  folha = createSprite(random(50,350),40,10,10);
  folha.addImage(redImg);
  folha.scale=0.08;
  folha.velocityY =3;
  folha.lifetime =150;

}
function gerar(){
 var select_sprites = Math.round(random(1,3));

 if(frameCount % 80 == 0) {
    if(select_sprites == 1){
      createApples()

    } else if(select_sprites == 2){
      createOrange()

    } else{
      createRed()
    }
  
 
  }
 
}