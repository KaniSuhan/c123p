var noseX=0;
var noseY=0;
var leftWristX=0;
var rightWristX=0;
var diff=0;
function setup() { 
    video = createCapture(VIDEO);
     video.size(550, 500); 
     canvas = createCanvas(550, 550); 
     canvas.position(560,150);
      poseNet = ml5.poseNet(video, modelLoaded); 
     poseNet.on('pose', gotPoses);
     } 
function modelLoaded() {
          console.log('PoseNet Is Initialized!');
         }
function gotPoses(results) { 
    if(results.length > 0) { 
                 console.log(results);
                 noseX=results[0].pose.nose.x;
                 noseY=results[0].pose.nose.y;
                 leftWristX=results[0].pose.leftWrist.x;
                rightWristX=results[0].pose.rightWrist.x;
                diff=floor(leftWristX-rightWristX);  
                       
             }
            }
function draw() { 
                background('#969A97');
        fill("#FF8C00");
        document.getElementById("square_side").innerHTML="Font size of text will be = " + diff +"px";
        textSize(diff);
        text("kani",50,400);
}

