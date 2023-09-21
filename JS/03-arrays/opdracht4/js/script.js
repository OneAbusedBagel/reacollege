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


let dog, cat, rabbit, rest;
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



// [dog, cat, rabbit, cavia1, cavia2, cavia3, cavia4] = myPets;
[dog, cat, rabbit, ...rest] = myPets;

[a, b, c, d, e, f, g, h, i, j] = biggestCitiesBenelux;
myPets.flat();
console.log(myPets);
console.log(myPets.flat());

// const animal = prompt()

// hondachtigen.pop();
// hondachtigen.unshift("Coyote")
// katachtigen.push("Luipaard", "Jaguar")

// const zoogdieren = hondachtigen.concat(katachtigen, animal)

//zoogdieren.sort()

//console.log(hondachtigen)
//console.log(katachtigen)
//console.log(zoogdieren)



//const text = zoogdieren.join(`\n`)

alert(`De grootste steden in de Benelux zijn ${a} en ${b} `);

alert(`Dit zijn mijn huisdieren, Ik heb een ${dog}, ${cat}, ${rabbit} en 4 schattige cavias! ${cavia2} `);

