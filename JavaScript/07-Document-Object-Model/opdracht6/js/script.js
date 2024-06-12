"use strict"

// Null probleem gefixt


function euro_naar_dollar() {
    // 1 euro = 1.08 dollar
    // alert("e-d workin")
    let euro = document.getElementById("euro").value
    document.getElementById("dollar").value = Math.round((euro * 1.08) *100) / 100 ;
};

function dollar_naar_euro() {
    // 1 dollar = 0.92 euro
    // alert("d-e workin")
    let dollar = document.getElementById("dollar").value
    document.getElementById("euro").value = Math.round((dollar * 0.92) *100) / 100 ;
};

let knop_1 = document.getElementById("e-d");
knop_1.addEventListener("click",euro_naar_dollar, true);

let knop_2 = document.getElementById("d-e");
knop_2.addEventListener("click",dollar_naar_euro, true);
