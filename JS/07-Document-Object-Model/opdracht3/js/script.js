
var li = []
var text = []
const steden = [
    "Den Haag",
	"Antwerpen",
	"Utrecht",
	"Gent",
	"Eindhoven",
	"Groningen",
	"Tilburg"
]

steden.sort()
console.log(steden)

const ol = document.createElement("ol")

document.querySelector("body").appendChild(ol)

function knop1Functie() {
 
    for (let i = 0; i < steden.length; i++) {
        li[i] = document.createElement("li")

        document.querySelector("ol").appendChild(li[i])

        text[i] = document.createTextNode("simple li test")

        li[i].appendChild(text[i])
        li[i].innerText = (steden[i])
        console.log(i)
    }
}

let knop_1 = document.getElementById("knop-1");
knop_1.addEventListener("click",knop1Functie, true )
