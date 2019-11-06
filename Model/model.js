class Model {

  constructor(columns, rows, resolution){
    this.columns = columns;
    this.rows = rows;
    this.resolution = resolution;
  }

  create2DArray(columns, rows) {
  	let array = new Array(columns);
  	for( let i=0 ; i<array.length; i++){
  		array[i] = new Array(rows);
  	}
    return array;
  }

  createGrid(){
    let grid = this.create2DArray(columns, rows);
    for(let i=0; i<columns; i++){
  		for(let j=0; j<rows; j++){
        let x = i * resolution;
        let y = j * resolution;
  			grid[i][j] = new Cell(x, y, floor(random(2)));
        console.log(grid[i][j]);
  		}
  	}
    return grid;
  }

  // logic(){
  // }

  getGrid(){
    return grid;
  }

}
