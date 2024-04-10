"use strict"

const btn = document.querySelector("#submit");
const invalidTel = document.querySelector("#invalidTel");
const invalidBir = document.querySelector("#invalid-bir");
const invalidAdd = document.querySelector('#invalid-web');
const invalidWeb = document.querySelector('#invalid-add');
const invalidpas = document.querySelector('#invalid-pas');

const patternTel = /^(06)\-[0-9]{8}|^(06 )([0-9]{8})|^(06)([0-9]{8})|^(\+31 6 )([0-9]{8})/;
const patternBir = / hmm? /;
const patternAdd = / hmm? /;
const patternWeb = / hmm? /;
const patternpas = / hmm? /;

console.log(patternTel.test("06-12345678"));

function checkTel() {
    let telCheck = document.querySelector("#tel").value;
    console.log(telCheck)
    if (patternTel.test(telCheck) == true) {
        btn.disabled = false
        console.log("check is true")
        console.log(patternTel)
        console.log(telCheck)
        invalid.innerHTML = ("")
    } else {
        btn.disabled = true
        console.warn("check sees false")
        invalid.innerHTML = ("Invalid phone number!")
    }
};

function checkBir() {
    let telCheck = document.querySelector("#tel").value;
    console.log(telCheck)
    if (patternTel.test(telCheck) == true) {
        btn.disabled = false
        console.log("check is true")
        console.log(patternTel)
        console.log(telCheck)
        invalidTel.innerHTML = ("")
    } else {
        btn.disabled = true
        console.warn("check sees false")
        invalidTel.innerHTML = ("Invalid Date Format, use: day-month")
    }
};

function checkAdd() {
    let addCheck = document.querySelector("#tel").value;
    console.log(addCheck)
    if (patternAdd.test(addCheck) == true) {
        btn.disabled = false
        console.log("check is true")
        console.log(patternAdd)
        console.log(addCheck)
        invalidAdd.innerHTML = ("")
    } else {
        btn.disabled = true
        console.warn("check sees false")
        invalidAdd.innerHTML = ("Invalid phone number!")
    }
};

function checkWeb() {
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
};

function checkPas() {
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
};

const el = document.getElementById("tel");
el.addEventListener("input", checkTel);
