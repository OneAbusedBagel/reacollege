"use strict";


// for some reason that .innerHTML glitch keeps popping up so I keep recycling 1.6 to circumvent it..

const thing = prompt("just name a thing","sushi");
const letter = prompt("give us a letter, any letter! (please say i)","i");

const nu = new Date();

document.getElementById("h-1").innerHTML = `your thing: ${thing} `;

document.getElementById("li-1").innerHTML = `your thing is (${thing.length}) characters long: `;
document.getElementById("li-2").innerHTML = `${thing.toUpperCase()}`;
document.getElementById("li-3").innerHTML = `${thing.toLowerCase()}`;
document.getElementById("li-4").innerHTML = `${thing.indexOf(letter)} `;

document.getElementById("span-1").innerHTML = `Deze pagina is opgevraagd op ${nu.getDate()}-${nu.getMonth() + 1}-${nu.getFullYear()}`;
document.getElementById("span-2").innerHTML = `© CodeCrashers – ${nu.getFullYear()}`;
document.getElementById("span-3").innerHTML = `It is now ${nu.getHours()}:${nu.getMinutes()}:${nu.getSeconds()}`;

//I don't want to get rid of the span elements becaues it might cause the glitch again 
