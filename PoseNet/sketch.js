let video;
let poseNet;
let noseX= 0;
let noseY= 0;

let eyeX1;
let eyeY1;
let eyeX2;
let eyeY2;





function setup() {
  createCanvas(640, 480);
  video  = createCapture(VIDEO);
  video.hide()
  
  
  
  
   poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose',gotPoses);
}

function gotPoses(poses){
  // console.log(poses);
  if(poses.length > 0){
 noseX = poses[0].pose.keypoints[0].position.x;
   noseY = poses[0].pose.keypoints[0].position.y;
    
    
  eyeX1 = poses[0].pose.keypoints[1].position.x;
    eyeY1 = poses[0].pose.keypoints[1].position.y;
    
    eyeX2 = poses[0].pose.keypoints[2].position.x;
    eyeY2 = poses[0].pose.keypoints[2].position.y;
    
    }
  
  
  
}



function modelLoaded(){
  console.log('model Ready');
}

function draw() {
  image(video, 0 ,0);
  
  fill(255, 0, 0);
  ellipse(noseX, noseY, 50);
  
  
   eye(eyeX1, eyeY1, 80, 1);
  eye(eyeX2, eyeY2, 80, -1);
  
  
  
}




function eye(x, y, size, n) {
	let angle = frameCount * 0.2;
	
	fill(255);
	noStroke();
	ellipse(x, y, size, size);
	
	fill(56);
	noStroke();
	ellipse(x+cos(angle*n)*size/5, y+sin(angle*n)*size/5, size/2, size/2);
}