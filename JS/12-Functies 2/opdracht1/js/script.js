"use strict"


const bmo = function(x, y) {
    return x + y 
}

document.getElementById("output").innerHTML = `should be 35. => ` + bmo(20, 15);

const argument1 = "huh?"
const argument2 = "huh?"
const argument3 = "huh?"

var v = 0;

const awd = function(a, b, c) {
    let check_a = !(isNaN(a))
    let check_b = !(isNaN(b))
    let check_c = !(isNaN(c))

    console.log(!(isNaN(a)))
    console.log(!(isNaN(b)))
    console.log(!(isNaN(c)))

    if(check_a == false) { return console.error('a number is broken!')}
    if(check_b == false) { return console.error('a number is broken!')}
    if(check_c == false) { return console.error('a number is broken!')}
    a =+ (a ** 2);
    b =+ (b ** 2);
    c =+ (c ** 2);

    var result = (a + b + c)
    return result

    // v =+ 10
    // console.log(`is this even working? - ` + a,b,c,v)
}

function shorthand(a, b, c) {
    var result = awd(a, b, c);
    document.getElementById("output2").innerHTML = `This is random testing => ` + result;
    console.log("This was done witht he shorthand function for convenience! Result:"+result)
} 
// document.getElementById("output2").innerHTML = `This is random testing => ` + awd(2, 3, 4);
// document.get)EmentById("output2").innerHTML = `This is random testing => ` + awd(5, 6, 7);
shorthand(2,3,4)
shorthand(5,6,7)
// shorthand(paramaters)


// const audi = {
//     _naam: "Audi A5 2.0",
//     _bouwjaar: 2009,
//     _km_stand: 165000,
//     _energielabel: "A",
//     _brandstof: "benzine",
//     _prijs:12750.00,
//     _garantie: false,
//     _opties: [
//         "Cruise Control",
//         "Boordcomputer",
//         "Navigatiesysteem",
//         "Airconditioning",
//         "ABS",
//     ],
//     motor: {
//         _verbruik: "15,62 km/l",
//         _motorinhoud: "1.984 cc",
//         _topsnelheid: "250 km/h",
//         _vermogen: "211 pk",
//     },
//     buy: function() {
//         console.log(`YOU HAVE BOUGHT THE ${this.naam} FOR ${this.prijs} WOW!! WHAT A DEAL CIRCA ${this.bouwjaar}.`)
//     },
//     accelerate: function() {
//         console.log(`THIS ${this.naam} CAN GET TO A TOPSPEED OF ${this.motor.topsnelheid}. INCREDIBLE! SO FAST IT'S [almost]ILLEGAL!!`)
//     },
//     refuel: function() {
//         console.log(`THE ${this.naam} IS NO HEAVY DRINKER ${this.motor.verbruik} SO DON'T WORRY ABOUT PAYING IT'S TAB FOR ${this.brandstof}`)
//     },

//     get naam() {
//         console.log("THIS IS A FKN RECURSION LOOP YOU IDIOUT")
// 		return this.bouwjaar+" "+this.naam;
// 	}
// }

// audi.buy()
// audi.accelerate()
// audi.refuel()

// console.log("it all works, but man what a weird car salesman...")

// document.getElementById("naam").innerHTML = audi.naam
// document.getElementById("bouwjaar").innerHTML = audi.bouwjaar
// document.getElementById("km-stand").innerHTML = audi.km_stand
// document.getElementById("energielabel").innerHTML = audi.energielabel
// document.getElementById("brandstof").innerHTML = audi.brandstof
// document.getElementById("prijs").innerHTML = audi.prijs
// document.getElementById("garantie").innerHTML = audi.garantie
// document.getElementById("opties").innerHTML = audi.opties

// for (let property in audi.motor) {
//     const output_cell0 = property;
//     const output_cell1 = audi.motor[property];

//     const row = document.createElement("tr");
//     const cell0 = document.createElement("td")
//     const content0 = document.createTextNode(output_cell0);
//     const cell1 = document.createElement("td")
//     const content1 = document.createTextNode(output_cell1);

//     cell0.appendChild(content0);
//     cell1.appendChild(content1);
//     row.appendChild(cell0)
//     row.appendChild(cell1);

// document.getElementById("test2").appendChild(row)
// }