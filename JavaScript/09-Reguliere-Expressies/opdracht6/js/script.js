"use strict"

const btn = document.querySelector("#submit")
// const invalidTel = document.querySelector("#invalidTel")
const patternTel = /^(06)\-[0-9]{8}|^(06 )([0-9]{8})|^(06)([0-9]{8})|^(\+31 6 )([0-9]{8})/
const patternBirth = /^([0-9]{2})\-[0-9]{2}|^[0-9] (januarie|februarie|maart|april|mei|junie|julie|augustus|september|oktober|november|december)|^([0-9]{2}) (januarie|februarie|maart|april|mei|junie|julie|augustus|september|oktober|november|december)/gi
//  the next three regExp patterns are 'borrowed' from a handy site called "regex101" where you can test, save and share regular expressions 
const patternStreet = /^(?<streetname>\d*[\p{L}\d '\/.\-]+)[,\s]+(?<housenumber>\d+)\s*(?<ext>[\p{L}\d\-\/'"() ]*)$/iu
const patternUrl = /^((http|https):\/\/)?(www\.)?[a-zA-Z0-9-_\.]+\.[a-zA-Z]+(:\d+)?(\/[a-zA-Z\d\.\-_]*)*[a-zA-Z#-_\d]*$/gm
const patternPass =  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/

function checkTel() {
    const invalidTel = document.querySelector("#invalidTel")   
    let telcheck = document.querySelector("#tel").value;
    console.log(telcheck)
    invalidTel.innerHTML = ("") 
    try{
        if (patternTel.test(telcheck) == false){
            btn.disabled = true
            throw "Invalid phone number"
        }
    }
    catch(err){
        console.warn(err)
        invalidTel.innerHTML = err
    }
}

function checkBirth() {
    const invalidBirth = document.querySelector("#invalidBirth") 
    let Birthcheck = document.querySelector("#birth").value;
    console.log(Birthcheck)   
    invalidBirth.innerHTML = ("")
    try{
        if (patternBirth.test(Birthcheck) == false) {
            btn.disabled = true
            throw "Invalid birth number!"
        }
    }
    catch(err) {
        console.warn(err)
        invalidBirth.innerHTML = err
    }

}

function checkStreet() {
    const invalidStreet = document.querySelector("#invalidStreet")
    let streetCheck = document.querySelector("#street").value;
    console.log(streetCheck)
    invalidStreet.innerHTML = ("")
    try {
        if (patternStreet.test(streetCheck) == false) {
            btn.disabled = true
            throw "Invalid Street!"
        } 
    }
    catch(err) {
        console.warn(err)
        invalidStreet.innerHTML = err
    }
}

function checkUrl() {
    const invalidUrl = document.querySelector("#invalidUrl")
    let urlCheck = document.querySelector("#url").value;
    console.log(urlCheck)   
    invalidUrl.innerHTML = ("")
    try {
        if (patternUrl.test(urlCheck) == false) {
            btn.disabled = true
            throw "Invalid Url!"
            invalidUrl.innerHTML = ("")
        }
    }
    
    catch(err) {
        console.warn(err)
        invalidUrl.innerHTML = err
    }
}

function checkPass() {
    const invalidPass = document.querySelector("#invalidPass")
    let passCheck = document.querySelector("#pass").value;
    console.log(passCheck)   
    invalidPass.innerHTML = ("")
    try{
        if (patternPass.test(passCheck) == false) {
            btn.disabled = true
            throw "Invalid Password!"
        }
    }
    catch(err) {
        console.warn(err)
        invalidPass.innerHTML = err
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

