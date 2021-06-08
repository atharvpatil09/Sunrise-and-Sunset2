const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backGroundImg;

var bg ;
var hour;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add

    if(backGroundImg){
        background(backGroundImg);
        strokeWeight(4);
        stroke("black");
        textSize(100);
        fill("white");
      }

    Engine.update(engine);

    // write code to display time in correct format here

    if(hour>=12){
        text("Time : "+ hour  + "AM",180,200);

    } else if(hour==0){

        text("Time : 12 AM",180,200);

    }else{

        text("Time : "+ hour  + "PM",180,200);

      }

}

async function getBackgroundImg(){

    // write code to fetch time from API

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format

    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;

    // write code slice the datetime
    hour = datetime.slice(11,16);
    console.log(hour);

    // add conditions to change the background images from sunrise to sunset
    if(hour >= 04 && hour <= 06){
        bg = "sunrise1.png";    
      } else if(hour >= 06 && hour <= 07){
        bg = "sunrise2.png"; 
      } else if(hour >= 07 && hour <= 10){
        bg = "sunrise3.png";
      } else if(hour >= 10 && hour <= 12){
        bg = "sunrise4.png";
      } else if(hour >= 12 && hour <= 14){
        bg = "sunrise5.png";
      } else if(hour >= 14 && hour <= 15){
        bg = "sunrise6.png";
      } else if(hour >= 15 && hour <= 17){
        bg = "sunset7.png";
      } else if(hour >= 17 && hour <= 18){
        bg = "sunset8.png";
      } else if(hour >= 18 && hour <= 20){
        bg = "sunset9.png";
      } else if(hour >= 20 && hour <= 21){
        bg = "sunset10.png";
      } else if(hour >= 21 && hour <= 23){
        bg = "sunset11.png";
      } else{
        bg = "sunset12.png";
      }

    //load the image in backgroundImg variable here
  
    backGroundImg = loadImage(bg);


}
