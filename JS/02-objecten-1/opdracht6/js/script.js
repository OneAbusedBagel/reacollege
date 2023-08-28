"use strict";

// for some reason that .innerHTML glitch keeps popping up so I keep recycling 1.6 to circumvent it..


const thing = prompt("please input a number with 4 digits before and after the decimal. forexample like this:","1514.3396")



const nu = new Date()

document.getElementById("h-1").innerHTML = `you input: ${thing} `

document.getElementById("li-1").innerHTML = `${Number(thing).toFixed(3)} `
document.getElementById("li-2").innerHTML = `${Number(thing).toFixed(1)}`
document.getElementById("li-3").innerHTML = `${(Number(thing) * 3).toFixed(2)}`
document.getElementById("li-4").innerHTML = `${(Number(thing) / 4).toFixed(2)}`