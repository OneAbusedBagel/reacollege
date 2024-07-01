"use strict"

// Pattern part
const bouwjaarPattern = /IDK YET/
const Km_standPattern = /IDK YET/
const brandstofPattern = /IDK YET/
const energielabelPattern = /IDK YET/
const prijsPattern = /IDK YET/
const garantiePattern = /IDK YET/

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
    // this stuff is broken. Ask Patrick about how to fix using a getter on a nstled object.
    _motor: {
        _verbruik: "15,62 km/l",
        _motorinhoud: "1.984 cc",
        _topsnelheid: "250 km/h",
        _vermogen: "211 pk",
    },

    buy: function() {
        console.log(`YOU HAVE BOUGHT THE ${this.naam} FOR ${this.prijs} WOW!! WHAT A DEAL CIRCA ${this.bouwjaar}.`)
    },
    accelerate: function() {
        console.log(`THIS ${this.naam} CAN GET TO A TOPSPEED OF ${this.motor.topsnelheid}. INCREDIBLE! SO FAST IT'S (almost)ILLEGAL!!`)
    },
    refuel: function() {
        console.log(`THE ${this.naam} DRINKS ABOUT ${this.motor.verbruik} SO DON'T WORRY ABOUT PAYING IT'S TAB FOR ${this.brandstof}`)
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
        console.log(price)
        if(String(price).split(".")[1]?.length > 2) {
            let priceRounded = (Math.round(price * 100)) / 100
            return ("€")+priceRounded
        } else {
            return ("€")+price+(".00")
        }
    },
    get garantie() {
        return this._garantie ? "Ja" : "Nee";
    },
    get opties() {
        return this._opties.join(", ")
    },
    motor: {
        get verbruik() {
            return this._verbruik
        },
        get motorinhoud() {
            return this._motorinhoud
        },
        get topsnelheid() {
            return this._topsnelheid
        },
        get vermogen() {
            return this._vermogen
        }
    },
    set naam(naam) {
		if (typeof naam === "string"){
			this._naam = naam;
		} else {
			throw new TypeError("'naam' Value isn't a string");
		}
	},
    set bouwjaar(bouwjaar) {
		if (bouwjaarPattern.test(bouwjaar) == true){
			this._bouwjaar = bouwjaar;
		} else {
			throw new TypeError("'bouwjaar' Value isn't correct");
		}
	},
    set Km_stand(Km_stand) {
        this._Km_stand = Km_stand;
	},
    set energielabel(energielabel) {
        this._energielabel = energielabel;
	},
    set brandstof(brandstof) {
        this._brandstof = brandstof;
	},
    set prijs(prijs) {
        this._prijs = prijs;
	},
    set garantie(garantie) {
        this._garantie = garantie;
	},
}

audi.buy()
audi.accelerate()
audi.refuel()
audi.naam = "Honda civic"

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
