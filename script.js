const createCanvasBtnEle = document.getElementById("create-canvas-btn");
const sizeInputEle = document.getElementById("canvas-size-input");
const errorTooltipEle = document.getElementById("error-tooltip");
const removeCanvasBtnEle = document.getElementById("remove-canvas-btn");
const colorSelectorEle = document.getElementById("color-selector");

//Creates and adds the canvas
function createCanvas(e) {
	//Stop submit default function
	e.preventDefault();

	//Grab initial input values
	let input = sizeInputEle.value;
	let backgroundColor = colorSelectorEle.value;

	//Checks and raises a tooltip if incorrect paramaters entered
	if (!input || input < 1 || input > 100) {
		errorTooltipEle.className = "";
		return;
	}

	//Removes tooltip on proper entry
	if (errorTooltipEle.className !== "hidden") {
		errorTooltipEle.className = "hidden";
	}

	//Stop additional generations
	if (document.getElementById("canvas")) return;

	let totalBlockNum = input * input;
	let blockWAndHPerc = 1 / input;

	let canvasEle = document.createElement("div");
	canvasEle.id = "canvas";
	canvasEle.style.backgroundColor = backgroundColor;

	//Populate and append the canvas blocks
	for (let i = 1; i <= totalBlockNum; i++) {
		//Creates a canvas block
		let canvasBlockEle = document.createElement("div");
		canvasBlockEle.className = "canvas-block";

		//Set the appropriate width and height
		canvasBlockEle.style.width = `${blockWAndHPerc * 100}%`;
		canvasBlockEle.style.height = `${blockWAndHPerc * 100}%`;

		//Set initial color to white and opacity to 100%
		canvasBlockEle.style.backgroundColor = "rgb(255,255,255)";
		canvasBlockEle.style.opacity = 1;

		canvasEle.append(canvasBlockEle);
	}

	document.body.append(canvasEle);
	canvasEle.addEventListener("mouseover", paintBlock);
}

//Paints the canvas block 10% darker
function paintBlock(e) {
	//Check to make sure firing function on a canvas block
	if (e.target.className !== "canvas-block") return;
	//Pressing the shift key stops painting
	if (e.shiftKey) return;

	//If the blocks opacity is not fully transparent, decrease by 10%
	if (e.target.style.opacity > 0) {
		e.target.style.opacity -= 0.1;
	}
}

//Deletes and removes the canvas
function removeCanvas(e) {
	e.preventDefault();

	let canvasEle = document.getElementById("canvas");

	if (canvasEle) {
		canvasEle.remove();
	}
}

createCanvasBtnEle.addEventListener("click", createCanvas);
removeCanvasBtnEle.addEventListener("click", removeCanvas);
