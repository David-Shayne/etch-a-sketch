const sizeInputBtnEle = document.getElementById("submit-canvas-size");
const sizeInputEle = document.getElementById("canvas-size-input");
sizeInputEle.value = 10;
const canvasEle = document.createElement("div");
canvasEle.id = "canvas";

//Populates the canvas equally with blocks
function populateCanvas(e) {
	//Stop submit default function
	e.preventDefault();

	//Stop additional generations
	if (canvasEle.childElementCount > 0) {
		return;
	}

	let input = e.target.previousElementSibling.value;
	let totalBlockNum = input * input;
	let blockWAndHPerc = 1 / input;

	//Create
	for (let i = 1; i <= totalBlockNum; i++) {
		//Add a canvas block
		let canvasBlockEle = document.createElement("div");
		canvasBlockEle.className = "canvas-block";

		//Set the appropriate width and height
		canvasBlockEle.style.width = `${blockWAndHPerc * 100}%`;
		canvasBlockEle.style.height = `${blockWAndHPerc * 100}%`;

		canvasEle.append(canvasBlockEle);
	}

	document.body.append(canvasEle);
}

function paintBlock(e) {
	let currentShade = e.target.style.backgroundColor;
	console.log(currentShade);
}

sizeInputBtnEle.addEventListener("click", populateCanvas);
canvasEle.addEventListener("click", (e) => {});

// Temp auto click
const clickInputBtn = new Event("click");
sizeInputBtnEle.dispatchEvent(clickInputBtn);
