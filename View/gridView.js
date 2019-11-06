//A class to draw the grid

class GridView {

  constructor(columns, rows, height, width){
    this.columns = columns;
    this.rows = rows;
    this.height = height;
    this.width = width;
  }

  show(){
    let x = width / this.columns;
    let y = height / this.rows;

    for(let i=0;i<width; i=i+x){ //draw columns
      stroke(200);
      line(i, 0, i, width);
    }

    for(let j=0;j<height;j=j+y){ //draw rows
      stroke(200);
      line(0, j, width, j);
    }
  }
}
