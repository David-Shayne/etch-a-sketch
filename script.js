const sizeInputBtnEle = document.getElementById("submit-canvas-size");
const sizeInputEle = document.getElementById("canvas-size-input");
const canvasEle = document.createElement("div");
canvasEle.id = "canvas";

sizeInputBtnEle.addEventListener("click", (e) => {
	//Stop submit default function
	e.preventDefault();
	let input = e.target.previousElementSibling.value;
	let boxWAndHPercentage = 1 / input;

	//Create
	for (let i = 1; i <= totalBoxNum; i++) {
		//Add a canvas block
		let canvasBlockEle = document.createElement("div");
		canvasBlockEle.className = "canvas-block";

		//Set the appropriate width and height
		canvasBlockEle.style.width = `${boxWAndHPercentage * 100}%`;
		canvasBlockEle.style.height = `${boxWAndHPercentage * 100}%`;
	}
});
