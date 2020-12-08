const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var walking, walkingAnimation;
var engine, world;
var drops = [];
var rand;
var thunderCreatedFrame=0;
var maxDrops=100;

    
    
function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
    walkingAnimation = loadAnimation( "walking_1.png","walking_2.png","walking_3.png", "walking_4.png", "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png"
    );
}

function setup(){
createCanvas(500,800) 
engine = Engine.create() 
world = engine.world
umbrellaman = new umbrella(200,610);
if(frameCount % 80 === 0){

    for(var i=0; i<maxDrops; i++){
        drops.push(new rainDrops(random(0,400), random(0,400)));
    }
}
}

function draw(){
Engine.update(engine) 
background("black")  
rand = Math.round(random(1,4));

if(frameCount % 40 === 0){
    thunderCreatedFrame=frameCount;
    thunder = createSprite(random(10,370), random(10,30), 10, 10);
    switch(rand){
        case 1: thunder.addImage(thunder1);
        break;
        case 2: thunder.addImage(thunder2);
        break; 
        case 3: thunder.addImage(thunder3);
        break;
        case 4: thunder.addImage(thunder4);
        break;
        default: break;
    }
     thunder.scale = random(0.3,0.6)
    
}

if(thunderCreatedFrame + 10 ===frameCount && thunder){
    thunder.destroy();
}

umbrellaman.display();

//displaying rain drops
for(var i = 0; i<maxDrops; i++){
    drops[i].showDrop();
    drops[i].updateY()
    
}

drawSprites();

}
