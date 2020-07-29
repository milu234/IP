class Snake {

  constructor() {
    this.len = 1;
    this.body = [];
    this.body[0] = createVector(floor(w/2),floor(h/2));  //To keep track of the x and y
    this.xdir = 1;  //variables to keep track of the snake
    this.ydir = 0;

  }

  
  //using the set direction Function
  
  setDir(x,y){
    this.xdir = x;
    this.ydir = y;
  }
  
  
  
  update() {
    
    let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x  += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
    
//     this.body[0].x += this.xdir;
//     this.body[0].y += this.ydir;
    
  }
  

  show() {
    for(let i = 0 ; i < this.body.length ; i++){
      noStroke();
    fill(0,255,0);
    
    rect(this.body[i].x, this.body[i].y, 1, 1);
    
    }
  }
  
  endGame(){
    
    let x = this.body[this.body.length-1].x;
    let y= this.body[this.body.length-1].y;
    
    if(x > w-1 || x < 0 || y > h-1 || y < 0){
  return true;
}    

    
    
    for(let i = 0 ; i < this.body.length-1 ; i++){
      let part = this.body[i];
      if(part.x == x && part.y == y){
        return true;
      }
    }
    return false;
    
  }
  
  
  eat(pos){
    let x = this.body[this.body.length-1].x;
    let y= this.body[this.body.length-1].y;
    
    if(x == pos.x && y == pos.y){
      this.grow();
      return true;
    }
    return false;
      
    
  }
  
  
  grow (){
    let head = this.body[this.body.length-1].copy();
    this.len++;
    this.body.push(head);
  }

}