const sizeInputBtnEle = document.getElementById("submit-canvas-size");
const sizeInputEle = document.getElementById("canvas-size-input");

sizeInputBtnEle.addEventListener("click", (e) => {
	//Stop submit default function
	e.preventDefault();
	let input = e.target.previousElementSibling.value;
	let canvasBoxNum = input * input;
	console.log(canvasBoxNum);
});

//
//
//
//
const canvasEle = document.createElement("div");
canvasEle.id = "canvas";

document.body.append(canvasEle);
