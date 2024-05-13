"use strict"

alert("test")

const windowHeightOutput = document.querySelector("#size-y");
const windowWidthOutput = document.querySelector("#size-x");

const posHeightOutput =  document.querySelector("#pos-y");
const posWidthOutput = document.querySelector("#pos-x");

function reportWindowSize() {
    windowHeightOutput.textContent = window.innerHeight;
    windowWidthOutput.textContent = window.innerWidth;
}

function reportScrollPos() {
    posHeightOutput.textContent = window.scrollY;
    posWidthOutput.textContent = window.scrollX;
}

window.onresize = reportWindowSize;
window.onscroll = reportScrollPos
window.onload = reportWindowSize

// Geen null gedoe dus ik kan eindelijk weer doorwerken
