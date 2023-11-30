
function rng() {
    x = Math.floor(Math.random() * 10 ) + 1,
    alert(x)
};

rng()

function testFunctie1() {
	alert('click success')
}

function testFunctie2() {
	alert('double click success')
}

function testFunctie3() {
	alert('hover succes')
}

const el1 = document.getElementById("button-1");
el1.addEventListener("click", testFunctie1);

const el2 = document.getElementById("button-2");
el2.addEventListener("dblclick", testFunctie2);

const el3 = document.getElementById("button-3");
el3.addEventListener("mouseover", testFunctie3);
