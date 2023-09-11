
let time = new Date();

let dagVanWeek = time.getDay()
let dagVanMaand = time.getDate()
let maand = (time.getMonth()+1)

document.getElementById("true").innerHTML = `${time}`;


console.log(time);
console.log((dagVanWeek));
console.log((dagVanMaand));
console.log((maand))

if (dagVanWeek == 5 && dagVanMaand == 12)  {
	alert(`Het is vrijdag de 13e!`);
} else {
	alert(`Het is geen vrijdag de 13e...`)
}


if (dagVanWeek == 6 || dagVanWeek == 0)  {
	alert(`Het is Weekend`);
} else {
	alert(`Het is geen Weekend`)
}

if (dagVanMaand == 11 && maand == 9)  {
	alert(`Vandaag is mijn verjaardag!`);
} else {
	alert(`Ik ben nog niet jarig...`)
}

if (!(dagVanWeek == 2 || dagVanWeek == 4 || dagVanWeek == 5))  {
	alert(`Ik ben vandaag vrij!`)
} else {
	alert(`Vandaag is een werkdag`);
}