"use strict"

const pattern = / ^(06)\-([0-9]{8}) | ^(06 )([0-9]{8}) | ^(06)([0-9]{8}) | ^(\+31 6 ) ([0-9]{8})/

console.log(pattern.test("0612345678"))

const el1 = document.querySelector("#tel");
el1.getAttribute("value");

const el2 = document.getElementById("knop-1");
el2.addEventListener("click", log())

const el3 = document.getElementById("knop-2");
el3.addEventListener("click", console.log("knop-2 werkt"));

function testFunctie2() {
    alert("testFunctie2 werkt")
}

function log() {
    const telcheck = document.querySelector("#tel");
    el1.getAttribute("value");

    console.log(telcheck)

    if (pattern.test(telcheck)) {
        console.log(`log pass`)
    } else {
        console.error(`log no pass.`)
    }

    alert("log function working.")
}

const el = document.getElementById("tel");
el.addEventListener("input", testFunctie);

function testFunctie() {
    var head = document.getElementById("tel").value
    document.getElementById("output").innerHTML = `<i> ${head} </i>`;
}
