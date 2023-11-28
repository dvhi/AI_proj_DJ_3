song_1 = "";
song_2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model Loaded");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].leftWrist.x;
        leftWristY = results[0].leftWrist.y;
        rightWristX = results[0].rightWrist.x;
        rightWristY = results[0].rightWrist.y;

        console.log("leftWristX = " + leftWristX);
        console.log("leftWristY = " + leftWristY);

        console.log("rightWristX = " + rightWristX);
        console.log("rightWristY = " + rightWristY);
    }
}

function draw()
{
    image(video, 0, 0, 600, 500);
}