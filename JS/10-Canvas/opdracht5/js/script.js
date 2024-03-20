"use strict"

const omzet = [
	["Januari",15000],
	["Februari",11500],
	["Maart",9500],
	["April",6000],
	["Mei",7000],
	["Juni",3000],
	["Juli",-5000],
	["Augustus",-2000],
	["September",4000],
	["Oktober",10000],
	["November",18000],
	["December",24000],
]

let check;

var i = 0;
var x = 50
var y = 250

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 2
ctx.moveTo(50, 250);
ctx.lineTo(950, 250);
ctx.stroke();

while(omzet[i]) { 
    check = omzet[i][1] > 0 ? true : false;
    console.log(check)
    if(i <= 11) {
        ctx.fillStyle = check === true ? "green" : "red";
        ctx.fillRect(x, y, 50, -(omzet[i][1] / 100 ))
        x = x + 60
    } else {
        break
    }
    i++
}

