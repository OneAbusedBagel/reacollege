"use strict"

const btn = document.querySelector("#submit")
// const invalidTel = document.querySelector("#invalidTel")
const patternTel = /^(06)\-[0-9]{8}|^(06 )([0-9]{8})|^(06)([0-9]{8})|^(\+31 6 )([0-9]{8})/
const patternBirth = /^([0-9]{2})\-[0-9]{2}|^[0-9] (januarie|februarie|maart|april|mei|junie|julie|augustus|september|oktober|november|december)|^([0-9]{2}) (januarie|februarie|maart|april|mei|junie|julie|augustus|september|oktober|november|december)/gi
const patternStreet = /^(?<streetname>\d*[\p{L}\d '\/.\-]+)[,\s]+(?<housenumber>\d+)\s*(?<ext>[\p{L}\d\-\/'"() ]*)$/iu
//  the patternStreet regExp is 'borrowed' from a handy site called "regex101" where you can test, save and share regular expressions 
const patternUrl = /^((http|https):\/\/)?(www\.)?[a-zA-Z0-9-_\.]+\.[a-zA-Z]+(:\d+)?(\/[a-zA-Z\d\.\-_]*)*[a-zA-Z#-_\d]*$/gm
const patternPass =  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/

function checkTel() {
    const invalidTel = document.querySelector("#invalidTel")   
    let telcheck = document.querySelector("#tel").value;
    console.log(telcheck)   
    if (patternTel.test(telcheck) == true) {
        btn.disabled = false
        console.log("check is true")
        console.log(patternTel) 
        console.log(telcheck)
        invalidTel.innerHTML = ("")
    } else {
        btn.disabled = true
        console.warn("check sees false")
        invalidTel.innerHTML = ("InvalidTel phone number!")
    }
}

function checkBirth() {
    const invalidBirth = document.querySelector("#invalidBirth") 
    let Birthcheck = document.querySelector("#birth").value;
    console.log(Birthcheck)   
    if (patternBirth.test(Birthcheck) == true) {
        btn.disabled = false
        console.log("check is true")
        console.log(patternBirth)
        console.log(Birthcheck)
        invalidBirth.innerHTML = ("")
    } else {
        btn.disabled = true
        console.warn("check sees false")
        invalidBirth.innerHTML = ("Invalid birth number!")
    }
}

function checkStreet() {
    const invalidStreet = document.querySelector("#invalidStreet")
    let streetCheck = document.querySelector("#street").value;
    console.log(streetCheck)   
    if (patternStreet.test(streetCheck) == true) {
        btn.disabled = false
        console.log("check is true")
        console.log(patternStreet)
        console.log(streetCheck)
        invalidStreet.innerHTML = ("")
    } else {
        btn.disabled = true
        console.warn("check sees false")
        invalidStreet.innerHTML = ("Invalid Street!")
    }
}

function checkUrl() {
    const invalidUrl = document.querySelector("#invalidUrl")
    let urlCheck = document.querySelector("#url").value;
    console.log(urlCheck)   
    if (patternUrl.test(urlCheck) == true) {
        btn.disabled = false
        console.log("check is true")
        console.log(patternUrl)
        console.log(urlCheck)
        invalidUrl.innerHTML = ("")
    } else {
        btn.disabled = true
        console.warn("check sees false")
        invalidUrl.innerHTML = ("Invalid Url!")
    }
}

function checkPass() {
    const invalidPass = document.querySelector("#invalidPass")
    let passCheck = document.querySelector("#pass").value;
    console.log(passCheck)   
    if (patternPass.test(passCheck) == true) {
        btn.disabled = false
        console.log("check is true")
        console.log(patternPass)
        console.log(passCheck)
        invalidPass.innerHTML = ("")
    } else {
        btn.disabled = true
        console.warn("check sees false")
        invalidPass.innerHTML = ("Invalid Password!")
    }
}

const el = document.getElementById("tel");
el.addEventListener("input", checkTel);

const el1 = document.getElementById("birth");
el1.addEventListener("input", checkBirth);

const el2 = document.getElementById("street");
el2.addEventListener("input", checkStreet);

const el3 = document.getElementById("url");
el3.addEventListener("input", checkUrl);

const el4 = document.getElementById("pass");
el4.addEventListener("input", checkPass);


