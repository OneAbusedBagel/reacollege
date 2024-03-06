"use strict"

let venster = "";
var today = new Date()
var date = (today.getDate().length >1 ? today.getDate() : "0"+today.getDate())+'-'+(today.getMonth()+1)+'-'+today.getFullYear();


function knop1Functie(){
	venster = window.open("", "_blank", "width=200,height=150");
	venster.document.write(`<html>
								<head id=window>
									<meta charset="UTF-8">
									<title>Welke dag?</title>
									<meta name="viewport" content="width=device-width,initial-scale=1">
									<link rel="stylesheet" href="css/stylesheet.css">
								</head>
								<body>
									<container id="window">
										<h2> ${date} </h2>
										<p>you've got to be kidding me</p>
									</container>
								</body>
							</html>`);

};

function knop2Functie(){
	var leave =	"Weet u het zeker";
	if (confirm(leave) == true) {
		venster.close();
	}
}

const knop_1 = document.getElementById("knop-1");
knop_1.addEventListener("click", knop1Functie, true);

var knop_2 = document.getElementById("knop-2");
knop_2.addEventListener("click", knop2Functie, true)

