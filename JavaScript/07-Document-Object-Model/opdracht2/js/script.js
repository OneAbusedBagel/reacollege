"use strict"

var x = 0;
var i = 0;

const list = document.querySelectorAll("li");
console.log(list);

function knop1Functie() {

    for (let i = 0; i < list.length; i++) {
        if (i === 5) {
            console.log(i);
            continue
        }
        list[i].innerText = `Dit is item ${i + 1}`;
        console.log(i)
    }
}

let knop_1 = document.getElementById("knop-1");
knop_1.addEventListener("click",knop1Functie, true )

