"use strict";


let output = prompt("what is your name?")
output += prompt("what is your age?")
output += prompt("where do you live?")

document.getElementById("p-1").innerHTML = output;

let x = 3;
x *= 3;
x *= 3;
x *= 3;
x *= 3;

document.getElementById("span-1").innerHTML = x;