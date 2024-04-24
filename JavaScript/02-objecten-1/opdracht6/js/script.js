"use strict";

// for some reason that .innerHTML glitch keeps popping up so I keep recycling 1.6 to circumvent it..


const thing = prompt("Please input a number with 4 digits before and after the decimal.\nFor example like this:","1514.3396");



const nu = new Date();

document.getElementById("h-1").innerHTML = `You input: ${thing} `;

let r1 = Number(thing).toFixed(3);
document.getElementById("li-1").innerHTML = r1

let r2 = Number(thing).toFixed(1);
document.getElementById("li-2").innerHTML = r2

let r3 = (Number(thing) * Math.floor((Math.random() * 278)) + 1).toFixed(2);
document.getElementById("li-3").innerHTML = r3

let r4 = (Number(thing) / Math.floor((Math.random() * 40)) + 1).toFixed(2);
document.getElementById("li-4").innerHTML = r4


