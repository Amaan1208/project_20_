var cat,catImg;
var mouse,mouseImg;
var gardenImg;
var tom, tomImg1, tomImg2,tomImg3;
var jerry, jeryImg1,jrryImg2, jerryimg3;

function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    jerryImg1=loadImage("images/mouse1.png");
    tomImg1=loadImage("images/cat1.png");
    jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3=loadAnimation("images/cat4.png");
    jerryImg3=loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(400,400);
    //create tom and jerry sprites here
    jerry=createSprite(40,330);
    jerry.addImage(jerryImg1);
    jerry.scale=0.07;

    tom=createSprite(340,330);
    tom.addImage(tomImg1);
    tom.scale=0.08;
   

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<tom.width/2-jerry.width/2){
 tom.velocityX=0;
 tom.x=130;
 tom.y=330;
tom.addAnimation("cf",tomImg3);
tom.changeAnimation("cf");
jerry.addAnimation("mf",jerryImg3);
jerry.changeAnimation("mf");
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode ===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("walking",tomImg2);
    tom.changeAnimation("walking");
    jerry.addAnimation("teasing",jerryImg2);
    jerry.changeAnimation("teasing");

  }


}
