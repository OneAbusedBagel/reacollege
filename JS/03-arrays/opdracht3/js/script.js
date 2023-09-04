"use strict";

const hondachtigen = [
    "Hond",
    "Wolf",
    "Vos",
    "Jakhals",
    "Olifant"
];

const katachtigen = [
    "Kat",
    "Leeuw",
    "Tijger",
    "Lynx",
    "Poema"
];

const animal = prompt()

hondachtigen.pop();
hondachtigen.unshift("Coyote")
katachtigen.push("Luipaard", "Jaguar")

const zoogdieren = animal.concat(katachtigen, hondachtigen)

zoogdieren.sort()

console.log(hondachtigen)
console.log(katachtigen)
console.log(zoogdieren)



const text = zoogdieren.join(`\n`)

alert(`This is an alertbox! \n ${text}`)

