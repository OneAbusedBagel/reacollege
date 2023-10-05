"use strict"

function makeBold(inputString) {
	const outputString = "<strong>" + inputString + "</strong>";
	console.log(inputString);
	return outputString;
};

makeBold("test");

document.getElementById("output").innerHTML = outputString;
