"use strict"

// Pattern part
const energielabelPattern = /(A|B|C|D|E|F|G){1}/i
const brandstofPattern = /benzine|diesel/
const prijsPattern = /^[0-9]+\.[0-9]{2}$/

const audi = {
    _naam: "Audi A5 2.0",
    _bouwjaar: 2009,
    _km_stand: 165000,
    _energielabel: "A",
    _brandstof: "benzine",
    _prijs:12750,
    _garantie: false,
    _opties: [
        "Cruise Control",
        "Boorcomputer",
        "Navigatiesysteem",
        "Airconditioning",
        "ABS",
    ],
    // this stuff is broken. Ask Patrick about how to fix using a getter on a nestled object.
    _motor: {
        verbruik: "15,62 km/l",
        motorinhoud: "1.984 cc",
        topsnelheid: "250 km/h",
        vermogen: "211 pk",
    },

    buy: function() {
        console.log(`YOU HAVE BOUGHT THE [${this.naam}] FOR [${this.prijs}] WOW!! WHAT A DEAL CIRCA [${this.bouwjaar}].`)
    },
    accelerate: function() {
        console.log(`THIS [${this.naam}] CAN GET TO A TOPSPEED OF [${this.topsnelheid}]. INCREDIBLE! SO FAST IT'S (almost)ILLEGAL!!`)
    },
    refuel: function() {
        console.log(`THE [${this.naam}] DRINKS ABOUT [${this.verbruik}] SO DON'T WORRY ABOUT PAYING IT'S TAB FOR [${this.brandstof}]`)
    },


    get naam() {
        return this._naam
    },
    get bouwjaar() {
        return this._bouwjaar
    },
    get km_stand() {
        return this._km_stand
    },
    get energielabel() {
        return this._energielabel
    },
    get brandstof() {
        return this._brandstof
    },
    get prijs() {
        let price = this._prijs;
        if(String(price).split(".")[1]?.length > 1) {
            let priceRounded = (Math.round(price * 100)) / 100;
            return ("€")+priceRounded;
        } if(String(price).split(".")[1]?.length > 0){
            return ("€")+price+("0");
        } else {
            return ("€")+price+(".00");
        }
    },
    get garantie() {
        return this._garantie ? "Ja" : "Nee";
    },
    get opties() {
        return this._opties.join(", ");
    },
    get garantie() {
        return this._garantie ? "Ja" : "Nee";
    },
    get opties() {
        return this._opties.join(", ");
    },
    get verbruik() {
        return this._motor.verbruik;
    },
    get topsnelheid() {
        return this._motor.topsnelheid;
    },
    get motorinhoud() {
        return this._motor.motorinhoud;
    },
    get vermogen() {
        return this._motor.vermogen;
    },
    set naam(naam) {
		if (typeof naam === "string"){
			this._naam = naam;
		} else {
			throw new TypeError("'naam' Value isn't a string");
		}
	},
    set bouwjaar(bouwjaar) {
		if (bouwjaar >= 2007 && bouwjaar <= 2016){
			this._bouwjaar = bouwjaar;
		} else {
			throw new TypeError("Invalid 'bouwjaar' value");
		}
	},
    set km_stand(km_stand) {
        if (Number.isInteger(km_stand) === true){
            this._km_stand = km_stand;
		} else {
			throw new TypeError("Number isn't valid (only whole numbers)");
		}
	},
    set energielabel(energielabel) {
        if (energielabelPattern.test(energielabel) === true) {
            this._energielabel = energielabel;
        } else {
            console.log(energielabel)
            throw new TypeError("Invalid energielabel value");
        }
	},
    set brandstof(brandstof) {
        if(brandstofPattern.test(brandstof) === true){
            this._brandstof = brandstof;
        } else {
            throw new TypeError("'brandstof' isn't either 'diesl' or 'benzine'");
        }
	},
    set prijs(prijs) {
        if(prijsPattern.test(prijs) === true) {
            this._prijs = prijs;
        } else {
            throw new TypeError 
        }
	},
    set garantie(garantie) {
        if(garantie === Boolean){
        this._garantie = garantie;
        } else {
            throw new TypeError("'Garantie' value isn't a boolean")
        }
	},
    set opties(opties) {
        this._opties = opties;
    },
    set verbruik(verbruik) {
        this._motor.verbruik = verbruik
    },
    set topsnelheid(topsnelheid) {
        this._motor.topsnelheid = topsnelheid
    },
    set motorinhoud(motorinhoud) {
        this._motor.motorinhoud = motorinhoud
    },
    set vermogen(vermogen) {
        this._motor.vermogen = vermogen
    }
}

// setter tesing lines
audi.buy();
audi.accelerate();
audi.refuel();
// audi.naam = "Honda civic";
// audi.bouwjaar = 2011;
// audi.km_stand = 200191;
// audi.energielabel = "b";
// audi.brandstof = "diesel";
// audi.verbruik =  "12,3 Km/A"
audi.topsnelheid = "270 km/h"
// audi.motorinhoud = "176 apples"
// audi.vermogen = "20 Pp"
audi.opties = [
    "Lichtmetalen velgen",
    "LED koplampen",
    "Opgevoerde motor",
    "Dikke bass speaker",
]

console.log("it all works, but man what a weird car salesman...");

document.getElementById("naam").innerHTML = audi.naam;
document.getElementById("bouwjaar").innerHTML = audi.bouwjaar;
document.getElementById("km-stand").innerHTML = audi.km_stand;
document.getElementById("energielabel").innerHTML = audi.energielabel;
document.getElementById("brandstof").innerHTML = audi.brandstof;
document.getElementById("prijs").innerHTML = audi.prijs;
document.getElementById("garantie").innerHTML = audi.garantie;
document.getElementById("opties").innerHTML = audi.opties;

for (let property in audi._motor) {
    const output_cell0 = property;
    // I know this isn't correct but my brain isn't working. so I can't understand the pieces enough to fix it.
    const output_cell1 = audi._motor[property];

    const row = document.createElement("tr");
    const cell0 = document.createElement("td");
    const content0 = document.createTextNode(output_cell0);
    const cell1 = document.createElement("td");
    const content1 = document.createTextNode(output_cell1);

    cell0.appendChild(content0);
    cell1.appendChild(content1);
    row.appendChild(cell0);
    row.appendChild(cell1);

document.getElementById("test2").appendChild(row);
}
