var shooter,bullet,background0,z1,z2,z3,z4,z5,z6,score
var zombieGroup
var bulletGroup
var shooterImage,bulletImage,z1img,z2img,z3img,z4img,z5img,z6img
var backgroundimg
function preload(){
  backgroundimg = loadImage("background.png")
   bulletImage = loadImage("bullet.png ")
shooterImage = loadImage("gun1.png")
   z1img = loadImage("z1.png")
  z2img = loadImage("z2.png")
  z3img = loadImage("z3.png")
  z4img = loadImage("z4.png")
  z5img = loadImage("z5.png")
  z6img = loadImage("z6.png")
  
}



function setup() {
  createCanvas(1200,1200);
  background0= createSprite(0,0,1200,1200)
  background0.addImage(backgroundimg)
  background0.scale=2.5;
  shooter=createSprite(850,220,20,50)
  shooter.addImage(shooterImage)
  shooter.scale=0.5;
  score=0;
  z1=new Group()
  z2=new Group()
   z3=new Group()
   z4=new Group()
   z5=new Group()
   z6=new Group()
  bulletGroup=new Group()
  
}

function draw() {
  background0.velocityX=-3
  if (background0.x<0){
    background0.x=background0.width/2
  }
  shooter.y=World.mouseY
  if(keyDown("UP_ARROW")){
    createBullet()
  }
    var select_Zombies=Math.round(random(1,6))
    if(World.frameCount%100==0){
      if(select_Zombies==1){
        z01()
      }
      else if(select_Zombies==2){
        z02()
      }
       else if(select_Zombies==3){
        z03()
      }
       else if(select_Zombies==4){
        z04()
      }
       else if(select_Zombies==5){
        z05()
      }
      else{
        z06()
      }
      
      
    }
if(bulletGroup.isTouching(z1)){
  z1.destroyEach();
  bulletGroup.destroyEach();
  
  score=score+1
  
} 
  if(bulletGroup.isTouching(z2)){
  z2.destroyEach();
  bulletGroup.destroyEach();
  
  score=score+1
  
} 
  if(bulletGroup.isTouching(z3)){
  z3.destroyEach();
  bulletGroup.destroyEach();
  
  score=score+1
  
} 
  if(bulletGroup.isTouching(z3)){
  z4.destroyEach();
  bulletGroup.destroyEach();
  
  score=score+1

} 
  if(bulletGroup.isTouching(z5)){
  z5.destroyEach();
  bulletGroup.destroyEach();
  
  score=score+1
  
}
  if(bulletGroup.isTouching(z6)){
  z6.destroyEach();
  bulletGroup.destroyEach();
  
  score=score+1
  
} 
  
 drawSprites() ;
 fontSize=200
  text("kill"+score,500,50)
  

}
function z01(){
  var zombie1=createSprite(0,Math.round(random(20,370)),10,10)
  zombie1.addImage(z1img)
  zombie1.velocityX=4
  zombie1.liftime=150
  zombie1.scale=0.1;
  z1.add(zombie1) 
}
function z02(){
  var zombie2=createSprite(0,Math.round(random(20,370)),10,10)
  zombie2.addImage(z2img)
  zombie2.velocityX=4
  zombie2.liftime=150
  zombie2.scale=0.1;
  z2.add(zombie2) 
}
function z03(){
  var zombie3=createSprite(0,Math.round(random(20,370)),10,10)
  zombie3.addImage(z1img)
  zombie3.velocityX=4
  zombie3.liftime=150
  zombie3.scale=0.1;
  z3.add(zombie3) 
}
function z04(){
  var zombie4=createSprite(0,Math.round(random(20,370)),10,10)
  zombie4.addImage(z4img)
  zombie4.velocityX=4
  zombie4.liftime=150
  zombie4.scale=0.1;
  z4.add(zombie4) 
}
function z05(){
  var zombie5=createSprite(0,Math.round(random(20,370)),10,10)
  zombie5.addImage(z1img)
  zombie5.velocityX=4
  zombie5.liftime=150
  zombie5.scale=0.1;
  z5.add(zombie5)
}
function z06(){
  var zombie6=createSprite(0,Math.round(random(20,370)),10,10)
  zombie6.addImage(z1img)
  zombie6.velocityX=4
  zombie6.liftime=150
  zombie6.scale=0.1;
  z6.add(zombie6) 
}
function createBullet(){
   var bullet=createSprite(800,100,60,10)
   bullet.addImage(bulletImage)
  bullet.x=360
  bullet.y=shooter.y
  bullet.velocityX=-3;
  bullet.lifetime=100;
  bullet.scale =0.1;
  bulletGroup.add(bullet)
   
}