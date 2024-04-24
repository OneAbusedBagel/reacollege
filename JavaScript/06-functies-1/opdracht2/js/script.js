"use strict"

	var outputString = `none`;

// De return functie werkt niet voor mij ook als ik hem copiër en precies gerbuik zoals in de opdracht vertelt
// maar dit werkt well voor een of andere reden

function makeBold(inputString) {
	return outputString = "<strong>" + inputString + "</strong>",
	console.log(inputString);
};

function makeItalic(inputString) {
	return outputString = "<i>" + inputString + "</i>",
	console.log(inputString);
};

makeBold("Test");

makeItalic(outputString)

document.getElementById("output").innerHTML = outputString;
