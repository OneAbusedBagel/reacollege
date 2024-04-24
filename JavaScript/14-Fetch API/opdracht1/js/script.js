"use strict"

let x = 0

function changeFunction() {
    x += 1
    console.log(`this log has been triggered, ${x} times!`)
    let version = document.getElementById("versionSelect").value;

    fetch(`ff${version}.txt`)
    .then(response => response.text())
	.then(data => {
		document.getElementById("output").innerHTML = data;
        console.log(data)
	})}

const form_1 = document.getElementById("versionSelect");
form_1.addEventListener("change", changeFunction, true);