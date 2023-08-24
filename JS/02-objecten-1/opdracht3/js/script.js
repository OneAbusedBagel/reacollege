"use strict";

let rng = Math.random();
let rng2 = Math.random() * 10 ;
let rng3 = Math.random() * 255 ;
let rng4 = (Math.random() * 50) + 50 ;

// doesn't seem to working for some odd reason can't se any typos but is considered "null" by the console log
// document.getElementById("span-1").innerHTML = `hey look, a number ${rng}`

console.log(Math.round(rng2))
console.log(Math.round(rng3))
console.log(Math.round(rng4))