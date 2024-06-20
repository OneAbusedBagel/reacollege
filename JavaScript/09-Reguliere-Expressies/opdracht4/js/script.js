"use strict"

const btn = document.querySelector("#submit")
const invalid = document.querySelector("#invalid")
const patternTel = /^(06)\-[0-9]{8}|^(06 )([0-9]{8})|^(06)([0-9]{8})|^(\+31 6 )([0-9]{8})/

console.log(patternTel.test("06-12345678"))

function checkTel() {
    let telcheck = document.querySelector("#tel").value;
    console.log(telcheck)   
    if (patternTel.test(telcheck) == true) {
        btn.disabled = false
        console.log("check is true")
        console.log(patternTel)
        console.log(telcheck)
        invalid.innerHTML = ("")
    } else {
        btn.disabled = true
        console.warn("check sees false")
        invalid.innerHTML = ("Invalid phone number!")
    }
}

const el = document.getElementById("tel");
el.addEventListener("input", checkTel);
