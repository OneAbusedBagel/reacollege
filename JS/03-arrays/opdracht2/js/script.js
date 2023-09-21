"use strict";


const planes =[
	"Ixalan",
	"Tarkir",
	"Ravnica",
	"Dominaria",
	"Theros",
	"Amonkhet",
	"Mirrodin",
	"Innistrad"
];

planes.unshift("Kaladesh");
planes.splice(4, 1,);
planes.splice(3, 0, "Lorwyn");
planes.sort();
planes.reverse();
const text = planes.join();

document.getElementById("span-1").innerHTML = `${planes} `;

document.getElementById("li-1").innerHTML = `${planes} `;

//document.getElementById("li-2").innerHTML = `${movies[0]}`
//document.getElementById("li-3").innerHTML = `${movies[1]}`
//document.getElementById("li-4").innerHTML = `${movies[2]}`
//document.getElementById("li-5").innerHTML = `${movies[3]}`
//document.getElementById("li-6").innerHTML = `${movies[4]}`
