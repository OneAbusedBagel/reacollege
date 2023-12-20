"use strict"

const pattern = /^ (A|O|E|I|U)/;

let blep = window.prompt();

console.log(blep);

if (pattern.test(blep)) {
    console.log(`Deze string begint met een gekapitaliseerde medeklinker`)
} else {
    console.error(`Deze string begint NIET met een gekapitaliseerde medeklinker`)
}