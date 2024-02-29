"use strict"


// // JavaScript code: een nieuw h1 element aanmaken.
// const n = document.createElement("h1");
// const text = document.createTextNode("het werkte well"); 
// n.appendChild(text);

// // JavaScript code: het h2 element vervangen door het h1 element.
// const o = document.querySelector("#kopje");
// o.parentNode.replaceChild(n, o);

// // code werkt niet, heb dit direct van de codecrashers voorbeeld gepakt. Dingen worden steeds als Null gezien en kan dus blijkbaar geen poperties hebben. dus niks werkt, niet eens een knopfunctie.

// // ik ga deze voor nu skippen en ga aan opdracht 5 werken, hopelijk doet die het wel.



alert("please work")

// var b = [];
// for(let i = 0; i < 4; i++) {
//     b[i] = document.createElement("b");
//     const o = document.querySelector("b");

//     const n = document.createElement("em");
//     o.parentNode.replaceChild(n, o)
// }


function knop1Functie() {
    alert("waarom werkt dit niet? dit is geen Null")
}

let el1 = document.getElementById("knop-1");
el1.addEventListener("click", knop1Functie, true )

