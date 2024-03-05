"use strict"

// Null probleem gefixt

function display() {
    let display = document.getElementById("element").value
    console.log(display)
    display = document.getElementById("tekst").placeholder = `dit is een <${display}> element!`
};

function save() {
    const element = document.createElement(document.getElementById("element").value)
    console.log(element)
    let tekst = document.createTextNode(document.getElementById("tekst").value)
    console.log(tekst)

    element.appendChild(tekst)
    console.log(element)
    document.getElementById("output").appendChild(element)
}

function change() {
    //  font
    document.body.style.fontFamily = document.getElementById("font").value    
    // background color
    document.body.style.backgroundColor = document.getElementById("background-color").value
    // text color
    document.body.style.color = document.getElementById("tekst-color").value
    // font size
    document.body.style.fontSize = `${document.getElementById("font-size").value}px`
}

function remove() {
    const output = document.getElementById("output");
    output.removeChild(output.children[0]);
}

let el1 = document.getElementById("element");
el1.addEventListener("change",display, true);

let knop_1 = document.getElementById("add");
knop_1.addEventListener("click",save, true);

let knop_2 = document.getElementById("remove");
knop_2.addEventListener("click",remove, true);



let el2 = document.getElementById("font");
el2.addEventListener("change",change, true);

let el3 = document.getElementById("background-color");
el3.addEventListener("change",change, true);

let el4 = document.getElementById("tekst-color");
el4.addEventListener("change",change, true);

let el5 = document.getElementById("font-size");
el5.addEventListener("change",change, true);



// -------------[test divider line]--------------

// function euro_naar_dollar() {
//     // 1 euro = 1.08 dollar
//     alert("e-d workin")
//     let euro = document.getElementById("euro").value
//     console.log(euro)
//     let dollar = document.getElementById("dollar").value = Math.round((euro * 1.08) *100) / 100 ;
// };

// function dollar_naar_euro() {
//     // 1 dollar = 0.92 euro
//     alert("d-e workin")
//     let dollar = document.getElementById("dollar").value
//     console.log(dollar)
//     let euro = document.getElementById("euro").value = Math.round((dollar * 0.92) *100) / 100 ;
//     console.log(euro)
// };