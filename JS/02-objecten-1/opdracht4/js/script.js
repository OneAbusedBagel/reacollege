"use strict";

// for some reason .innerhtml works in a copy of "opdracht-1.6" but not in another file and changing to much html breaks it again (somehow??) so I'm changing as much as I can to suit the exercise

const nu = new Date()

document.getElementById("span-1").innerHTML = `Deze pagina is opgevraagd op ${nu.getDay()}-${nu.getMonth() + 1}-${nu.getFullYear()}`
document.getElementById("span-2").innerHTML = `© CodeCrashers – ${nu.getFullYear()}`;
document.getElementById("span-3").innerHTML = `Ait is now ${nu.getHours()}:${nu.getMinutes()}:${nu.getSeconds()}`

//I just changed the html quite a bit, put in all the css and somehow innerhtml just works now? I didn't change the js code (on the innerhtml side) but it no longer declares it as null in the console.log 
