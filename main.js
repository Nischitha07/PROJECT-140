rightWristX = 0;
rightWristY = 0;

function preload()
{
    
}

function setup()
{
canvas = createCanvas(700,543);
canvas.center();
video = createCapture(VIDEO);
video.size(700,545);
video.position(280,1300);
poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}
function draw()
{   
    fill("red");
    stroke("red");
    circle(rightWristX, rightWristY, 30 ,30);
  
}
function modelLoaded()
{
    console.log("modelLoaded");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
      console.log(results);
      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
      console.log("rightWristX = " +  rightWristX + "rightWristY = " +  rightWristY );
      
    }
}