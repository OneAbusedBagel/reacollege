"use strict";


function timeFunction(){
const time = new Date();
document.getElementById("p-1").innerHTML = `Het is nu ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
}

function rngFunction(){
const d20 = Math.floor(Math.random() * 20 + 1 );
document.getElementById("p-1").innerHTML = `You rolled: ${d20}`;
}

function movieFunction(){
    const films = [
        "Film1",
        "Film2",
        "Film3",
        "Film4",
        "Film5"
    ]
    console.log(films.join('-'));
    document.getElementById("p-1").innerHTML = films.join('-');
}

const el1 = document.getElementById("img-clock");
el1.addEventListener("click", timeFunction);

const el2 = document.getElementById("img-dice");
el2.addEventListener("click", rngFunction);

const el3 = document.getElementById("img-movie");
el3.addEventListener("click", movieFunction);

