"use strict";


let a, b, c, d, e, f, g, h, i, j;
const biggestCitiesBenelux = [
	"Brussel",
	"Amsterdam",
	"Rotterdam",
	"Den Haag",
	"Antwerpen",
	"Utrecht",
	"Gent",
	"Eindhoven",
	"Groningen",
	"Tilburg"
];


let dog, cat, rabbit, cavias;
const myPets = [
	"Hond",
	"Kat",
	"Konijn",
	[
		"Gladhaar cavia",
		"Borstel cavia",
		"Rex cavia",
		"Coronet cavia"
	]
];


// let myFlatPets = myPets.flat();

// console.log(myFlatPets);



[dog, cat, rabbit, cavias] = myPets;

console.log(dog, cat, rabbit, cavias);

// [dog, cat, rabbit, ...rest] = myPets;

[a, b, c, d, e, f, g, h, i, j] = biggestCitiesBenelux;
myPets.flat();
console.log(myPets);
console.log(myPets.flat());

alert(`De grootste steden in de Benelux zijn ${a} en ${b} `);

alert(`Dit zijn mijn huisdieren, Ik heb een ${dog}, ${cat}, ${rabbit} en 4 schattige cavias! ${megaCavias} `);

