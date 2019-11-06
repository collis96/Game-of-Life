let model, view, controller;

function setup() {

	model = new MainModel();
	view  = new MainView(model);
	controller = new MainController(model, view);
	model.newSeed();

	createCanvas(model.width, model.height);
	frameRate(model.fr);
	background(255);
	view.renderGrid();
	draw();

}

function draw() {

	model.generate(model.oldArr);
	view.renderCells(model.oldArr);

}
