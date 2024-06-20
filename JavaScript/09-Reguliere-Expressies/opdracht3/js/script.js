"use strict"

const names = "Branford, Terra\nCole, Locke\nGaramonde, Cyan\nChère, Celes";
const swap = /([A-zÀ-ú]+)\,\s([A-zÀ-ú]+)/gi;

console.log(names);
console.log(names.replace(swap, (_, lastName, firstName) => `${firstName} ${lastName.toUpperCase()}`));
