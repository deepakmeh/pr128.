leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

song1 = "music.mp3";
song2 = "music2.mp3";

function preload(){
    sound = loadSound("music.mp3");
    sound = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)

}

function draw(){
    image(video, 0, 0, 600, 450)
}

function modelLoaded(){
    console.log("PoseNet is initialized")
}

function gotPoses(results){
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY = " +leftWristY);
}