const sizeInputBtnEle = document.getElementById("submit-canvas-size");
const sizeInputEle = document.getElementById("canvas-size-input");
sizeInputEle.value = 10;
const canvasEle = document.createElement("div");
canvasEle.id = "canvas";

function populateCanvas(e) {
	//Stop submit default function
	e.preventDefault();
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

sizeInputBtnEle.addEventListener("click", populateCanvas);

// Temp auto click
const clickInputBtn = new Event("click");
sizeInputBtnEle.dispatchEvent(clickInputBtn);
