// Main file

let sWidth, sHeight;
let columns = 10;
let rows = 10;

function setup() {

	sWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	sHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;
	grid = create2DArray(columns,rows);

	for(let i=0; i<columns; i++){
		for(let j=0; j<rows; j++){
			grid[i][j] = floor(random(2));
		}
	}

	createCanvas(sWidth, sHeight);
	background(153);
	draw();

	//console test to check randomised grid
	for(let i=0; i<columns; i++){
		for(let j=0; j<rows; j++){
			console.log(grid[i][j]);
		}
	}

}

function draw() {

}

function create2DArray(columns, rows) {
	let array = new Array(columns);
	for( let i=0 ; i<array.length; i++){
		array[i] = new Array(rows);
	}
	return array;

}
