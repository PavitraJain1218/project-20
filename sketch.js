var garden
var cat,cat1,cat2,cat3,cat4
var mouse,mouse2,mouse3,mouse1,mouse4
function preload() {
    //load the images here
   garden=loadImage("images/garden.png")
    cat1=loadImage("images/cat1.png")
    mouse2=loadImage("images/mouse2.png")
    mouse1=loadImage("images/mouse1.png")
    mouse3=loadImage("images/mouse3.png")
    mouse4=loadImage("images/mouse4.png")
    catRunning=loadAnimation("images/cat2.png","images/cat3.png")
    cat4=loadImage("images/cat4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,700)
    cat.addImage("cat1",cat1)
    cat.scale=0.2
    mouse=createSprite(200,700)
    mouse.addImage("mouse2",mouse2)
    mouse.scale=0.2
   

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
   if(cat.x-mouse.x<(cat.width-mouse.width)/2){
       mouse.addImage("gift",mouse1)
       mouse.changeImage("gift")
       cat.addImage("happy",cat4)
       cat.changeImage("happy")
       cat.velocityX=0
       cat.x=300
   }
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    mouse.addImage("teasing",mouse3)
    mouse.changeImage("teasing")
    cat.velocityX=-6
    cat.addAnimation("running", catRunning)
    cat.changeAnimation("running")

}
  //For moving and changing animation write code here


}
