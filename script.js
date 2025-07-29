const sizeInputBtnEle = document.getElementById("submit-canvas-size");
const sizeInputEle = document.getElementById("canvas-size-input");
const canvasEle = document.createElement("div");
canvasEle.id = "canvas";

//Populates the canvas equally with blocks
function populateCanvas(e) {
	//Stop submit default function
	e.preventDefault();

	//Stop additional generations
	if (canvasEle.childElementCount > 0) return;

	let input = e.target.previousElementSibling.value;
	let totalBlockNum = input * input;
	let blockWAndHPerc = 1 / input;

	//Populate and append the canvas blocks
	for (let i = 1; i <= totalBlockNum; i++) {
		//Creates a canvas block
		let canvasBlockEle = document.createElement("div");
		canvasBlockEle.className = "canvas-block";

		//Set the appropriate width and height
		canvasBlockEle.style.width = `${blockWAndHPerc * 100}%`;
		canvasBlockEle.style.height = `${blockWAndHPerc * 100}%`;

		//Set initial color to white
		canvasBlockEle.style.backgroundColor = "rgb(255,255,255)";

		canvasEle.append(canvasBlockEle);
	}

	document.body.append(canvasEle);
}

//Takes an argument and either turns it into an RGB string or an array of numbers representing RGB values
function convertRGB(arg) {
	if (typeof arg === "string") {
		//Cleans string and turns it into an array of RGB numbers
		let rgbArray = arg.split(",");
		rgbArray[0] = Number.parseInt(rgbArray[0].split("(")[1]);
		rgbArray[1] = Number.parseInt(rgbArray[1].split(" ")[1]);
		rgbArray[2] = Number.parseInt(rgbArray[2].split(" ")[1].split(")")[0]);
		return rgbArray;
	} else if (Array.isArray(arg)) {
		//converts an array of numbers into an RGB string
		return `rgb(${arg[0]}, ${arg[1]}, ${arg[2]})`;
	}
}

//Paints the canvas block 10% darker
function paintBlock(e) {
	//Check to make sure firing function on a canvas block
	if (e.target.className !== "canvas-block") return;
	//Pressing the shift key stops painting
	if (e.shiftKey) return;

	let currentRGBArray = convertRGB(e.target.style.backgroundColor);

	if (currentRGBArray[0] >= 25.5) {
		//Make 10% darker
		let newRGBArray = currentRGBArray.map((value) => value - 25);
		let newRGBString = convertRGB(newRGBArray);

		e.target.style.backgroundColor = newRGBString;
	}
}

sizeInputBtnEle.addEventListener("click", populateCanvas);
canvasEle.addEventListener("mouseover", paintBlock);
