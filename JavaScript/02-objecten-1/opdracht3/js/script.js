"use strict";

let rng = Math.random();
let rng2 = Math.floor(Math.random() * 10 ) + 1;
let rng3 = Math.floor(Math.random() * 255) + 1;
let rng4 = Math.round(Math.random() * 100) / 2 + 50;

document.getElementById("span-1").innerHTML = rng
document.getElementById("span-2").innerHTML = rng2
document.getElementById("span-3").innerHTML = rng3
document.getElementById("span-4").innerHTML = rng4

// doesn't seem to working for some odd reason can't see any typos but is considered "null" by the console log
// document.getElementById("span-1").innerHTML = `hey look, a number ${rng}`

console.log(Math.round(rng2));
console.log(Math.round(rng3));
console.log(Math.round(rng4));