"use strict"

var i = 0 
var x = 0

async function changeFunction() {
	// stepOne
    fetch("imagecrawler.php")

	// stepTwo
    .then(response => response.text())

	// stepThree
	.then(data => {
		console.log(data);
		document.getElementById("output").innerHTML = data;

		let stuff = document.querySelectorAll("img");
		console.log(stuff);

		for(let i = 0; i < stuff.length; i++) {
			let alt = stuff[i].alt;
			// console.log(alt);
			alt = alt.replace(".jpg", "");
			alt = alt.replaceAll("-", " ");
			let altRest = alt
			let altLetter = alt.charAt(0).toUpperCase();
			alt = altLetter + altRest.slice(1)
			console.log(alt);
		}
		if(i < 60000){
			i += 10000
			console.log(i)
		}
	})
}

// changeFunction()
setInterval(changeFunction, (30000 + i))
const form_1 = document.getElementById("versionSelect");
form_1.addEventListener("change", changeFunction, true);


//  testing / attemp at async wait method---  
// I honestly have no idea how they want me to convert it with async/wait the questions and their requirements are getting more vague and annoying
// console.log("new things start here)

// function stepOne(){
// 	return new Promise((myResolve, myReject) => {
// 		setTimeout(() => {
// 			console.log("step one -- started")

// 			console.log("step one -- ended")
// 			myResolve()
// 		},1000)
// 	});
// }

// function stepTwo(){
// 	return new Promise((myResolve, myReject) => {
// 		setTimeout(() => {
// 			console.log("step two -- started")
// 			const test = () => (fetch("imagecrawler.php") .then(response => response.text()))
// 			console.log("step two -- ended")
// 			myResolve(test)
// 		},1000)
// 	});
// }

// function stepThree(test){
// 	return new Promise((myResolve, myReject) => {
// 		setTimeout(() => {
// 			console.log("step three -- started")
// 			data = test
// 			const temp = (data => {
// 				console.log(data);
// 				document.getElementById("output").innerHTML = data;

// 				let stuff = document.querySelectorAll("img");
// 				console.log(stuff);

// 				for(let i = 0; i < stuff.length; i++) {
// 					let alt = stuff[i].alt;
// 					// console.log(alt);
// 					alt = alt.replace(".jpg", "");
// 					alt = alt.replaceAll("-", " ");
// 					let altRest = alt
// 					let altLetter = alt.charAt(0).toUpperCase();
// 					alt = altLetter + altRest.slice(1)
// 					console.log(alt);
// 				}
// 			})
// 			temp()
// 			console.log("step three -- ended")
// 			myResolve()
// 		},1000)
// 	});
// }

// async function myPromises(){
// 	// await stepOne(); 
// 	await stepTwo(); 
// 	await stepThree();
// }
// // myPromises();

