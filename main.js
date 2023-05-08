nose_x = 0;
nose_y = 0;
clown_nose="";


function preload(){
    clown_nose=loadImage("https://i.postimg.cc/YSnPnB2q/nariz-de-payaso-e1513858664991-1.png")
}

function setup(){
canvas=createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide()
poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose' , pose)
}

function draw(){
background("lightblue");
image(video, 0 , 0 , 300 , 300);
//fill("red");
//stroke(255, 0, 0);
//circle(nose_x, nose_y, 20);
image(clown_nose, nose_x-15, nose_y-15, 30, 30)
}

function take_snapshot(){
    save("filter_image.png");
}

function modelLoaded(){
    console.log("The model has been loaded");
}

function pose(results){
   if (results.length>0) {
    console.log(results)
    nose_x=results[0].pose.nose.x
    nose_y=results[0].pose.nose.y
    console.log("nose x = "+ nose_x)
    console.log("nose y = "+ nose_y)
   }
}