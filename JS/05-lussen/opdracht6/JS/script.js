
"use strict"

const days = [
	"maandag",
	"dinsdag",
	"woensdag",
	"donderdag",
	"vrijdag",
	"zaterdag",
	"zondag"
];

var week = [

];

var i = 0
var x = 6

for (let ab of days) {
	week.push("<li>" + days[x] + "</li>")

	i++
	x--
}

//	I have no idea where the "," betweenn every day is coming from

console.log(i)
console.log(week)
console.log(days)

document.getElementById("container").innerHTML = week;



