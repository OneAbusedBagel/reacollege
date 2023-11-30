
const el1 = document.getElementById("name");
el1.addEventListener("input", testFunctie);

function testFunctie() {
    var head = document.getElementById("name").value
    document.getElementById("output").innerHTML = `<i> ${head} </i>`;
}

const el2 = document.getElementById("checkbox");
el2.addEventListener("change", testFunctie2);

function testFunctie2() {
    alert(`This page adheres to the requierements of the new privacy law`)
}

var confirmation = confirm(`Do you wish to continue?`)
console.log(confirmation)

if (confirmation) {
    window.location.assign("https://www.google.nl");    
}
