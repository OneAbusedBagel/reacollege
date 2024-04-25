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
			alt = alt.toUpperCase();
			stuff[i] = alt;
		}
		console.log(stuff)
	})
}

changeFunction()
// setInterval(changeFunction, 300)
// const form_1 = document.getElementById("versionSelect");
// form_1.addEventListener("change", changeFunction, true);