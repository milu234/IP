let snake;
let resolution = 20; // to move the pixel acc to speed;
let food;

function setup() {
   w = floor(640/resolution);
  h = floor(480/resolution);
  createCanvas(w*resolution, h*resolution);
  frameRate(10);
  snake = new Snake();
  foodLocation();
  score  = 0;
  

}


//function of randomizing food location
function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}


//function to write press keys

function keyPressed() {
	switch (keyCode){
		case LEFT_ARROW:
			console.log('pressed', keyCode)
			
			snake.setDir(-1, 0);
			break;
			

		case RIGHT_ARROW:
			console.log('pressed', keyCode)
			
			snake.setDir(1, 0);
			break;
			

		case DOWN_ARROW:
			console.log('pressed', keyCode)

			
			snake.setDir(0, 1)
			break;
			
		case UP_ARROW:
			console.log('pressed', keyCode)
			
			snake.setDir(0, -1)
			break;
			
		default:
			console.log('pressed', keyCode)
			break;
	}
}





function draw() {
  scale(resolution);
  background(220);
  
  if(snake.eat(food)){
    foodLocation();
    score += 10;
  }
  snake.update();
  snake.show();
  fill(0);
	textSize(1);
	text('Score: ' + score, w - 6, 3)
  
  if(snake.endGame()){
    print("End Game");
    background(255 , 0 , 0);
    textSize(3);
    
    text('Game Over', 7, 11)
    text('Your Score is ' + score, 9, 14)
    noLoop();    
    
    
  }
  
  

  noStroke();
  fill(255, 255, 0);
  rect(food.x , food.y, 1, 1);
}