"use strict"

let venster = "";

function knop1Functie(){
    venster = window.open("https://wikipedia.com/wiki/chair", "_blank", "width=400,height=300");
    return venster;
};



function knop2Functie() {
    venster.close()
}

function knop3Functie() {
    location.reload()
}

function knop4Functie() {
    window.history.back()
}

function knop5Functie() {
    window.history.forward()
}

function knop6Functie() {

    console.log(screen.width);
    console.log(screen.height);
}


const knop_1 = document.getElementById("sprite-1");
knop_1.addEventListener("click", knop1Functie, true);

var knop_2 = document.getElementById("sprite-2");
knop_2.addEventListener("click", knop2Functie, true)

const knop_3 = document.getElementById("sprite-3");
knop_3.addEventListener("click", knop3Functie, true);

var knop_4 = document.getElementById("sprite-4");
knop_4.addEventListener("click", knop4Functie, true)

const knop_5 = document.getElementById("sprite-5");
knop_5.addEventListener("click", knop5Functie, true);

var knop_6 = document.getElementById("sprite-6");
knop_6.addEventListener("click", knop6Functie, true)


