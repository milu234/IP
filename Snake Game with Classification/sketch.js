let snake;
let rez = 20;

let food;
let w;
let h;
let score  = 0;



let video;
let classifier;
let label = 'waiting........';
let flipVideo;


function preload(){
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/RRGwSHh_C/model.json');
}




function setup() {
  createCanvas(640, 480);
  
  
  
  //set the video
  video = createCapture(VIDEO);
  video.hide();
  
  // flipVideo = ml5.flipImage(video);
  
  
  //classify
  
  classifyVideo();
  
  
  
  w = floor(width / rez);
  h = floor(height / rez); 
  
  
  frameRate(5);
  snake = new Snake();
  foodLocation();
}



function classifyVideo(){
// flipVideo = ml5.flipImage(video);
  classifier.classify(video,gotResults);
}



function gotResults(error, results){

  if (error){
    console.error(error);
    return;
  }
  label = results[0].label;
  controlSnake();
  classifyVideo();
  
  
}




function controlSnake(){
  if(label === 'Left'){
  snake.setDir(-1, 0);
  } else if(label === 'Right'){
  snake.setDir(1, 0);
  } else if(label === 'Down'){
  snake.setDir(0, 1);
  } else if(label === 'Up'){  
  snake.setDir(0, -1);
  }
}



function foodLocation(){
  let x = floor(random(w));
  let y = floor(random(h));
  
  food  = createVector(x,y);
  }



function draw() {
  
  background(220);
  
  image(video,0 ,0);
  fill(255);
  textSize(32);
  text(label,10,50);
  scale(rez);
  fill(0);
  textSize(1);
  text('Score : ' + score , 2 , 5);
  
  if(snake.eat(food)){
  foodLocation();
    score += 10;
  }
  snake.update();
  snake.show();
  
  
  if(snake.endGame()){
    print('EndGame');
    background(255, 0 , 0);
    noLoop();
    
  fill(0);
  textSize(1);
    text('Your Score : ' + score,2 ,5);
  }
  
  noStroke();
  fill(255, 0,0);
  rect(food.x , food.y ,1, 1);
}