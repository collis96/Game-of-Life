class MainModel {

  constructor(){
    this.width = 500;
    this.height = 500;
    this.resolution = 20;
    this.columns = this.width / this.resolution;
    this.rows = this.height / this.resolution;
    this.array = null;
    this.newArr = this.create2DArray();
    this.fr = 2;
  }

  create2DArray(columns, rows){
    let array = new Array(this.columns);
  	for( let i=0 ; i<array.length; i++){
  		array[i] = new Array(this.rows);
  	}
    console.table(array);
    return array;
  }

  newSeed(){
    let grid = this.create2DArray();
    for(let i=0; i<this.columns; i++){
      for(let j=0; j<this.rows; j++){
        let x = i * this.resolution;
        let y = j * this.resolution;
        grid[i][j] = new Cell(x, y, floor(random(2)));
      }
    }
    this.oldArr = grid;
  }

  generate(oldArr){

    let temp = oldArr;

    for(let i=0; i<this.columns; i++){
      for(let j=0; j<this.rows; j++){

        let state = temp[i][j].state;
        let x = i * this.resolution;
        let y = j * this.resolution;

        //edges
        if(i == 0 || i == this.columns - 1 || j == 0 || j == this.rows - 1){
          this.newArr[i][j] = new Cell(x, y, state);
        } else {

          let neighbourCells = this.countNeighbours(temp, i, j);
          console.log(neighbourCells);

          if(state == 0 && neighbourCells == 3){ //rule for reproduction
            this.newArr[i][j] = new Cell(x, y, 1);
          } else if(state == 1 && (neighbourCells < 2 || neighbourCells > 3)){ //rule for death
            this.newArr[i][j] = new Cell(x, y, 0);
          } else {
            this.newArr[i][j] = new Cell(x, y, state); //state stays the same
          }

        }

        this.oldArr = this.newArr;

      }
    }

  }

  countNeighbours(arr, x, y){
    let count = 0;

    for(let i= -1; i < 2; i++){
      for(let j= -1; j < 2; j++){

        if(i!==x && j!==y){
          count += arr[x + i][y + j].state;
        } else {
          continue;
        }

      }
    }
    return count;
  }

}
