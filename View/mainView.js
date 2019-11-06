class MainView {
  constructor(model){
    this.model = model;
  }

  renderCells(array){
    for(let i=0; i<model.columns; i++){ //rendering of initial 2D Array of cells
      for(let j=0; j<model.columns; j++){
        let cell = array[i][j];
        console.log(cell);
        let x = cell.getX();
        let y = cell.getY();
        if(cell.state==1){
          fill(20)
          rect(x,y,model.resolution,model.resolution);
        } else {
          fill(255)
          rect(x,y,model.resolution,model.resolution);
        }

      }
    }
  }

  renderGrid(){
    let x = model.width / model.columns;
    let y = model.height / model.rows;

    for(let i=0;i<model.width; i=i+x){ //draw columns
      stroke(200);
      line(i, 0, i, width);
    }

    for(let j=0;j<model.height;j=j+y){ //draw rows
      stroke(200);
      line(0, j, width, j);
    }

  }
}
