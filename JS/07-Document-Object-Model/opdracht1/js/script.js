"use strict"

function knop1Functie(){
    let title = document.getElementById("title").innerHTML;
    console.log(title);
    document.getElementById("knop-1").innerText = "this one works";
    alert(`Titel:${title} text`)
}

function knop2Functie(){
    
}

const el1 = document.getElementById("knop-1");
el1.addEventListener("click", knop1Functie, true);

const el2 = document.getElementById("knop-2");
el2.addEventListener("click", knop2Functie, true);
