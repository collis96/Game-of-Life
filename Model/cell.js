class Cell {
  constructor(x,y,alive){
    this.x = x;
    this.y = y;
    this.state = alive;
  }

  getX(){
    return this.x;
  }

  getY(){
    return this.y;
  }

  setState(state){
    alive = state;
  }

  getState(){
    return this.alive;
  }
}
