
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

// switch (days) {
// 	case 'maandag':
// 	case 'zaterdag':
// 	case 'zondag':

// 	case 'dinsdag': 
// 	case 'woensdag':
// 	case 'donderdag':
// 	case 'vrijdag':
// }


for (let x = 7; x > 0;) {
	i++
	x--
	if( x === 0 || x === 6 || x === 7) {
		i++
		x--
		continue
	}
	week.push("<li>" + days[x] + "</li>")
}


console.log(i)
console.log(week)
console.log(days)

const re = /\,/gi;

document.getElementById("container").innerHTML = week
document.getElementById("container").innerHTML = document.getElementById("container").innerHTML.replace(re, '')

