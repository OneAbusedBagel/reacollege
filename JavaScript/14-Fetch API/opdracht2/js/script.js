"use strict"



function changeFunction() {
    fetch("imagecrawler.php")
    .then(response => response.text())
	.then(data => {
		document.getElementById("output").innerHTML = data;
	})
}

setInterval(changeFunction, 30000)
// const form_1 = document.getElementById("versionSelect");
// form_1.addEventListener("change", changeFunction, true);