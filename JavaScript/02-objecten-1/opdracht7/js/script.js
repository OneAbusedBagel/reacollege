"use strict";

// for some reason that .innerHTML glitch keeps popping up so I keep recycling 1.6 to circumvent it..

let dkc = "Donkey Kong Country";
let anthem = "God Save the Queen";
const lyrics1 = "I'm blue,";
const lyrics2 = "Da ba dee da ba di";
const yoda = "you must have patience my young Padawan";

dkc = dkc.padEnd(30,".");
anthem = anthem.replace("Queen", "King");

document.getElementById("h-1").innerHTML = `${dkc} `;

document.getElementById("li-1").innerHTML = `${anthem} `;
document.getElementById("li-2").innerHTML = `${lyrics1} ${(` ${lyrics2}`).repeat(7)}`;
// document.getElementById("li-3").innerHTML = `${(  )}`
// document.getElementById("li-4").innerHTML = `${(  )}`
