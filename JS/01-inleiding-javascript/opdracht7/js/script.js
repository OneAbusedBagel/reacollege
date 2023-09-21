"use strict";


const inkoopprijs = 3.00;
let hoeveelheid = 5;

let totaalbedrag;
{
    const winstmarge = 2.50;
    const btw = 1.21;
    totaalbedrag = ((inkoopprijs + winstmarge) * btw) * hoeveelheid;
};

console.log(inkoopprijs);
console.log(hoeveelheid);
console.log(totaalbedrag);

alert("€ " + totaalbedrag);