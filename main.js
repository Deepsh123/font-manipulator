leftWrist = 0;
rightWrist = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
      
        
    }
    leftWrist = results[0].pose.leftWrist.x;
    rightWrist = results[0].pose.rightWrist.x;
    difference = floor(leftWrist - rightWrist);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
function draw() {
    background('#969A97');
    
    fill('#C3B1E1')
    text('Deepshikha', 25, 200);
    textSize(difference);
}