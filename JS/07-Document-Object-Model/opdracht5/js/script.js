"use strict"

// // JavaScript code: een nieuw h1 element aanmaken.
// const n = document.createElement("h1");
// const text = document.createTextNode("Nieuwsartikel"); n.appendChild(text);

// // JavaScript code: het h2 element vervangen door het h1 element.
// const o = document.querySelector("#kopje");
// const parent = document.querySelector("#artikel"); parent.replaceChild(n, o);

// het zelfde als de code hiervoor. alles telt als null, dus niks werkt. Ben terug gegaan naar opdracht 1-2-3 die werken allemaal nog well, maar als ik dezelfde javascript hier heen kopier dan werkt het opeens niet.


var li = [];
var text = [];
const steden = [
    "Den Haag",
	"Antwerpen",
	"Utrecht",
	"Gent",
	"Eindhoven",
	"Groningen",
	"Tilburg"
];

steden.sort();
console.log(steden);

const ol = document.createElement("ol");

document.querySelector("body").appendChild(ol);

function knop1Functie() {

    for (let i = 0; i < steden.length; i++) {
        li[i] = document.createElement("li");

        document.querySelector("ol").appendChild(li[i]);

        text[i] = document.createTextNode("simple li test");

        li[i].appendChild(text[i]);
        li[i].innerText = (steden[i]);
        console.log(i)
    }
};

let knop_1 = document.getElementById("knop-1");
knop_1.addEventListener("click",knop1Functie, true )

