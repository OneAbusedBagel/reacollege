"use strict"

const persons = [
    {name: "Tom", age: 33, loc: "Weert"},
    {name: "Tim", age: 32, loc: "Woort"},
    {name: "Tam", age: 31, loc: "Wiirt"},
    {name: "Tum", age: 34, loc: "Waart"},
    {name: "Tem", age: 35, loc: "Wuurt"}
]

// FunctionStorage [
//     function sectionMaker(inputText){
//         let result = "<section><p>"+inputText+"</p></section>";
//         return result;
//     },

//     function textTransform(inputText) {
//         let result = inputText.toUpperCase()
//         return result;
//     }

// function formatPerson() {
//     name = person.name.substring(0,1),
//     age = person.age + 1,
//     location = person.loc.toUpperCase()
//     return name, age, location
// }

// function pageMaker() {
//     `<h1> ${name} </h1>`
//     `<p>  ${age}  </p>`
//     `<p>  ${loc}  </p>`
// }

// ] 

const pageMaker = (name, age, loc) => `<h1> ${name} </h1> <p>  ${age}  </p> <p>  ${loc}  </p>`

document.getElementById("output").innerHTML = pageMaker(persons[0]); // testing text will be changed to the const 'formattedPersons' 
console.log(pageMaker)

const formattedPersons = [

]

const formatPerson = person => person.name;
console.log(formatPerson)

const formatNames = persons.map(person => person.name.substring(0,1));
const formatAges = persons.map(person => person.age + 1);
const formatLocs = persons.map(person => person.loc.toUpperCase());

console.log(formatNames);
console.log(formatAges );
console.log(formatLocs );
