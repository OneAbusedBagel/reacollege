"use strict"



function changeFunction() {
    fetch("imagecrawler.php")
    .then(response => response.text())
	.then(data => {
		console.log(data);
		document.getElementById("output").innerHTML = data;

		let stuff = document.querySelectorAll("img");
		console.log(stuff);

		for(let i = 0; i < stuff.length; i++) {
			let alt = stuff[i].alt;
			console.log(alt);
			alt = alt.replace(".jpg", "");
			alt = alt.replaceAll("-", " ");
			let altRest = alt
			let altLetter = alt.charAt(0).toUpperCase();
			alt = altLetter + altRest.slice(1)
			// stuff[i] = alt;
			console.log(alt);
		}
		console.log(stuff)
	})
}

// changeFunction()
setInterval(changeFunction, 30000)
const form_1 = document.getElementById("versionSelect");
form_1.addEventListener("change", changeFunction, true);