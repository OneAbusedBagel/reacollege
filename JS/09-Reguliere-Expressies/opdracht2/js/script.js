"use strict"

const btn = document.querySelector("#submit")
const invalid = document.querySelector("#invalid")
const pattern = /^(06)\-[0-9]{8}|^(06 )([0-9]{8})|^(06)([0-9]{8})|^(\+31 6 )([0-9]{8})/

console.log(pattern.test("06-12345678"))

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
        console.warn("check sees false")
        invalid.innerHTML = ("Invalid phone number!")
    }
}

const el = document.getElementById("tel");
el.addEventListener("input", check);
