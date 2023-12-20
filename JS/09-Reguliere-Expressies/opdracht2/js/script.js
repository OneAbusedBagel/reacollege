"use strict"

const pattern = / ^(06)\-([0-9]{8}) |^(06 )([0-9]{8}) |^(06)([0-9]{8}) | ^(\+31 6 ) ([0-9]{8})/

const el1 = document.querySelector("#tel");
el1.getAttribute("value");

const el2 = document.getElementById("knop-1");
el2.addEventListener("click", testFunctie2());

const el3 = document.getElementById("knop-2");
el3.addEventListener("click", log());

function testFunctie2() {
    alert("yiup")
}

function log() {
    const el1 = document.querySelector("#tel");
    el1.getAttribute("value");

    console.log(el1)
    if (pattern.test(tel)) {
        console.log(`log pass`)
    } else {
        console.error(`log no pass.`)
    }

    alert("huh?")
}

const el = document.getElementById("tel");
el.addEventListener("input", testFunctie);

function testFunctie() {
    var head = document.getElementById("tel").value
    document.getElementById("output").innerHTML = `<i> ${head} </i>`;
}

if (pattern.test(tel)) {
    console.log(`pass`)
} else {
    console.error(`no pass.`)
}

// if (pattern.test(blep)) {
//     console.log(`Deze string begint met een gekapitaliseerde medeklinker`)
// } else {
// }
//     console.error(`Deze string begint NIET met een gekapitaliseerde medeklinker`)