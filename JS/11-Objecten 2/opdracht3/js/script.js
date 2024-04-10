"use strict"

const audi = {
    _naam: "Audi A5 2.0",
    _bouwjaar: 2009,
    _km_stand: 165000,
    _energielabel: "A",
    _brandstof: "benzine",
    _prijs:12750.00,
    _garantie: false,
    _opties: [
        "Cruise Control",
        "Boordcomputer",
        "Navigatiesysteem",
        "Airconditioning",
        "ABS",
    ],
    motor: {
        _verbruik: "15,62 km/l",
        _motorinhoud: "1.984 cc",
        _topsnelheid: "250 km/h",
        _vermogen: "211 pk",
    },
    buy: function() {
        console.log(`YOU HAVE BOUGHT THE ${this.naam} FOR ${this.prijs} WOW!! WHAT A DEAL FROM CIRCA ${this.bouwjaar}.`)
    },
    accelerate: function() {
        console.log(`THIS ${this.naam} CAN GET TO A TOPSPEED OF ${this.motor.topsnelheid}. INCREDIBLE! SO FAST IT'S [almost]ILLEGAL!!`)
    },
    refuel: function() {
        console.log(`THE ${this.naam} IS NO HEAVY DRINKER ${this.motor.verbruik} SO DON'T WORRY ABOUT PAYING IT'S TAB FOR ${this.brandstof}`)
    },

    get naam() {
        console.log("THIS IS A RECURSION LOOP YOU IDIOT FIX IT") // I don't remember if I fixed it... | Addendum, still a recursion loop
		return this.bouwjaar+" "+this.naam;
	}

    // useless {
    //     // get bouwjaar() {
    //     // 	return this.bouwjaar; 
    //     // },
    //     // get km_stand() {
    //     // 	return this.km_stand; 
    //     // },
    //     // get energielabel() {
    //     // 	return this.energielabel; 
    //     // },
    //     // get brandstof() {
    //     // 	return this.brandstof; 
    //     // },
    //     // get prijs() {
    //     // 	return "€"+this.prijs; 
    //     // },
    //     // get garantie() {
    //     // 	return this.garantie; 
    //     // },
    //     // get opties() {
    //     // 	return this.opties; 
    //     // },
    //     // get verbruik() {
    //     // 	return this.motor.verbruik; 
    //     // },
    //     // get motorinhoud() {
    //     // 	return this.motor.motorinhoud; 
    //     // },
    //     // get topsnelheid() {
    //     // 	return this.motor.topsnelheid; 
    //     // },
    //     // get vermogen() {
    //     // 	return this.motor.vermogen; 
    //     // }
    // }
}

audi.buy()
audi.accelerate()
audi.refuel()

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