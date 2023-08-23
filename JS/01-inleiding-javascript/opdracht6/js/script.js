"use strict";


const name = prompt("what is your name?")
const age = prompt("what is your age?")
const place = prompt("where do you live?")

document.getElementById("p-1").innerHTML = `hello my name is ${name}.`
document.getElementById("p-2").innerHTML = `I am ${age} years old.`
document.getElementById("p-3").innerHTML = `And live in ${place}.`