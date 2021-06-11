function preload(){
  bg1= loadImage("snow1.jpg")
  bg2=loadImage("snow2.jpg")
  bg3=loadImage("snow3.jpg")
  bg4=loadImage("snow4.webp")
  bg5=loadImage("snow5.webp")
 }
 function setup() {
   createCanvas(displayWidth,displayHeight);
   boy=createSprite(width-100,height-200);
   boy.addImage(bg5)
   boy.scale=0.5
   for(var i=1;i<=20;i++){
     decor=createSprite(Math.round(random(0,width)),Math.round(random(0,height/2)))
     decor.addImage(bg2)
     decor.scale=0.2
   }
   snow=createSprite(width/2,height/2)
   snow.addImage(bg4)
   snow.scale=0.8
   edges=createEdgeSprites()
   
 }
 
 function draw() {
   background(bg1); 
   if(keyDown(LEFT_ARROW)){
     boy.x-=10
   } 
   boy.collide(edges[0])
   drawSprites();
 }