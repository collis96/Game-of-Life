// Main file

let sWidth = 500;
let sHeight = 500;
let resolution = 20;
let columns = sWidth / resolution;
let rows = sHeight / resolution;
let model = new Model(columns, rows, sWidth, sHeight);

function setup() {

	createCanvas(sWidth, sHeight);
	background(255);
	draw();

	let gridV = new GridView(columns, rows, sWidth, sHeight);
	gridV.show();

	let grid = model.createGrid();
	for(let i=0; i<columns; i++){
		for(let j=0; j<columns; j++){
			let cell = grid[i][j];
			console.log(cell);
			let x = cell.getX();
			let y = cell.getY();
			if(cell.state==1){
				fill(20)
				rect(x,y,resolution, resolution);
			}

		}
	}

	//load model

	//console test to check randomised grid
	// for(let i=0; i<columns; i++){
	// 	for(let j=0; j<rows; j++){
	// 		console.log(grid[i][j]);
	// 	}
	// }

}

function draw() {
//todo updates


}
