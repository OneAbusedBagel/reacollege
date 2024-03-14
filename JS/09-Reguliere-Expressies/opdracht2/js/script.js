"use strict"

const btn = document.querySelector("#submit")
const invalid = document.querySelector("#invalid")
const pattern = /^(06)\-[0-9]{8}|^(06 )([0-9]{8})|^(06)([0-9]{8})|^(\+31 6 )([0-9]{8})/

function check() {
    let telcheck = document.querySelector("#tel").value;
    console.log(telcheck)   
    if (pattern.test(telcheck) == true) {
        btn.disabled = false
        console.log("check is true")
        console.log(pattern)
        console.log(telcheck)
    } else {
        btn.disabled = true
        console.error("check sees false")
        invalid.innerHTML = ("Invalid phone number!")
    }
}


const el = document.getElementById("tel");
el.addEventListener("input", check);






//-----------------[division line to reduce clutter]----


// let check = "+31 6 12345678"

// console.log(check)
// console.log(pattern)
// console.log(pattern.test(check))

// function submitFunctie() {
//     alert("don't go just yet<,!")
// }

// function log() {

//     console.log(`this is the le1 log ${telcheck}`)

//     if (pattern.test(telcheck) === true) {
//         console.log(`log pass`)
//     } else {
//         console.error(`log no pass.`)
//     }
//     alert("it uh work?")
// }

// const el1 = document.getElementById("submit");
// el1.addEventListener("click", log);

// const el2 = document.getElementById("knop-1");
// el2.addEventListener("click", log())

// function testFunctie() {
//     var head = document.getElementById("tel").value
//     document.getElementById("output").innerHTML = `<i> ${head} </i>`;
// }
