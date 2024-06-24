"use strict"

function skillCheck() {
    let rng = Math.floor(Math.random()*6)+1
    document.getElementById("output").innerHTML = rng
    console.log(rng)
    try{
        if (rng == 1){
            throw "you failed the skillcheck.";
        }
    }
    catch(err) {
        console.log(err)
        document.getElementById("output").innerHTML = err
    }
}

function dateCheck() {
    const date = new Date();
    let day = date.getDay()
    console.log(day)
    try{
        if (day == 6| day == 7){
            throw "STOP! Het is weekend!";
        }
    }
    catch(err) {
        console.warn(err)
        document.getElementById("output").innerHTML = err
    }
}

const el = document.getElementById("knop-1");
el.addEventListener("click", skillCheck);

const el1 = document.getElementById("knop-2");
el1.addEventListener("click", dateCheck);
