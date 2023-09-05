"use strict";

var data = {
    items: [{
        naam: "melk",
        prijs: 0.89,
        beschikbaar: 1,
    }, {
        naam: "eieren",
        prijs: 1.29,
        beschikbaar: 0,
    }, {
        naam: "Kaas",
        prijs: 1.69,
        beschikbaar: 1,
    }, {
        naam: "Suiker",
        prijs: 1.00,
        beschikbaar: 0,
    }]
}

console.log(data)

data.items[1].beschikbaar = 1
data.items[0].prijs = 1.29
data.items[1].prijs = 1.49
data.items[2].prijs = 2.79
data.items[3].prijs = 29.99
console.log(data)

document.getElementById("td-1").innerHTML = `${data.items[0].naam} `
document.getElementById("td-2").innerHTML = `${data.items[0].prijs} `
document.getElementById("td-3").innerHTML = `${data.items[0].beschikbaar} `
document.getElementById("td-4").innerHTML = `${data.items[1].naam} `
document.getElementById("td-5").innerHTML = `${data.items[1].prijs} `
document.getElementById("td-6").innerHTML = `${data.items[1].beschikbaar} `
document.getElementById("td-7").innerHTML = `${data.items[2].naam} `
document.getElementById("td-8").innerHTML = `${data.items[2].prijs} `
document.getElementById("td-9").innerHTML = `${data.items[2].beschikbaar} `
document.getElementById("td-10").innerHTML = `${data.items[3].naam} `
document.getElementById("td-11").innerHTML = `${data.items[3].prijs} `
document.getElementById("td-12").innerHTML = `${data.items[3].beschikbaar} `
