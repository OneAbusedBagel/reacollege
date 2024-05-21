"use strict"

function chooseFunction() {
    const selectCheck = document.getElementById("vehicleSelect").value
    let vehicle = selectCheck;
    apacheFetch(vehicle)
}

// // test with variable fetch thing ---->
function apacheFetch(vehicle) {
    // console.log(`this is fetch ${vehicle}`)
    fetch(`files/${vehicle}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("output").innerHTML = data;
        })
        .catch(error => {
            console.error("Niet gelukt.");
        });
}

const form_1 = document.getElementById("vehicleSelect");
form_1.addEventListener("change", chooseFunction, true);

//  small commmentary ---
// 
// the exercise made this seem way more difficult with the way it was worded. 
// especially with it specifying in one string, I don't even know if I did that or not. but it works 