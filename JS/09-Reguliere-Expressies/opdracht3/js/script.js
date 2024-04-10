"use strict"

const names = "Branford, Terra\nCole, Locke\nGaramonde, Cyan\nChère, Celes";
const str = "p, a, img, table, form";
const swap = /([A-zÀ-ú]+)\,\s([A-zÀ-ú]+)/gi;
const test = /([A-zÀ-ú]+)\,\s([A-zÀ-ú]+)/gi;

console.log(names);
console.log(names.replace(test, `$2, $1`));
// I assume it wants me to use a function as the replacement but due to the way it says 'BINNEN één replace method' twijfel ik nu daarover.

const newstring = names.replace(swap, "$2, $1");
console.log(newstring);

console.log(str);
console.log(str.replace(/(\w+)/gi, "<$1>"));
