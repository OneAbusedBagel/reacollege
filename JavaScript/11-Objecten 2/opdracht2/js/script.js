"use strict"

const audi = {
    naam: "Audi A5 2.0",
    bouwjaar: 2009,
    km_stand: 165000,
    energielabel: "A",
    brandstof: "benzine",
    prijs:12750.00,
    garantie: false,
    opties: [
        "Cruise Control",
        "Boorcomputer",
        "Navigatiesysteem",
        "Airconditioning",
        "ABS",
    ],
    motor: {
        verbruik: "15,62 km/l",
        motorinhoud: "1.984 cc",
        topsnelheid: "250 km/h",
        vermogen: "211 pk",
    },
    buy: function() {
        console.log(`YOU HAVE BOUGHT THE ${this.naam} FOR ${this.prijs} WOW!! WHAT A DEAL CIRCA ${this.bouwjaar}.`)
    },
    accelerate: function() {
        console.log(`THIS ${this.naam} CAN GET TO A TOPSPEED OF ${this.motor.topsnelheid}. INCREDIBLE! SO FAST IT'S (almost)ILLEGAL!!`)
    },
    refuel: function() {
        console.log(`THE ${this.naam} DRINKS ABOUT ${this.motor.verbruik} SO DON'T WORRY ABOUT PAYING IT'S TAB FOR ${this.brandstof}`)
    }
}

audi.buy()
audi.accelerate()
audi.refuel()

console.log("it all works, but man what a weird car salesman...")

document.getElementById("naam").innerHTML = audi.naam
document.getElementById("bouwjaar").innerHTML = audi.bouwjaar
document.getElementById("km-stand").innerHTML = audi.km_stand
document.getElementById("energielabel").innerHTML = audi.energielabel
document.getElementById("brandstof").innerHTML = audi.brandstof
document.getElementById("prijs").innerHTML = audi.prijs
document.getElementById("garantie").innerHTML = audi.garantie
document.getElementById("opties").innerHTML = audi.opties

for (let property in audi.motor) {
    const output_cell0 = property;
    const output_cell1 = audi.motor[property];

    const row = document.createElement("tr");
    const cell0 = document.createElement("td")
    const content0 = document.createTextNode(output_cell0);
    const cell1 = document.createElement("td")
    const content1 = document.createTextNode(output_cell1);

    cell0.appendChild(content0);
    cell1.appendChild(content1);
    row.appendChild(cell0)
    row.appendChild(cell1);

document.getElementById("test2").appendChild(row)
}



// ------------------------


// let output = "";
// for (let property in audi.motor) {
//     output += "<p>" + property + ": " + audi.motor[property] + "</p>";
// }
// document.getElementById("output").innerHTML = output


// for (let property in audi.motor) {
    // output += "<tr>" + "<td>" + "test 1" +"</td>" + "<td>" + "test 2" + "</td>" + "</tr>"
    // output += "<tr>" + "<td>" + property + ":" + "</td>" + "<td>" + audi[property] + "</td>" + "<tr>";
// }
// document.getElementById("test2").innerHTML = output ;


//     console.log(i)