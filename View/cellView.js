class CellView {

  constructor(cell){
    this.cell = cell;
  }

  show(){
    let x = cell.getX();
    let y = cell.getY();
    square(x+10, y+10, 20);
    stroke(100);
  }

  hide(){
    stroke(0);
  }

}
