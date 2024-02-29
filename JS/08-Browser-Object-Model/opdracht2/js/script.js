"use strict"

let venster;
let d = new date();

function knop1Functie(){
	venster = window.open("", "_blank", "width=200,height=150")
	venster.document.write(`<html><p>you've got to be kidding me: ${date}</p></html>`);
};

function knop2Functie(){
	venster.close();
};

const knop_1 = document.getElementById("knop-1");
knop_1.addEventListener("click", knop1Functie, true);

var knop_2 = document.getElementById("knop-2");
knop_2.addEventListener("click", knop2Functie, true)

// 	var outputString = `none`;

// // De return functie werkt niet voor mij ook als ik hem copiër en precies gerbuik zoals in de opdracht vertelt
// // maar dit werkt well voor een of andere reden

// function makeBold(inputString) {
// 	return outputString = "<strong>" + inputString + "</strong>",
// 	console.log(inputString);
// };

// function makeItalic(inputString) {
// 	return outputString = "<i>" + inputString + "</i>",
// 	console.log(inputString);
// };

// makeBold("Test");

// makeItalic(outputString)

// document.getElementById("output").innerHTML = outputString;
